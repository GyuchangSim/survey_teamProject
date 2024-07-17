package com.surveyProject.project.domain.survey.surveyform;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ApplyFile {

    private int file_code;
    private int survey_code;
    private String file_name;
    private LocalDateTime create_date;
    private LocalDateTime update_date;

}
