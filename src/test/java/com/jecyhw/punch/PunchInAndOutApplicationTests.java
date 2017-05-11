package com.jecyhw.punch;

import com.jecyhw.punch.domain.User;
import com.jecyhw.punch.repository.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PunchInAndOutApplicationTests {

	@Test
	public void contextLoads() {

	}

}
