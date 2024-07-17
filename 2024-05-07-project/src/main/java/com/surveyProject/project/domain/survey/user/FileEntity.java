package com.surveyProject.project.domain.survey.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FileEntity {
    //첨부파일
    private int file_code;
    private String file_name;
    private LocalDateTime create_date;
}
