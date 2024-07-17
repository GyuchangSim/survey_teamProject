package com.surveyProject.project.web.dto.category;

import com.surveyProject.project.domain.survey.category.Category;

import lombok.Data;

@Data
public class UpdateCategoryReqDto {
	
	private int categoryCode;
	
	public Category toEnity() {
		return Category.builder()
				.category_code(categoryCode)
				.build();
	}

}
