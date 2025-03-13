package com.min5ol.back.Util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoderUtil {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String rawPassword = "0508"; // 원하는 비밀번호
        String encodedPassword = encoder.encode(rawPassword);

        System.out.println("암호화된 비밀번호: " + encodedPassword);
    }
}

