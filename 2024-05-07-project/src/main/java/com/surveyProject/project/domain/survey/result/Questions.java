package com.surveyProject.project.domain.survey.result;

import com.surveyProject.project.web.dto.result.QuestionsDto;

import lombok.Data;

@Data
public class Questions {
	private int question_code;
	private String question_title;
	private String detail_question;
	
	public QuestionsDto toDto () {
		return QuestionsDto.builder()
				.questionCode(question_code)
				.questionTitle(question_title)
				.detailQuestion(detail_question)
				.build();
	}
}
