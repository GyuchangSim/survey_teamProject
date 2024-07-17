package com.surveyProject.project.web.dto.pay;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDto {

//	private int surveyCode;
	private String surveyTitle;
	private int surveyPerMoney;
	private int participantMax;

}
