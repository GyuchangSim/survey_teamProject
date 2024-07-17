package com.surveyProject.project.web.dto.surveypage.surveylist;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SurveyDetailOptionResDto {
    private int question_code;
    private int option_code;
    private String option_content;






}
