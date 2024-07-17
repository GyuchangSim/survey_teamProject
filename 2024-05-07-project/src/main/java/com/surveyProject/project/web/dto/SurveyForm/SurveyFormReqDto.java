package com.surveyProject.project.web.dto.SurveyForm;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.surveyProject.project.domain.survey.surveyform.SurveyForm;

import lombok.Data;

@Data
public class SurveyFormReqDto {
	
	
	private String surveyTitle;
	private String surveyInfo;
	private List<String> questionTitle;
	private List<List<Map<String, String>>> questionOptions;
	private List<Integer> questionSelectOption;
	private List<Boolean> questionEssential;
	private List<String> detailQuestion;
	
	
	public SurveyForm toEntity() {
		return SurveyForm.builder()
				.survey_title(surveyTitle)
				.survey_info(surveyInfo)
				.build();
	}
	
	public List<SurveyForm> toEntityQuestionAndOptions() {
		
		List<SurveyForm> surveyForms = new ArrayList<>();
		
		for(int i = 0; i < questionTitle.size(); i++) {
			
			List<String> options = questionOptions.get(i).stream()
					.map(optionMap -> optionMap.get("option"))
					.collect(Collectors.toList());
			
			
			SurveyForm surveyForm = SurveyForm.builder()
					.question_title(questionTitle.get(i))
					.question_select_option(questionSelectOption.get(i))
					.question_essential(questionEssential.get(i) == true  ? 1 : 0)
					.detail_question(detailQuestion.get(i) != null ? detailQuestion.get(i) : null)
					.question_options(options)
					.build();
				
				surveyForms.add(surveyForm);

			}
		return surveyForms;
	}
}

