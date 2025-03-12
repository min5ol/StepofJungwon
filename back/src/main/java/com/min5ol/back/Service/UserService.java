package com.min5ol.back.Service;

import com.min5ol.back.DTO.UserResponse;
import com.min5ol.back.Entity.User;
import com.min5ol.back.Repository.UserRepository;
import com.min5ol.back.DTO.SignUpRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // ID로 사용자 정보 조회
    public UserResponse getUserById(Long id) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found"));
        return new UserResponse(user.getId(), user.getUsername(), user.getNickname(), user.getEmail(), user.getProfileImg());
    }

    // 회원가입 기능
    public String signUp(SignUpRequest signUpRequest) {
        if (userRepository.findByEmail(signUpRequest.getEmail()).isPresent()) {
            return "Email is already registered.";
        }
        String encodedPassword = passwordEncoder.encode(signUpRequest.getPassword());
        User user = User.builder()
                .username(signUpRequest.getUsername())
                .password(encodedPassword)
                .nickname(signUpRequest.getNickname())
                .email(signUpRequest.getEmail())
                .role(User.Role.USER)
                .profileImg("https://storage.googleapis.com/your-bucket-name/profile1.png")
                .build();
        userRepository.save(user);
        return "User registered successfully";
    }
}
