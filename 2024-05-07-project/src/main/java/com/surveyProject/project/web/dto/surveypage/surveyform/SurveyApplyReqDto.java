package com.surveyProject.project.web.dto.surveypage.surveyform;

import com.surveyProject.project.domain.survey.survey.ApplyInformation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SurveyApplyReqDto {
    private String applicationClass;
    private String surveyClass;
    private String surveyPassword;
    private int userCode;
    private int companyCode;
    private int categoryCode;
    private String gender;
    private String age;
    private int perMoney;
    private int participantMax;
    private String periodStart;
    private String periodStop;

    public ApplyInformation toEntityPerson(){


        return ApplyInformation.builder()
                .application_class(applicationClass)
                .survey_class(surveyClass)
                .survey_password(surveyPassword)
                .user_code(userCode)
                .category_code(categoryCode)
                .survey_target_gender(gender)
                .survey_target_age(age)
                .survey_per_money(perMoney)
                .participant_max(participantMax)
                .survey_period_start(periodStart)
                .survey_period_stop(periodStop)
                .build();
    }

    public ApplyInformation toEntityPeople(){


        return ApplyInformation.builder()
                .application_class(applicationClass)
                .survey_class(surveyClass)
                .survey_password(surveyPassword)
                .company_code(companyCode)
                .category_code(categoryCode)
                .survey_target_gender(gender)
                .survey_target_age(age)
                .survey_per_money(perMoney)
                .participant_max(participantMax)
                .survey_period_start(periodStart)
                .survey_period_stop(periodStop)
                .build();
    }


}
