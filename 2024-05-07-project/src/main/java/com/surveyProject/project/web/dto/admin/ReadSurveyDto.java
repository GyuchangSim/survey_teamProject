package com.surveyProject.project.web.dto.admin;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReadSurveyDto {
	
	private int surveyCode;
	private String surveyTitle;
	private String surveyContent;
	private String surveyPresentImg;
	private int participantCount;
	private int surveyStatus;
	private LocalDateTime createDate;
	private LocalDateTime updateDate;
}
