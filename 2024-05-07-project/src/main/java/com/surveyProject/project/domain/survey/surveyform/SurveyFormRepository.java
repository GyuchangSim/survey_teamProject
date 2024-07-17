package com.surveyProject.project.domain.survey.surveyform;


import java.util.List;
import com.surveyProject.project.domain.survey.pay.Payment;
import com.surveyProject.project.domain.survey.survey.ApplyInformation;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface SurveyFormRepository {
	
	

	public int applySurveyForm(ApplyInformation applyInformation) throws Exception;

	public int applyCompanySurveyForm(ApplyInformation applyInformation) throws Exception;
	
	public Payment getPaymentInfo(int userCode) throws Exception;
	
	public int saveSurveyForm(SurveyForm surveyForm) throws Exception;
	
	public int saveSurveyFormQustionAndOptions(List<SurveyForm> list) throws Exception;

}
