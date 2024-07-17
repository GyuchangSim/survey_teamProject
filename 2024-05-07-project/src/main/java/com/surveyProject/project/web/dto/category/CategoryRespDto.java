package com.surveyProject.project.web.dto.category;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CategoryRespDto {
	
	private int categoryCode;
	private String categoryName;

}
