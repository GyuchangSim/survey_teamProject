package com.surveyProject.project.web.dto.mypage;

import lombok.Data;

@Data
public class ChangePasswordDto {

	private int userCode;
	private String originPW;
	private String newPW;
	
}
