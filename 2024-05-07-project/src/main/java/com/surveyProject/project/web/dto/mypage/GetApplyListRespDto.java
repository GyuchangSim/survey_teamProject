package com.surveyProject.project.web.dto.mypage;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetApplyListRespDto {

	private int surveyCode;
	private String surveyTitle;
	private int participantCount;
	private String statusContent;
	private String surveyPeriodStart;
	private String surveyPeriodStop;
	private boolean status;
}
