package com.surveyProject.project.web.dto.result;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AnswersDto {
	private int answerCode;
	private String surveyAnswerShort;
	private String surveyAnswerLong;
	private String detailAnswer;
	
}
