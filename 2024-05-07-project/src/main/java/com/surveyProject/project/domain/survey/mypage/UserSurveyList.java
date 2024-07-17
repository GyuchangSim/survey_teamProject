package com.surveyProject.project.domain.survey.mypage;

import java.time.LocalDateTime;

import com.surveyProject.project.web.dto.mypage.ReadUserSurveyList;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserSurveyList {

	private int respondent_code;
	private int survey_code;
	private int user_code;
	private String survey_title;
	private int survey_per_money;
	private LocalDateTime apply_date;
	
	public ReadUserSurveyList toUserSurveyListDto () {
		return ReadUserSurveyList.builder()
								.respondentCode(respondent_code)
								.surveyCode(survey_code)
								.userCode(user_code)
								.surveyTitle(survey_title)
								.surveyPerMoney(survey_per_money)
								.applyDate(apply_date)
								.build();
	}
	
}
