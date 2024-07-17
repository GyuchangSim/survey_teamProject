package com.surveyProject.project.service.survey.result;

import com.surveyProject.project.web.dto.result.ResultDto;

public interface ResultService {

	public ResultDto getResultByCode(int surveyCode, int code) throws Exception;
}
