package com.surveyProject.project.web.dto.surveypage;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SurveyStartRespDto {
	
	private String surveyTitle;
	private String surveyPeriodStart;
	private String surveyPeriodStop;
	private int surveyPerMoney;

}
