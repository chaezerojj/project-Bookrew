package com.bookrew;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public UserDetailsService userDetailsService() {
    	UserDetails user = User.withUsername("user")
                .password(passwordEncoder().encode("password"))
                .roles("USER")
                .build();
            return new InMemoryUserDetailsManager(user);
    }
    
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
            .requestMatchers("/api/auth/**").permitAll() // /api/auth/**는 모든 사용자 접근 가능
            .requestMatchers("/api/auth/login", "/api/auth/signup").permitAll()
            .requestMatchers("/api/bookrew/booklist/**", "/api/bookrew/bookboard/**",
            		 "/api/bookrew/freeboard/**").permitAll() // 로그인 페이지와 특정 public URL은 모두 접근 허용
            .requestMatchers(HttpMethod.POST, "/api/bookrew/bookboard/**", "/api/bookrew/freeboard/**", "/api/bookrew/booklist/**").hasRole("USER") // POST 요청 (작성)은 USER 권한을 요구
            .requestMatchers(HttpMethod.PUT, "/api/bookrew/bookboard/**", "/api/bookrew/freeboard/**", "/api/bookrew/booklist/**").hasRole("USER") // PUT 요청 (수정)은 USER 권한을 요구
            .requestMatchers(HttpMethod.DELETE, "/api/bookrew/bookboard/**", "/api/bookrew/freeboard/**", "/api/bookrew/booklist/**").hasRole("USER") // DELETE 요청 (삭제)은 USER 권한을 요구
            .anyRequest().authenticated() // 그 외 모든 요청에 대해 인증된 사용자만 접근 허용
            .and()
            .formLogin()
                .loginPage("/login")
                // 사용자 인증이 안되면 로그인 페이지로 감
                .permitAll()
                // 모든 사용자가 로그인 할 수 있도록 허용
                .defaultSuccessUrl("/main", true)
                // 로그인 후 기본적으로 main페이지로 가게 됨 (true: 항상 해당 url로 이동함)
                .and()
            .logout()
                .logoutUrl("/logout")
                // 로그아웃
                .logoutSuccessUrl("/main")
                // 로그인 성공 시 main페이지로 이동함
                .invalidateHttpSession(true)
                // http세션 무효화, 세션에 저장된 모든 데이터 삭제함
                .deleteCookies("JSESSIONID")
                // 로그아웃 후 삭제할 쿠키 (JSESSIONID)
                .and()
            .csrf().disable(); // CSRF 보호 비활성화
        // 개발 및 테스트 목적으로 편리하게 하기 위해 설정함
        // 프로덕션 환경에서는 보안 문제 발생 주의

        return http.build();
    }
}
