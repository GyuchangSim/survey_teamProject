package com.surveyProject.project.web.dto.auth;

import com.surveyProject.project.domain.survey.user.User;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@Data
public class SignupReqDto {


    private String email;
    private String password;
    private String userName;
    private String gender;
    private String birth;
    private String role;
    private LocalDateTime create_date;
    private LocalDateTime update_date;


    public User toEntity(){
        return User.builder()
                .user_email(email)
                .user_password(new BCryptPasswordEncoder().encode(password))
                .user_name(userName)
                .user_gender(gender)
                .user_birth(birth)
                .role("ROLE_USER")
                .create_date(LocalDateTime.now())
                .update_date(LocalDateTime.now())
                .build();

    }
}
