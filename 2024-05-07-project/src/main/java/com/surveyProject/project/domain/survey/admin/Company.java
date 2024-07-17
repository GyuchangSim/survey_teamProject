package com.surveyProject.project.domain.survey.admin;

import java.time.LocalDateTime;

import com.surveyProject.project.web.dto.admin.ReadCompanyDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Company {
	
	private int company_code;
	private String company_name;
	private String company_email;
	private String file_name;
	private String role;
	private int join_status;
	private LocalDateTime create_date;
	private LocalDateTime update_date;
	
	public ReadCompanyDto toCompanyDto () {
		return ReadCompanyDto.builder()
							.companyCode(company_code)
							.companyName(company_name)
							.companyFile(file_name)
							.joinStatus(join_status)
							.createDate(create_date)
							.updateDate(update_date)
							.build();
	}
}
