package com.surveyProject.project.domain.survey.category;

import com.surveyProject.project.web.dto.category.CategoryRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Category {
	
	private int category_code;
	private String category_name; 
	
	public CategoryRespDto toDto() {
		return CategoryRespDto.builder()
				.categoryCode(category_code)
				.categoryName(category_name)
				.build();
	}

}
