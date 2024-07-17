package com.surveyProject.project.web.dto.notice;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class GetNoticeRespDto {
	
	private int noticeCode;
	private String noticeTitle;
	private LocalDate updatedate;

}
