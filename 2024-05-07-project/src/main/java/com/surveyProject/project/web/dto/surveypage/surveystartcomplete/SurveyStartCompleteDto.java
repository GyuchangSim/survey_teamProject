package com.surveyProject.project.web.dto.surveypage.surveystartcomplete;

import java.time.LocalDateTime;

import com.surveyProject.project.domain.survey.survey.SurveyStartComplete;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SurveyStartCompleteDto {

	private int userCode;

	private int surveyCode;
	private String surveyTitle;
	private String surveyPeriodStart;
	private String surveyPeriodStop;
	private int surveyPerMoney;
	private LocalDateTime applyDate;
}
