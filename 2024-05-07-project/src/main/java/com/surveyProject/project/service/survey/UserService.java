package com.surveyProject.project.service.survey;

import com.surveyProject.project.domain.survey.user.User;
import com.surveyProject.project.web.dto.auth.*;
import org.springframework.http.ResponseEntity;


public interface UserService{
    boolean signup(SignupReqDto signupReqDto) throws Exception;
    boolean signupcom(SignupComReqDto signupComReqDto) throws Exception;
    void validateDuplicateUser(User user) throws Exception;
    LoginResDto login(LoginReqDto loginReqDto) throws Exception;
    LoginComResDto loginCom(LoginReqDto loginReqDto) throws Exception;

    ResponseEntity<? super GetLoginUserResDto> getLoginUser(String email);


}
