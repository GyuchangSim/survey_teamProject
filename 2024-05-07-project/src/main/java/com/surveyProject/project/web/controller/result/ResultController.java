package com.surveyProject.project.web.controller.result;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.surveyProject.project.service.survey.result.ResultService;
import com.surveyProject.project.web.dto.CMRespDto;
import com.surveyProject.project.web.dto.result.ResultDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ResultController {

	private final ResultService resultService;
	
	@GetMapping("/result/{surveyCode}/{code}")
	public ResponseEntity<?> getResultByCode(@PathVariable int surveyCode, @PathVariable int code) {
		
		ResultDto resultDto = null;
		
		try {
			resultDto = resultService.getResultByCode(surveyCode, code);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "failure", resultDto));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", resultDto));
	}
	
	
}
