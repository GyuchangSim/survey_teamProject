package com.surveyProject.project.web.dto.auth;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginComResDto {
    private String company_email;
    private String company_password;
    private String company_name;
    private int company_code;
    private String role;
    //새로추가
    private String token;
    private int expirationTime = 3600;
}
