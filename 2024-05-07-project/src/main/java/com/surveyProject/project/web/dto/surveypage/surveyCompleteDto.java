package com.surveyProject.project.web.dto.surveypage;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class surveyCompleteDto {
	
	private int surveyCode;
	private String surveyTitle;
	private int surveyPerMoney;
}
