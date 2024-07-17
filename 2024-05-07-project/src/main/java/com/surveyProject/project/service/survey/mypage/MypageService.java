package com.surveyProject.project.service.survey.mypage;

import java.util.List;

import com.surveyProject.project.web.dto.mypage.ChangePasswordDto;
import com.surveyProject.project.web.dto.mypage.GetApplyListRespDto;
import com.surveyProject.project.web.dto.mypage.ReadUserSurveyList;
import com.surveyProject.project.web.dto.mypage.ReadUserinfo;
import com.surveyProject.project.web.dto.mypage.UserModifyReqDto;

public interface MypageService {
	
	public ReadUserinfo getUserInfo(int userCode) throws Exception;
	public List<ReadUserSurveyList> getUserSurveyInfo(int userCode) throws Exception;
	public boolean ChangePoint(int userCode, int userMoney) throws Exception;
	public boolean DeleteUser(int userCode) throws Exception;
	public boolean ChangeUserInfo(UserModifyReqDto modifyReqDto) throws Exception;
	
	public List<GetApplyListRespDto> getApplyList(int code, String type) throws Exception;
	
	public boolean changePassword(ChangePasswordDto changePasswordDto) throws Exception;
	
}
