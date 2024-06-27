package com.bookrew.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder; // Spring Security
	
	// register - 새 사용자 등록
	public User register(User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		// 사용자 비밀번호를 암호화
		// 암호화된 비밀번호를 가진 사용자를 리포지토리를 통해 데이터베이스에 저장
		return userRepository.save(user);
	}
	
	// userRepository에서 userId로 사용자 조회
	public User findByUserId(String userId) {
		return userRepository.findByUserId(userId).orElse(null);
		// 사용자가 존재하면 해당 사용자의 객체 반환, 아니면 null 반환
	}

	public List<User> findAllUsers() {
		return userRepository.findAll();
	}
	
    // userId가 이미 존재하는지 확인
    public boolean isUserExists(String userId) {
        return userRepository.findByUserId(userId).isPresent();
    }
}
