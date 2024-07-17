package com.surveyProject.project.domain.survey.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Company {

    private int company_code;
    private String company_name;
    private String company_email;
    private String company_password;
    private String company_file;
    private String role;
    private int join_status;
    private LocalDateTime create_date;
    private LocalDateTime update_date;



}
