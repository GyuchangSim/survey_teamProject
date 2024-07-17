package com.surveyProject.project.domain.survey.mypage;

import org.springframework.web.multipart.MultipartFile;

import com.surveyProject.project.web.dto.mypage.ReadUserinfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserInfo {

	private int user_code;
	private String user_name;
	private String user_nickname;
	private String user_email;
	private String user_role;
	private String user_birth;
	private String user_gender;
	private String user_account;
	private String user_img;
	private int user_money;
	private String create_date;
	private String update_date;
	
	public ReadUserinfo toUserInfoDto() {
		return ReadUserinfo.builder()
						.userCode(user_code)
						.userName(user_name)
						.userNickname(user_nickname)
						.userEmail(user_email)
						.userRole(user_role)
						.userBirth(user_birth)
						.userGender(user_gender)
						.userAccount(user_account)
						.userMoney(user_money)
						.createDate(create_date)
						.updateDate(update_date)
						.build();
	}
	
}
