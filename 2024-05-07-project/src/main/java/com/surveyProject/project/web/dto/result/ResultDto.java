package com.surveyProject.project.web.dto.result;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResultDto {
	private int surveyCode;
	private String surveyTitle;
	private List<QuestionsDto> questions;
}
