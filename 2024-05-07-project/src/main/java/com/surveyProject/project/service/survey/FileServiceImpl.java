package com.surveyProject.project.service.survey;

import com.surveyProject.project.domain.survey.mypage.UserInfo;
import com.surveyProject.project.domain.survey.surveyform.ApplyFile;
import com.surveyProject.project.domain.survey.user.FileEntity;
import com.surveyProject.project.domain.survey.user.FileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FileServiceImpl implements FileService{
	
    @Value("${file.path}")
    private String filePath;
    @Value("${file.url}")
    private String fileUrl;
    
    private final FileRepository fileRepository;

    @Override
    public String upload(MultipartFile file) throws Exception {
        if(file.isEmpty()) return null;

        //오리지널 파일 이름
        String originalFileName = file.getOriginalFilename();
        System.out.println("originalFileName = " + originalFileName);
        //확장자
        String extension = originalFileName.substring(originalFileName.lastIndexOf("."));
        System.out.println("extension = " + extension);
        String uuid = UUID.randomUUID().toString();
        //저장된 파일 이름
        String saveFileName = uuid + extension;
        String savePath = filePath + saveFileName;

        try {
            file.transferTo(new File(savePath));
        }catch (Exception exception){
            exception.printStackTrace();
            return null;
        }
        FileEntity fileEntity = new FileEntity();
        fileEntity.setFile_name(saveFileName);
        fileEntity.setCreate_date(LocalDateTime.now());


//        String url = fileUrl + saveFileName;
        return fileRepository.saveFile(fileEntity);
    }

    @Override
    public Resource getImage(String fileName){
        Resource resource = null;

        try {
            resource = new UrlResource("file:" + filePath + fileName);
        }catch (Exception exception){
            exception.printStackTrace();
            return null;
        }
        return resource;
    }

	@Override
	public boolean changeUserImg(int userCode, MultipartFile userImg) throws Exception {
		if(userImg.isEmpty()) return false;
		
//		System.out.println("service: " + userCode + "-" + userImg);
		
		String originalFileName = userImg.getOriginalFilename();
		String extension = originalFileName.substring(originalFileName.lastIndexOf("."));
		String uuid = UUID.randomUUID().toString();
		
		String saveFileName = uuid + extension;
        String savePath = filePath + saveFileName;
        
        userImg.transferTo(new File(savePath));
        
        UserInfo userInfo = new UserInfo();
        userInfo.setUser_code(userCode);
        userInfo.setUser_img(saveFileName);
        
//        System.out.println("service-userInfo: " + userInfo); //이까지 잘 담겨서 전달
        
		return fileRepository.userImgSave(userInfo) > 0;
	}

    //설문신청 도입부 첨부파일
    @Override
    public String addFile(MultipartFile file) throws Exception{
        if(file.isEmpty()) return null;

        String originalFileName = file.getOriginalFilename();
        System.out.println("originalFileName = " + originalFileName);
        //확장자
        String extension = originalFileName.substring(originalFileName.lastIndexOf("."));
        System.out.println("extension = " + extension);
        String uuid = UUID.randomUUID().toString();
        //저장된 파일 이름
        String saveFileName = uuid + extension;
        String savePath = filePath + saveFileName;

        try {
            file.transferTo(new File(savePath));
        }catch (Exception exception){
            exception.printStackTrace();
            return null;
        }
        ApplyFile applyFile = new ApplyFile();
        applyFile.setFile_name(saveFileName);
        applyFile.setCreate_date(LocalDateTime.now());
        applyFile.setUpdate_date(LocalDateTime.now());

        String attacthFile = fileRepository.addFile(applyFile);
        return attacthFile;
    }
}
