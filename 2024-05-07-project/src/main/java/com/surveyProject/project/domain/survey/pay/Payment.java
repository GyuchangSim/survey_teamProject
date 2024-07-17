package com.surveyProject.project.domain.survey.pay;

import com.surveyProject.project.web.dto.pay.PaymentDto;

import lombok.Builder;
import lombok.Data;

@Data
public class Payment {

	private String survey_title;
	private int survey_per_money;
	private int participant_max;
	
	public PaymentDto toPaymentDto() {
		return PaymentDto.builder()
						.surveyTitle(survey_title)
						.surveyPerMoney(survey_per_money)
						.participantMax(participant_max)
						.build();
	}
}
