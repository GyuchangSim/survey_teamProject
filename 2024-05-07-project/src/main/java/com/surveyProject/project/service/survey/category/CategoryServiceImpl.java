package com.surveyProject.project.service.survey.category;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.surveyProject.project.domain.survey.category.Category;
import com.surveyProject.project.domain.survey.category.CategoryRepository;
import com.surveyProject.project.web.dto.category.CategoryRespDto;
import com.surveyProject.project.web.dto.category.UpdateCategoryReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService{
	
	private final CategoryRepository categoryRepository;

	@Override
	public boolean saveCategoryCount(UpdateCategoryReqDto updateCategoryReqDto) throws Exception {
		
		return categoryRepository.saveCategoryCount(updateCategoryReqDto.toEnity()) > 0;
	}

	@Override
	public List<CategoryRespDto> geyCategory(int page, int categoryCount) throws Exception {
		Map<String, Object> map = new HashMap<String,Object>();
		
		map.put("page", (page - 1) * categoryCount);
		map.put("category_count", categoryCount);
		
		List<Category> categories = categoryRepository.getCategory(map);
		
		List<CategoryRespDto> categoryRespDtos = new ArrayList<CategoryRespDto>();
		
		categories.forEach(category -> {
			categoryRespDtos.add(category.toDto());
		});
		return categoryRespDtos;
	}

}
