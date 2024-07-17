package com.surveyProject.project.web.controller.admin;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.surveyProject.project.service.survey.admin.AdminService;
import com.surveyProject.project.web.dto.CMRespDto;
import com.surveyProject.project.web.dto.admin.ReadCompanyDto;
import com.surveyProject.project.web.dto.admin.ReadSurveyDto;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class AdminpageController {
	
	private final AdminService adminService;

	// 회사 회원가입 목록 불러오는 get 요청
	@GetMapping("/adminpage/company/{page}/{contentCount}")
	public ResponseEntity<?> getCompanySignupList(@PathVariable int page, @PathVariable int contentCount) {
		
		System.out.println("hihi"); // Forbidden 때문에 안 뜸
		List<ReadCompanyDto> CompanyList = null;
		
		try {
			CompanyList = adminService.getCompanyList(page, contentCount);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "failure", CompanyList));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", CompanyList));
	}
	// 신청된 설문조사 목록 불어오는 get 요청	
	@GetMapping("/adminpage/survey/{page}/{contentCount}")
	public ResponseEntity<?> getSurveyList(@PathVariable int page, @PathVariable int contentCount) {
		
		List<ReadSurveyDto> readSurveyDto =null;
		
		try {
			readSurveyDto = adminService.getSurveyList(page, contentCount);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "failure", readSurveyDto));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", readSurveyDto));
	}
	
	
	// 회사 회원가입 처리 수정하는 update 요청 (승인, 삭제)
	@PutMapping("/adminpage/company/{companyCode}")
	public ResponseEntity<?> companyApproval(@PathVariable int companyCode) {
		
		boolean status = false;
		
		try {
			status = adminService.updateCompanyApproval(companyCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "failure", status));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
	}
	
	@DeleteMapping("/adminpage/company/{companyCode}")
	public ResponseEntity<?> deleteCompany(@PathVariable int companyCode) {
		
		boolean status = false;
		
		try {
			status = adminService.deleteCompany(companyCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "failure", status));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
	}
	
	// 설문신청 상태 변경 update 요청 (승인, 삭제)
	@PutMapping("/adminpage/survey/{surveyCode}")
	public ResponseEntity<?> updateSurveyStatus(@PathVariable int surveyCode) {
		
		boolean status = false;
		
		try {
			status = adminService.updateSurveyApproval(surveyCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "failure", status));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
	}
	
	@DeleteMapping("/adminpage/survey/{surveyCode}")
	public ResponseEntity<?> deleteSurvey(@PathVariable int surveyCode) {
		
		boolean status = false;
		
		try {
			status = adminService.deleteSurvey(surveyCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "failure", status));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
	}
}
