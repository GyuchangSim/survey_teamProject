package com.surveyProject.project.web.controller.SurveyForm;

import com.surveyProject.project.service.survey.FileService;
import com.surveyProject.project.web.dto.CMRespDto;

import com.surveyProject.project.web.dto.surveypage.surveyform.SurveyApplyReqDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.surveyProject.project.service.survey.surveyform.SurveyFormService;
import com.surveyProject.project.web.dto.SurveyForm.SurveyFormReqDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/survey")
@RequiredArgsConstructor
public class SurveyFormController {
	
	private final SurveyFormService surveyFormService;
	
	private final FileService fileService;
	
	@PostMapping("/surveyform")
	public ResponseEntity<?> surveyform(@RequestBody SurveyFormReqDto surveyFormReqDto){
		
		boolean result = false;
		
		System.out.println(surveyFormReqDto);
		
		try {
			result = surveyFormService.saveSurveyForm(surveyFormReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(surveyFormReqDto.toEntityQuestionAndOptions());
			return ResponseEntity.ok().body(new CMRespDto<>(-1,"실패",result));
			
			
		}

		return ResponseEntity.ok().body(new CMRespDto<>(1,"성공",result));
	}

	//설문신청 도입부
	@PostMapping("/applyform")
	public ResponseEntity<?> applyForm(@RequestBody SurveyApplyReqDto surveyApplyReqDto){
//		System.out.println("컨트롤러" + surveyApplyReqDto);
		System.out.println("applyInformation = " + surveyApplyReqDto);
		boolean status = false;
		try {

			status = surveyFormService.applySurveyForm(surveyApplyReqDto);
//			fileService.addFile(file);
		}catch (Exception exception){
			System.out.println("exception = " + exception);
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "신청 폼 작성 실패", status));

		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "신청 폼 작성 성공", status));
	}
}
