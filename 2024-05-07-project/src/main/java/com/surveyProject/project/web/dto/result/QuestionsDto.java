package com.surveyProject.project.web.dto.result;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QuestionsDto {
	private int questionCode;
	private String questionTitle;
	private String detailQuestion;
	private List<AnswersDto> answers;
}