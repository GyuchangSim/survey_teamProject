package com.surveyProject.project.domain.survey.category;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CategoryRepository {

	public int saveCategoryCount(Category category) throws Exception;
	
	public List<Category> getCategory(Map<String, Object> map) throws Exception;
}
