package com.jecyhw.punch.controller;

import com.jecyhw.punch.domain.CheckResponse;
import com.jecyhw.punch.domain.Form;
import com.jecyhw.punch.domain.User;
import com.jecyhw.punch.domain.UserToken;
import com.jecyhw.punch.repository.UserRepository;
import com.jecyhw.punch.response.Response;
import com.jecyhw.punch.service.PunchService;
import com.jecyhw.punch.task.PunchTask;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by jecyhw on 17-1-2.
 */
@RestController
@Configuration
public class HomeController {

    @Autowired
    private PunchTask punchTask;

    @Autowired
    private PunchService punchService;

    @Autowired
    private UserRepository userRepository;

    static private final Logger logger = LoggerFactory.getLogger(HomeController.class);

    @RequestMapping(value = "", method = RequestMethod.GET)
    public ModelAndView index() {
        return new ModelAndView("index");
    }

    @RequestMapping(value = "in", method = RequestMethod.POST)
    public Response<?> in(Form form) {
        form.setType("checkin");
        CheckResponse checkResponse = punchService.check(form);
        if (checkResponse.getSuccess()) {
            return Response.success("上班成功,您辛苦了,别忘了下班打卡!");
        }
        return Response.fail(checkResponse.getErrorMessage());
    }

    @RequestMapping(value = "out", method = RequestMethod.POST)
    public Response<?> out(Form form) {
        form.setType("checkout");
        CheckResponse checkResponse = punchService.check(form);
        if (checkResponse.getSuccess()) {
            return Response.success("下班成功,您辛苦了!");
        }
        return Response.fail(checkResponse.getErrorMessage());
    }

    @RequestMapping(value = "auto", method = RequestMethod.POST)
    public Response<?> autoWork(Form form) {
        User user = new User();
        user.setAutoWork(form.getAutoWork());
        user.setEmail(form.getUserName());
        user.setPwd(form.getPassword());
        user.setSendEmail(form.getSendEmail());
        return Response.success(punchService.autoWork(user));
    }

    @RequestMapping(value = "list", method = RequestMethod.POST)
    public Response<?> list(Form form) {
        return Response.success(punchService.list(form));
    }

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public Response<?> login(Form form) {
        Map<String, Object> map = new HashMap<>();
        UserToken userToken = punchService.singIn(form);
        map.put("ut", userToken);
        map.put("auto", userRepository.findByEmail(form.getUserName()));
        return Response.success(map);
    }

    @RequestMapping(value = "work", method = RequestMethod.GET)
    public Response<?> login(@RequestParam Boolean onWork) {
        punchTask.work(onWork);
        return Response.success(true);
    }

    @RequestMapping(value = "import", method = RequestMethod.GET)
    public Response<?> importWorkday(@RequestParam Boolean onWork) {
        punchTask.importWorkDay(null);
        return Response.success(true);
    }

    @RequestMapping(value = "health/check", method = RequestMethod.GET)
    public Response<?> health() {
        return Response.success(true);
    }

    @RequestMapping(value = "mail/check", method = RequestMethod.GET)
    public Response<?> mail() {
        punchTask.sendEmail("1147352923@qq.com", "test");
        return Response.success(true);
    }
//    @RequestMapping(value = "logout", method = RequestMethod.POST)
//    public Response<?> logout() {
//        restTemplate.getForEntity("http://159.226.29.10/CnicCheck/authorization?tm=" + System.nanoTime(), String.class);
//        return Response.success(null);
//    }
}
