package com.surveyProject.project.domain.survey.surveyform;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SurveyForm {
	
	
	private String survey_title;
	private String survey_info;
	private String question_title;
	private int question_select_option;
	private int question_essential;
	private String detail_question;
	private List<String> question_options;
}

