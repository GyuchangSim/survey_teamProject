package com.surveyProject.project.web.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.surveyProject.project.service.survey.FileService;
import com.surveyProject.project.web.dto.CMRespDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserImgController {
	
	private final FileService fileService;
	
	@PostMapping("/mypage/modify/{userCode}")
    public ResponseEntity<?> postMethodName(@PathVariable int userCode, @RequestParam("userImg")MultipartFile userImg) {
		
//		System.out.println("controller: " + userCode + "-" + userImg);
		
    	boolean status = false; 
    	
    	try {
    		status = fileService.changeUserImg(userCode, userImg);
			
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failure", status));
		}
        
        return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
    }

}
