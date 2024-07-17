package com.surveyProject.project.web.dto.auth;

import com.surveyProject.project.web.dto.CMRespDto;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
@Setter
public class LoginResDto {
    private int user_code;
    private String user_email;
    private String user_password;
    private String user_name;
    //새로추가
    private String token;
    private String role;
    private int expirationTime = 3600;


}
