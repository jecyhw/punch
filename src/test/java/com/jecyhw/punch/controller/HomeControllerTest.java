package com.jecyhw.punch.controller;

import com.jecyhw.punch.domain.Form;
import com.jecyhw.punch.repository.WorkDayRepository;
import com.jecyhw.punch.task.PunchTask;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by jecyhw on 17-1-2.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class HomeControllerTest {

    @Autowired
    private PunchTask punchTask;

    @Test
    public void login() throws Exception {
//        Form form = new Form();
//        form.setUserName("yanghuiwei@cnic.cn");
//        form.setPassword("huiwei173500165");
//        System.out.println(homeController.login(form).getMessage());
//        form.setPassword("");
//        System.out.println(homeController.login(form).getMessage());
        punchTask.syncWorkDay();
    }

}
