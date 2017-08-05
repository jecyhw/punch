package com.jecyhw.punch.task;

import com.jecyhw.punch.domain.*;
import com.jecyhw.punch.repository.UserRepository;
import com.jecyhw.punch.repository.WorkDayRepository;
import com.jecyhw.punch.service.PunchService;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.time.DateFormatUtils;
import org.apache.commons.lang3.time.DateUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by jecyhw on 2017/4/17.
 */
@Component
public class PunchTask {
    static private final Logger logger = LoggerFactory.getLogger(PunchTask.class);

    @Autowired
    private PunchService punchService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private WorkDayRepository workDayRepository;

    @Autowired
    private JavaMailSender javaMailSender;

    private SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");

    public void work(Boolean onWork) {
        WorkDay workDay = workDayRepository.findOne(Integer.valueOf(dateFormat.format(new Date())));
        if (workDay != null) {
            new Thread(new AutoWork(onWork, 300L)).start();
        }
    }

    @Scheduled(cron = "0 15 7 * * ?")
    public void onWork() {
        WorkDay workDay = workDayRepository.findOne(Integer.valueOf(dateFormat.format(new Date())));
        if (workDay != null) {
            new Thread(new AutoWork(true, 3600L)).start();
        }
        logger.info("onWork");
    }

    @Scheduled(cron = "0 0 18 * * ?")
    public void offWork() {
        WorkDay workDay = workDayRepository.findOne(Integer.valueOf(dateFormat.format(new Date())));
        if (workDay != null) {
            new Thread(new AutoWork(false, 3600L)).start();
        }
        logger.info("offWork");

    }

    @Scheduled(fixedRate = 1000 * 60)
    public void guard() {
        logger.info("guard: {}", punchService.healthCheck());
    }

    public void importWorkDay(ContextRefreshedEvent event) {
        logger.info("importWorkDay");
        ClassPathResource resource = new ClassPathResource("work_day");
        try {
            List<WorkDay> workDays = new ArrayList<>();
            BufferedReader reader = new BufferedReader(new InputStreamReader(resource.getInputStream(), "UTF-8"));
            for (String string : reader.lines().collect(Collectors.toList())) {
                if (!StringUtils.isEmpty(string)) {
                    workDays.add(new WorkDay(Integer.parseInt(string)));
                }
            }
            workDayRepository.save(workDays);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void syncWorkDay() {
        RestTemplate restTemplate = new RestTemplate();
        Calendar cal = Calendar.getInstance();
        Calendar end = Calendar.getInstance();
        end.set(end.get(Calendar.YEAR) + 1, 0, 1);
        Map<String, String> params = new HashMap<>();
        List<String> workDays = new ArrayList<>();
        while (cal.before(end)) {
            String day = dateFormat.format(cal.getTime());
            params.put("day", day);
            String result = restTemplate.getForObject("http://tool.bitefu.net/jiari/?d={day}", String.class, params);
            if (result.equals("0")) {
                workDays.add(day);
            }
            cal.add(Calendar.DATE, 1);
        }
        try {
            FileUtils.write(new File("work_day"), String.join("\n", workDays), "UTF-8");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    class AutoWork implements Runnable{
        private Boolean onWork;
        private Long time;

        AutoWork(Boolean onWork, Long time) {
            this.onWork = onWork;
            this.time = time;
        }

        @Override
        public void run() {
            Date today = new Date();
            if (onWork) {
                //上班时间验证
                if (today.after(DateUtils.setMinutes(DateUtils.setHours(today, 8), 35))) {//当前时间超过8点30
                    logger.info("not on work time");
                    return;
                }
            } else {
                if (today.before(DateUtils.setMinutes(DateUtils.setHours(today, 17), 0))) {//当前时间不到17点
                    logger.info("not off work time");
                    return;
                }
            }
            logger.info("find user");
            List<User> users = userRepository.findByAutoWork(true);
            long curTimeStamp = System.currentTimeMillis() / 1000; //s

            List<String> list = new ArrayList<>(users.size());

            logger.info("random time");
            for (User user : users) {
                user.setSendTimeStamp(curTimeStamp + (long)(Math.random() * time ));
                user.setOnWork(onWork);
                list.add(user.getEmail() + "(" + DateFormatUtils.format(new Date(user.getSendTimeStamp() * 1000), "HH:mm:ss") + ")");
            }

            logger.info("sort by time");
            users.sort(new UserComparator());

            logger.info("send mail");
            sendEmail("1147352923@qq.com", "自动打卡正在运行: " + String.join(",", list) + "打卡状态:" + onWork);
            for (int i = 0; i < users.size();) {
                try {
                    logger.info("try");
                    Thread.sleep(5000 + (int)(Math.random() * 5));//等待5到10秒
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                User user = users.get(i);
                if (System.currentTimeMillis() / 1000 > user.getSendTimeStamp()) {
                    ++i;
                    Form form = new Form();
                    form.setUserName(user.getEmail());
                    form.setPassword(user.getPwd());
                    int retryCount = 5;
                    CheckResponse checkResponse = null;
                    String errorMsg = "";
                    do {
                        try {
                            UserToken userToken = punchService.singIn(form);
                            Thread.sleep(5000 + (int) (Math.random() * 5));//等待5到10秒
                            form.setType(onWork ? "checkin" : "checkout");
                            form.setToken(userToken.getToken());

                            Point point = randomPoint();
                            form.setLongitude(point.getLongitude());
                            form.setLatitude(point.getLatitude());
                            logger.info("正在处理: {}", user.getEmail());
                            checkResponse = punchService.check(form);
                        } catch (Exception e) {
                            e.printStackTrace();
                            logger.info(e.getMessage());
                            errorMsg = e.getMessage();
                        }
                    } while (retryCount-- > 0 && (checkResponse == null || !checkResponse.getSuccess()));//失败最多重试五次

                    if (checkResponse == null || !checkResponse.getSuccess()) {
                        sendEmail(user.getEmail(), (onWork ? "上" : "下") + "班打卡失败,原因(" + (checkResponse == null ? errorMsg : checkResponse.getErrorMessage()) + ")");
                    } else {
                        sendEmail(user.getEmail(), (onWork ? "上" : "下") + "班打卡成功");
                    }
                }
            }
            sendEmail("1147352923@qq.com", "自动打卡结束");
        }
    }



    private Point randomPoint() {
        Point point = new Point();
        point.setLongitude(random(116.329));
        point.setLatitude(random(39.979));
        return point;
    }

    private double random(double num) {
        return Double.parseDouble(String.format("%.6f", num + Math.random() * 0.001));
    }

    public void sendEmail(String email, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(email);
        message.setTo(email);
        message.setSubject("来自自动打卡");
        message.setText(body);
        javaMailSender.send(message);
    }

    class UserComparator implements Comparator<User> {

        @Override
        public int compare(User u1, User u2) {
            return u1.getSendTimeStamp().compareTo(u2.getSendTimeStamp());
        }
    }
}
