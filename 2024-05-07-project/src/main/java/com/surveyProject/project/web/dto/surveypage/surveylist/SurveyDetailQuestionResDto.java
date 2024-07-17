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
public class SurveyDetailQuestionResDto {
    private int question_code;
    private String question_title;
    private String detail_question;
    private int question_essential;
    private int select_type;
    private List<SurveyDetailOptionResDto> optionResDtoList;
}
