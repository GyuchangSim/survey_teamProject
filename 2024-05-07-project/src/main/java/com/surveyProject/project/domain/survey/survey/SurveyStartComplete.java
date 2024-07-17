package com.surveyProject.project.domain.survey.survey;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.surveyProject.project.web.dto.surveypage.surveystartcomplete.SurveyStartCompleteDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor 
@Builder 
public class SurveyStartComplete {

	
	private int user_code;
	
	private int survey_code;
	private String survey_title;
	private String survey_period_start;
	private String survey_period_stop;
	private int survey_per_money;
	private LocalDateTime apply_date;
	
	public SurveyStartCompleteDto toSurveyStartCompleteDto() {
		return SurveyStartCompleteDto.builder()
				.userCode(user_code)
				.surveyCode(survey_code)
				.surveyTitle(survey_title)
				.surveyPeriodStart(survey_period_start)
				.surveyPeriodStop(survey_period_stop)
				.surveyPerMoney(survey_per_money)
				.applyDate(apply_date)
				.build();
	}
	
	
	
}


/* 데이터는 Controller에서 Service로 이동할 때와 Service에서 Controller로 이동할 때 DTO로 변환되며, 
 Service에서 Repository로 이동할 때와 Repository에서 Service로 이동할 때 엔티티로 변환된다. */
 