package com.surveyProject.project.web.dto.surveypage.surveylist;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SurveySearchListResDto {
    private String surveyTitle;
    private String surveyContent;
}
