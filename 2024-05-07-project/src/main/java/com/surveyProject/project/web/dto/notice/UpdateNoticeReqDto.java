package com.surveyProject.project.web.dto.notice;

import com.surveyProject.project.domain.survey.notice.Notice;

import lombok.Data;

@Data
public class UpdateNoticeReqDto {
	
	private int userCode;
	private int noticeCode;
	private String noticeTitle;
	private String noticeContent;
	
	public Notice toEntity() {
		return Notice.builder()
				.user_code(userCode)
				.notice_code(noticeCode)
				.notice_title(noticeTitle)
				.notice_content(noticeContent)
				.build();
	}

}
