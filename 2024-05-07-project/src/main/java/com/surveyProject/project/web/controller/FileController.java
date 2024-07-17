package com.surveyProject.project.web.controller;

import com.surveyProject.project.service.survey.FileService;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/file")
@RequiredArgsConstructor
public class FileController {
    private final FileService fileService;

    @PostMapping("/upload")
    public String upload(@RequestParam("file")MultipartFile file){

        try {
            String url = fileService.upload(file);
        }catch (Exception e){
            return null;
        }
        return "성공";

    }

    @GetMapping(value = "{fileName}", produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    public Resource getImage(@PathVariable("fileName")String fileName){
        Resource resource = fileService.getImage(fileName);
        return resource;
    }
    
}
