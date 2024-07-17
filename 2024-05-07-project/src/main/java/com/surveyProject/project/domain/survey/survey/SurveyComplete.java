package com.surveyProject.project.domain.survey.survey;

import com.surveyProject.project.web.dto.surveypage.surveyCompleteDto;

import lombok.Data;

@Data
public class SurveyComplete {

	private int survey_code;
	private String survey_title;
	private int survey_per_money;
	
	public surveyCompleteDto toDto() {
		return surveyCompleteDto.builder()
					.surveyCode(survey_code)
					.surveyTitle(survey_title)
					.surveyPerMoney(survey_per_money)
					.build();
	}
}
