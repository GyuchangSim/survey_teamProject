package com.surveyProject.project.domain.survey.survey;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ApplyInformation {
    private int survey_code;
    private String application_class;
    private String survey_class;
    private String survey_password;
    private int user_code;
    private int company_code;
    private int category_code;
    private String survey_target_gender;
    private String survey_target_age;
    private int survey_per_money;
    private int participant_max;
    private String survey_period_start;
    private String survey_period_stop;

}
