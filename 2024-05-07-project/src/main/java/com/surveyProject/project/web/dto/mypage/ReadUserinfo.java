package com.surveyProject.project.web.dto.mypage;

import org.springframework.web.multipart.MultipartFile;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReadUserinfo {

	private int userCode;
	private String userName;
	private String userNickname;
	private String userEmail;
	private String userRole;
	private String userBirth;
	private String userGender;
	private String userAccount;
	private int userMoney;
	private String createDate;
	private String updateDate;
}
