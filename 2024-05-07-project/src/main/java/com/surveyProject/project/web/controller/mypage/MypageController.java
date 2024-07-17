package com.surveyProject.project.web.controller.mypage;

import org.springframework.web.bind.annotation.RestController;

import com.surveyProject.project.service.survey.mypage.MypageService;
import com.surveyProject.project.web.dto.CMRespDto;
import com.surveyProject.project.web.dto.mypage.ChangePasswordDto;
import com.surveyProject.project.web.dto.mypage.GetApplyListRespDto;
import com.surveyProject.project.web.dto.mypage.ReadUserSurveyList;
import com.surveyProject.project.web.dto.mypage.ReadUserinfo;
import com.surveyProject.project.web.dto.mypage.UserModifyReqDto;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequiredArgsConstructor
public class MypageController {
	
	private final MypageService mypageService;
	
	@GetMapping(value = {"/mypage/modify/{userCode}", "/mypage/{userCode}"})
	public ResponseEntity<?> getUserInfo(@PathVariable int userCode) {
		
		ReadUserinfo readUserinfo = null;
		
		try {
			readUserinfo = mypageService.getUserInfo(userCode);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(e);
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failure", readUserinfo));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", readUserinfo));
	}
	
	@GetMapping("/mypage")
	public ResponseEntity<?> getUserSurveyList(@RequestParam int userCode) {
		
		List<ReadUserSurveyList> readUserSurveyList = null;
		
		try {
			readUserSurveyList = mypageService.getUserSurveyInfo(userCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "failure", readUserSurveyList));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", readUserSurveyList));
	}
	
	@PutMapping("/mypage/{userCode}/{userMoney}")
	public ResponseEntity<?> ChangePoint(@PathVariable int userCode, @PathVariable int userMoney) {

		boolean status = false;
		
		try {
			status = mypageService.ChangePoint(userCode, userMoney);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "failure", status));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
	}
	
	@DeleteMapping("/mypage/{userCode}")
	public ResponseEntity<?> DeleteUser(@PathVariable int userCode) {
		
		boolean status = false;
		
		try {
			status = mypageService.DeleteUser(userCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "failure", status));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
	}

	@PutMapping("/mypage/modify/{userCode}")
	public ResponseEntity<?> putMethodName(@PathVariable int userCode, @RequestBody UserModifyReqDto modifyReqDto) {
		
		modifyReqDto.setUserCode(userCode);
		
//		System.out.println("controller: " + modifyReqDto);
		
		boolean status = false;
		
		try {
			status = mypageService.ChangeUserInfo(modifyReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failure", status));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
	}
	
	@GetMapping("/mypage/getApplyList")
	public ResponseEntity<?> getApplyList(@RequestParam int code, @RequestParam String type) {
		
		List<GetApplyListRespDto> getApplyListRespDtos = null;
		try {
			getApplyListRespDtos = mypageService.getApplyList(code, type);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "failure", getApplyListRespDtos));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", getApplyListRespDtos));
	}
	
	@PutMapping("/mypage/password")
	public ResponseEntity<?> changePassword(@RequestBody ChangePasswordDto changePasswordDto) {
		
		boolean status = false;
//		System.out.println("컨트롤러에 전달 : " + changePasswordDto);
		
		try {
			status = mypageService.changePassword(changePasswordDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "failure", status));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
	}
	
}
