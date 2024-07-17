package com.surveyProject.project.domain.survey.survey;

import com.surveyProject.project.web.dto.surveypage.surveylist.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SurveyInformation {

    private int survey_code;
    private String survey_title;
    private String survey_content;
    private String survey_present_img;
    private int participant_count;
    private int survey_status;
    private LocalDateTime create_date;
    private LocalDateTime update_date;

    //survey_qustion
    private int question_code;
    private String question_title;
    private String question_img;
    private int question_essential;
    private int select_type;
    private String detail_question;

//  question_choice
    private int option_code;
    private String option_content;
    private String options_img;

//  survey_answer
    private int answer_code;
    private String survey_answer_short;
    private String survey_answer_long;
    private String detail_answer;




    public SurveySearchListResDto toListDto(){
        return SurveySearchListResDto.builder()
                .surveyTitle(survey_title)
                .surveyContent(survey_content)
                .build();
    }

    public SurveyDetailResDto toDetailTitleDto(){
        return SurveyDetailResDto.builder()
                .survey_title(survey_title)
                .survey_content(survey_content)
                .build();
    }
    public SurveyDetailQuestionResDto toDetailQuestionDto(){
        return SurveyDetailQuestionResDto.builder()
                .question_code(question_code)
                .question_title(question_title)
                .question_essential(question_essential)
                .detail_question(detail_question)
                .select_type(select_type)
                .build();
    }

    public SurveyDetailOptionResDto toDetailOptionDto(){
        return SurveyDetailOptionResDto.builder()
                .option_code(option_code)
                .option_content(option_content)
                .build();
    }

}


