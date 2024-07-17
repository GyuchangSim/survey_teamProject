package com.surveyProject.project.service.survey.surveyform;

import com.surveyProject.project.web.dto.SurveyForm.SurveyFormReqDto;
import com.surveyProject.project.web.dto.pay.PaymentDto;
import com.surveyProject.project.web.dto.surveypage.surveyform.SurveyApplyReqDto;


public interface SurveyFormService {
	
	public boolean saveSurveyForm(SurveyFormReqDto surveyFormReqDtos) throws Exception;

	public boolean applySurveyForm(SurveyApplyReqDto surveyApplyReqDto) throws Exception;
	
	public PaymentDto getPaymentInfo(int userCode) throws Exception;
	
}
