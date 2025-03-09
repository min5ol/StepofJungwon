package com.min5ol.back.DTO;

public class LoginRequest {
  private String username;
  private String password;

  // username 필드를 반환하는 getter
  public String getUsername() {
    return username;
  }

  // password 필드를 반환하는 getter
  public String getPassword() {
    return password;
  }

  // username 필드를 설정하는 setter
  public void setUsername(String username) {
    this.username = username;
  }

  // password 필드를 설정하는 setter
  public void setPassword(String password) {
    this.password = password;
  }
}
