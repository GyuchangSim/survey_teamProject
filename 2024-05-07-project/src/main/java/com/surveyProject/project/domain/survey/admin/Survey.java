package com.surveyProject.project.domain.survey.admin;

import java.time.LocalDateTime;

import com.surveyProject.project.web.dto.admin.ReadSurveyDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Survey {

	private int survey_code;
	private String survey_title;
	private String survey_content;
	private String survey_present_img;
	private int participant_count;
	private int survey_status;
	private LocalDateTime create_date;
	private LocalDateTime update_date;
	
	public ReadSurveyDto toSurveyDto() {
		return ReadSurveyDto.builder()
						.surveyCode(survey_code)
						.surveyTitle(survey_title)
						.surveyContent(survey_content)
						.surveyPresentImg(survey_present_img)
						.participantCount(participant_count)
						.createDate(create_date)
						.updateDate(update_date)
						.build();
	}
}
