package com.surveyProject.project.domain.survey.user;

import lombok.*;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    private int user_code;
    private String user_name;
    private String user_nickname;
    private String user_email;
    private String user_password;
    private String role;
    private String provider;
    private String user_birth;
    private String user_gender;
    private String user_account;
    private String user_img;
    private int user_money;
    private LocalDateTime create_date;
    private LocalDateTime update_date;




}
