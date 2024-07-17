package com.surveyProject.project.domain.survey.result;

import com.surveyProject.project.web.dto.result.AnswersDto;

import lombok.Data;

@Data
public class Answers {
	private int answer_code;
	private String survey_answer_short;
	private String survey_answer_long;
	private String detail_answer;
	
	public AnswersDto toDto() {
		return AnswersDto.builder()
				.answerCode(answer_code)
				.surveyAnswerShort(survey_answer_short)
				.surveyAnswerLong(survey_answer_long)
				.detailAnswer(detail_answer)
				.build();
	}
}
