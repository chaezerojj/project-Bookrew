package com.bookrew.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import jakarta.annotation.PostConstruct;

public class Test {
	@Autowired
	private UserService userService;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@PostConstruct
	public void init() {
	    User testUser = new User();
	    testUser.setUserId("testuser");
	    testUser.setPassword(bCryptPasswordEncoder.encode("testpassword")); // 비밀번호를 암호화
	    userService.register(testUser);
	}

}
