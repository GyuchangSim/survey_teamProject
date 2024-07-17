package com.surveyProject.project.domain.survey.notice;

import java.time.LocalDate;

import com.surveyProject.project.web.dto.notice.GetNoticeDetailRespDto;
import com.surveyProject.project.web.dto.notice.GetNoticeRespDto;
import com.surveyProject.project.web.dto.notice.GetUserRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Notice {
	
	private int notice_code;
	private int user_code;
	private String role;
	private String notice_title;
	private String notice_content;
	private LocalDate create_date;
	private LocalDate update_date;
	
	public GetNoticeDetailRespDto toDto() {
		return GetNoticeDetailRespDto.builder()
				.noticeTitle(notice_title)
				.noticeContent(notice_content)
				.build();
	}
	
	
	
	
	public GetNoticeRespDto toListDto() {
		return GetNoticeRespDto.builder()
				.noticeCode(notice_code)
				.noticeTitle(notice_title)
				.updatedate(update_date)
				.build();
	}
	
	public GetUserRespDto toUserDto() {
		return GetUserRespDto.builder()
				.userCode(notice_code)
				.userRole(role)
				.build();
	}
}
