package com.surveyProject.project.service.survey.category;

import java.util.List;

import com.surveyProject.project.web.dto.category.CategoryRespDto;
import com.surveyProject.project.web.dto.category.UpdateCategoryReqDto;

public interface CategoryService {
	
	public boolean saveCategoryCount(UpdateCategoryReqDto updateCategoryReqDto) throws Exception;
	
	public List<CategoryRespDto> geyCategory(int page, int categoryCount)throws Exception;

}
