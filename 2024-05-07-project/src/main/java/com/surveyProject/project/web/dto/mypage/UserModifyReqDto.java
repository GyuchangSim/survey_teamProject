package com.surveyProject.project.web.dto.mypage;


import com.surveyProject.project.domain.survey.mypage.UserInfo;

import lombok.Data;

@Data
public class UserModifyReqDto {

	private int userCode;
	private String userName;
	private String userNickname;
	private String userEmail;
	private String userBirth;
	private String userGender;
	private String userAccount;
//	private MultipartFile userImg;
	
	public UserInfo toEntity() {
		return UserInfo.builder()
				.user_code(userCode)
				.user_name(userName)
				.user_nickname(userNickname)
				.user_email(userEmail)
				.user_birth(userBirth)
				.user_gender(userGender)
				.user_account(userAccount)
//				.user_img(userImg.toString())
				.build();
	}
}
