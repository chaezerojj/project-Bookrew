package com.bookrew.user;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class UserController {
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    
    // 전체 사용자 조회 엔드포인트
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAllUsers();
        return ResponseEntity.ok(users);
    }


    // 회원 가입
    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        logger.info("Received signup request for user: {}", user.getUserId());

        // 사용자 중복 확인
        if (userService.isUserExists(user.getUserId())) {
            logger.warn("User already exists: {}", user.getUserId());
            return ResponseEntity.status(409).body("User already exists");
        }

        // 사용자 비밀번호 암호화
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

        // 사용자 등록
        try {
            userService.register(user);
            logger.info("User registered successfully: {}", user.getUserId());
            return ResponseEntity.ok("User registered successfully!");
        } catch (Exception e) {
            logger.error("Error registering user", e);
            return ResponseEntity.status(500).body("Error registering user");
        }
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User existingUser = userService.findByUserId(user.getUserId());
        if (existingUser != null && bCryptPasswordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            // Generated JWT Token
            String token = "dummy-jwt-token"; // replace with real token generation
            return ResponseEntity.ok(token);
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}
