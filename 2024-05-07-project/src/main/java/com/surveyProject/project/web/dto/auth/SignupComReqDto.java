package com.surveyProject.project.web.dto.auth;

import com.surveyProject.project.domain.survey.user.Company;
import com.surveyProject.project.domain.survey.user.User;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@Data
public class SignupComReqDto {
//    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private String email;
    private String password;
    private String companyName;
    private String role;
    private int joinStatus;
    private LocalDateTime create_date;
    private LocalDateTime update_date;
    private MultipartFile file;

    public Company toEntity(){
        return Company.builder()
                .company_name(companyName)
                .company_email(email)
                .company_password(new BCryptPasswordEncoder().encode(password))
                .role("ROLE_USER")
                .join_status(0)
                .build();

    }
}
