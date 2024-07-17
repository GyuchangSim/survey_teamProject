package com.surveyProject.project.web.dto.admin;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReadCompanyDto {
	
	private int companyCode;
	private String companyName;
	private String companyFile;
	private int joinStatus;
	private LocalDateTime createDate;
	private LocalDateTime updateDate;
}