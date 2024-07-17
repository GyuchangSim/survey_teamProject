package com.surveyProject.project.web.controller.SurveyForm;

import com.surveyProject.project.service.survey.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/survey")
@RequiredArgsConstructor
public class SurveyFileController {
    private final FileService fileService;

    @PostMapping("/file")
    public String addFile(@RequestParam("file")MultipartFile file){
        try {
            fileService.addFile(file);
        }catch (Exception exception){
            return null;
        }

        return "성공";
    }
}
