package com.min5ol.back.exception;

// 아이디 형식이 조건에 맞지 않을 경우
public class InvalidSignupUsernameException extends RuntimeException {
    public InvalidSignupUsernameException() {
        super("아이디는 영문 소문자, 숫자만 사용할 수 있습니다.");
    }
}
