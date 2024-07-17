package com.surveyProject.project.domain.survey.user;

import com.surveyProject.project.domain.survey.surveyform.ApplyFile;
import org.apache.ibatis.annotations.Mapper;

import com.surveyProject.project.domain.survey.mypage.UserInfo;

@Mapper
public interface FileRepository {
//    public int save(File file)throws Exception;
    public String saveFile(FileEntity file) throws Exception;
    public int maxPk() throws Exception;
    
    public int userImgSave(UserInfo userInfo) throws Exception;

    public String addFile(ApplyFile applyFile) throws Exception;
}
