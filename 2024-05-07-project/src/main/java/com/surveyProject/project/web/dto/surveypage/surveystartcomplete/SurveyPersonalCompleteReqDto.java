//2024.05.24 김예찬
package com.surveyProject.project.web.dto.surveypage.surveystartcomplete;

import com.surveyProject.project.domain.survey.survey.SurveyList;

import lombok.Data;

@Data
public class SurveyPersonalCompleteReqDto {
	
	private int userCode;
	private int surveyCode;
	private int surveyPerMoney; 
	
	public SurveyList toEntity() {
		return SurveyList.builder()
				.user_code(userCode)
				.survey_code(surveyCode)
				.survey_per_money(surveyPerMoney)
				.build();
	}
	
}
