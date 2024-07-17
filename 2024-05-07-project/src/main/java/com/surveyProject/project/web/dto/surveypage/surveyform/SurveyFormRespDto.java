package com.surveyProject.project.web.dto.surveypage.surveyform;

import lombok.Data;

@Data
public class SurveyFormRespDto {

	private int surveyCode;
	private String surveyTitle;
	private String surveyContent;
	
	private int questionCode;
	private String questionTitle;
	private String questionImg;
	private int selectType;
	private int questionEssential;
	private String detailQuestion;
	private int optionCode;
	private String optionContent;
	private String optionImg;
//	private String surveyPresentImg;
	
}
