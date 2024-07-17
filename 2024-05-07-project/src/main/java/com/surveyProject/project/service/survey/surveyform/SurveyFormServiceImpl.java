package com.surveyProject.project.service.survey.surveyform;

import com.surveyProject.project.web.dto.surveypage.surveyform.SurveyApplyReqDto;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.surveyProject.project.domain.survey.surveyform.SurveyForm;
import com.surveyProject.project.domain.survey.surveyform.SurveyFormRepository;
import com.surveyProject.project.web.dto.SurveyForm.SurveyFormReqDto;
import com.surveyProject.project.web.dto.pay.PaymentDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SurveyFormServiceImpl implements SurveyFormService{
	
	SurveyForm surveyForm = new SurveyForm();
	
	private final SurveyFormRepository surveyFormRepository;

	@Override
	@Transactional
	public boolean saveSurveyForm(SurveyFormReqDto surveyFormReqDto) throws Exception {
		
		//survey_information
		int surveyform = surveyFormRepository.saveSurveyForm(surveyFormReqDto.toEntity());
		
		
		
		int surveyFormQuestionAndOptions = surveyFormRepository.saveSurveyFormQustionAndOptions(surveyFormReqDto.toEntityQuestionAndOptions());
		
		
		return surveyform >  0 && surveyFormQuestionAndOptions > 0;
	}

	@Override
	public boolean applySurveyForm(SurveyApplyReqDto surveyApplyReqDto) throws Exception {
			boolean result = false;
			String applicationClass = surveyApplyReqDto.getApplicationClass();
			// System.out.println("applicationClass = " + applicationClass);
		if(applicationClass.equals("개인")){
					return surveyFormRepository.applySurveyForm(surveyApplyReqDto.toEntityPerson()) > 0;

		}else{

			return result = surveyFormRepository.applyCompanySurveyForm(surveyApplyReqDto.toEntityPeople()) > 0;
		}


	}

	@Override
	public PaymentDto getPaymentInfo(int userCode) throws Exception {
		
		return surveyFormRepository.getPaymentInfo(userCode).toPaymentDto();
	}

}
