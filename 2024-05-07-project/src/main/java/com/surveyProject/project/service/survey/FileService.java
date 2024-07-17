package com.surveyProject.project.service.survey;

//import com.surveyProject.project.domain.survey.user.File;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {

    //파일 업로드
    public String upload(MultipartFile file) throws Exception;
    Resource getImage(String fileName);

    public boolean changeUserImg(int userCode, MultipartFile userImg) throws Exception;

    //설문신청 도입부 첨부파일
    public String addFile(MultipartFile file) throws Exception;
}
