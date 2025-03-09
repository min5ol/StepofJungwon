package com.min5ol.back.Service;

import com.min5ol.back.DTO.UserDTO;
import com.min5ol.back.Entity.User;
import com.min5ol.back.Repository.UserRepository;
import com.min5ol.back.DTO.SignUpRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // Correct constructor injection
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserDTO getUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.map(u -> new UserDTO(u.getId(), u.getUsername(), u.getNickname(), u.getEmail()))
                .orElse(null);
    }

    // 회원가입 메소드
    public String signUp(SignUpRequest signUpRequest) {
        // 이메일 중복 체크
        Optional<User> existingUser = userRepository.findByEmail(signUpRequest.getEmail());
        if (existingUser.isPresent()) {
            return "Email is already registered.";
        }

        // 비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(signUpRequest.getPassword());

        // 새로운 User 객체 생성
        User user = User.builder()
                .username(signUpRequest.getUsername())
                .password(encodedPassword)
                .nickname(signUpRequest.getNickname())
                .email(signUpRequest.getEmail())
                .role(User.Role.USER) // 기본 역할은 USER
                .build();

        // User 저장
        userRepository.save(user);
        return "User registered successfully";
    }
}
