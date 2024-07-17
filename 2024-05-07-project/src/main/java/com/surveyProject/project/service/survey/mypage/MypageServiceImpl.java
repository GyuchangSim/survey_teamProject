package com.surveyProject.project.service.survey.mypage;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.surveyProject.project.domain.survey.mypage.ApplyList;
import com.surveyProject.project.domain.survey.mypage.MypageRepository;
import com.surveyProject.project.domain.survey.mypage.UserSurveyList;
import com.surveyProject.project.domain.survey.user.User;
import com.surveyProject.project.web.dto.mypage.ChangePasswordDto;
import com.surveyProject.project.web.dto.mypage.GetApplyListRespDto;
import com.surveyProject.project.web.dto.mypage.ReadUserSurveyList;
import com.surveyProject.project.web.dto.mypage.ReadUserinfo;
import com.surveyProject.project.web.dto.mypage.UserModifyReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MypageServiceImpl implements MypageService{
	
	@Value("${file.path}")
    private String filePath;
    @Value("${file.url}")
    private String fileUrl;
	
	private final MypageRepository mypageRepository;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public ReadUserinfo getUserInfo(int userCode) throws Exception {
		return mypageRepository.getUserInfoByUserCode(userCode).toUserInfoDto();
	}

	@Override
	public List<ReadUserSurveyList> getUserSurveyInfo(int userCode) throws Exception {

		List<UserSurveyList> userSurveyLists = mypageRepository.getUserSurveyListByUserCode(userCode);
		List<ReadUserSurveyList> readUserSurveyList = new ArrayList<ReadUserSurveyList>();
		userSurveyLists.forEach(list -> {
			readUserSurveyList.add(list.toUserSurveyListDto());
		});
		
		return readUserSurveyList;
	}

	@Override
	public boolean ChangePoint(int userCode, int userMoney) throws Exception {
		
		HashMap<String, Object> moneychange = new HashMap<String, Object>();
		moneychange.put("code", userCode);
		moneychange.put("money", userMoney);
		
		return mypageRepository.ChangePoint(moneychange) > 0;
	}

	@Override
	public boolean DeleteUser(int userCode) throws Exception {
		return mypageRepository.DeleteUser(userCode) > 0;
	}

	@Override
	public boolean ChangeUserInfo(UserModifyReqDto modifyReqDto) throws Exception {
		return mypageRepository.ChangeUserInfo(modifyReqDto.toEntity()) > 0;
	}

	@Override
	public List<GetApplyListRespDto> getApplyList(int code, String type) throws Exception {
		
		HashMap<String, Object> applyList = new HashMap<String, Object>();
		applyList.put("code", code);
		applyList.put("type", type);
		
		System.out.println(applyList);
		
		List<ApplyList> applyLists = mypageRepository.getApplyListByCode(applyList);
		List<GetApplyListRespDto> getApplyListRespDtos = new ArrayList<GetApplyListRespDto>();
		
		applyLists.forEach(list -> {
			getApplyListRespDtos.add(list.toApplyListDto());
		});
		
		return getApplyListRespDtos;
	}

	@Override
	public boolean changePassword(ChangePasswordDto changePasswordDto) throws Exception {
		
		boolean status = false;
		
//		System.out.println("서비스에서 :" + changePasswordDto);
		
		int userCode = changePasswordDto.getUserCode();
		
		User selectuser = mypageRepository.getUserInfoByUsercode(userCode);
		
		System.out.println("selectUser" + selectuser);
		
		User user = new User();
		user.setUser_password(changePasswordDto.getOriginPW());
		
//		System.out.println("user 원래 버전 확인 : " + user);
		
		String password = user.getUser_password(); //reqDto의 비번
		String encodePassword = selectuser.getUser_password(); // 원래 비번
		if(!bCryptPasswordEncoder.matches(password, encodePassword)){
		// 일치하지 않은 상태
			throw new Exception("비밀번호가 틀립니다.");
		}else if(bCryptPasswordEncoder.matches(password, encodePassword)){
        // 일치한 상태
			User user2 = new User();
			user2.setUser_code(userCode);
			user2.setUser_password(new BCryptPasswordEncoder().encode(changePasswordDto.getNewPW()));
			status =  mypageRepository.changePassword(user2) > 0;
		}
		
		return status;
		
	}





	
}
