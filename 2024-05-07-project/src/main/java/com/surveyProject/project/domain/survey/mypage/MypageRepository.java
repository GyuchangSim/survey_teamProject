package com.surveyProject.project.domain.survey.mypage;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.surveyProject.project.domain.survey.user.User;
import com.surveyProject.project.web.dto.mypage.UserModifyReqDto;

@Mapper
public interface MypageRepository {
	
	public UserInfo getUserInfoByUserCode(int user_code) throws Exception;
	public List<UserSurveyList> getUserSurveyListByUserCode(int user_code) throws Exception;
	public int ChangePoint(HashMap<String, Object> map) throws Exception;
	public int DeleteUser(int user_code) throws Exception;
	public int ChangeUserInfo(UserInfo userInfo) throws Exception;
	
	public List<ApplyList> getApplyListByCode(HashMap<String, Object> map) throws Exception;
	
	public User getUserInfoByUsercode(int user_code) throws Exception;
	public int changePassword(User user) throws Exception;

}
