package com.surveyProject.project.web.dto.notice;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class GetNoticeDetailRespDto {
	
	private String noticeTitle;
	private String noticeContent;
	
}
