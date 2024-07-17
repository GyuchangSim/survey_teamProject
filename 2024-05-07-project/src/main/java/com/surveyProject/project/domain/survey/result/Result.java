package com.surveyProject.project.domain.survey.result;


import com.surveyProject.project.web.dto.result.ResultDto;

import lombok.Data;

@Data
public class Result {
	private int survey_code;
	private String survey_title;

	public ResultDto toDto () {
		return ResultDto.builder()
				.surveyCode(survey_code)
				.surveyTitle(survey_title)
				.build();
	}
}
