package com.min5ol.back.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpRequest {
  
  private String username;
  private String password;
  private String nickname;
  private String email;
  
}
