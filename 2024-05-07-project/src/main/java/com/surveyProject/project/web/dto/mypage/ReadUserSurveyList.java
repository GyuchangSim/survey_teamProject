package com.surveyProject.project.web.dto.mypage;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReadUserSurveyList {
	
	private int respondentCode;
	private int surveyCode;
	private int userCode;
	private String surveyTitle;
	private int surveyPerMoney;
	private LocalDateTime applyDate;

}
