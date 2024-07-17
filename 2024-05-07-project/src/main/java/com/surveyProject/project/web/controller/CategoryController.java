package com.surveyProject.project.web.controller;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.surveyProject.project.service.survey.category.CategoryService;
import com.surveyProject.project.web.dto.CMRespDto;
import com.surveyProject.project.web.dto.category.CategoryRespDto;
import com.surveyProject.project.web.dto.category.UpdateCategoryReqDto;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/survey")
public class CategoryController {
	
	private final CategoryService categoryService;


    @PutMapping("/update")
    public ResponseEntity<?> categoryinsert(@RequestBody UpdateCategoryReqDto updateCategoryReqDto){
    	boolean result = false;
    	
    	try {
		result = categoryService.saveCategoryCount(updateCategoryReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1,"실패",result));
		}
    	return ResponseEntity.ok().body(new CMRespDto<>(1,"성공",result));
    }
    
    @GetMapping("/category")
    public ResponseEntity<?> categoryList(@RequestParam int page, int categoryCount){
    	List<CategoryRespDto> list = null;
    	
    	try {
			list = categoryService.geyCategory(page, categoryCount);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1,"getcategoryList실패",list));
		}
    	return ResponseEntity.ok().body(new CMRespDto<>(1,"getcategoryList성공",list));
    }
}
