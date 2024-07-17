package com.surveyProject.project.web.dto.surveypage.surveylist;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SurveyDetailResDto {

    private int survey_code;
    private String survey_title;
    private String survey_content;
    private List<SurveyDetailQuestionResDto> questionResDtoList;
}
