package com.surveyProject.project.web.dto.auth;

import com.surveyProject.project.domain.survey.user.User;
import com.surveyProject.project.web.dto.CMRespDto;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
public class GetLoginUserResDto extends CMRespDto{

    private String email;
    private String userName;

    private GetLoginUserResDto(User user){
        this.email = user.getUser_email();
        this.userName = user.getUser_name();
    }
    public static ResponseEntity<GetLoginUserResDto> success(User user){
        GetLoginUserResDto result = new GetLoginUserResDto(user);
        return ResponseEntity.ok().body(result);
    }
    public static ResponseEntity<CMRespDto> notExistUser(){
        boolean status = false;
        CMRespDto result = new CMRespDto(-1, "로그인 정보 실패",status);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(result);
    }
}
