package com.surveyProject.project.domain.survey.mypage;

import com.surveyProject.project.web.dto.mypage.GetApplyListRespDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplyList {

	private int survey_code;
	private String survey_title;
	private int participant_count;
	private String status_content;
	private String survey_period_start;
	private String survey_period_stop;
	
	public GetApplyListRespDto toApplyListDto() {
		return GetApplyListRespDto.builder()
									.surveyCode(survey_code)
									.surveyTitle(survey_title)
									.participantCount(participant_count)
									.statusContent(status_content)
									.surveyPeriodStart(survey_period_start)
									.surveyPeriodStop(survey_period_stop)
									.build();
	}
}
