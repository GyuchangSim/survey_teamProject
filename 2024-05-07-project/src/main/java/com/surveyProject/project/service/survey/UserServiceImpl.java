package com.surveyProject.project.service.survey;

import com.surveyProject.project.domain.survey.user.*;
import com.surveyProject.project.provider.JwtProvider;
import com.surveyProject.project.web.dto.auth.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final JwtProvider jwtProvider;



    @Override
    public boolean signup(SignupReqDto signupReqDto) throws Exception {
        System.out.println("signupReqDto = " + signupReqDto);
        //회원이 존재하는지 확인하는 메서드 만들기
        validateDuplicateUser(signupReqDto.toEntity());
        User user = signupReqDto.toEntity();
        return userRepository.save(user) > 0;


    }

    @Override
    public boolean signupcom(SignupComReqDto signupComReqDto) throws Exception {
        return userRepository.savecom(signupComReqDto.toEntity())> 0;
    }

    //회원 중복 검증 메서드
    @Override
    public void validateDuplicateUser(User user) throws Exception {
        User findUser = userRepository.findByEmail(user.getUser_email());
        if(findUser !=null){
            throw new IllegalStateException("이미 가입된 회원입니다.");
        }
    }

    @Override
    public LoginResDto login(LoginReqDto loginReqDto) throws Exception{
//        System.out.println("서비스 : " + loginReqDto.getEmail());
        String email = loginReqDto.getEmail();

        User selectedUser = userRepository.findByEmail(loginReqDto.getEmail());
        String token = null;

        User user = new User();
        user.setUser_email(loginReqDto.getEmail());
        user.setUser_password(loginReqDto.getPassword());
        System.out.println("selectedUser.getUser_password() = " + selectedUser.getUser_password());
        System.out.println("user.getUser_password() = " + user.getUser_password());

        if(selectedUser.getUser_email() == null){
            throw new Exception("email이 틀립니다.");
        }
        String password = user.getUser_password();
        String encodePassword = selectedUser.getUser_password();
        if(!bCryptPasswordEncoder.matches(password, encodePassword)){
            //matches할 때 평문의 오리지널 암호가 무조건 먼저 와야함!!
            throw new Exception("비밀번호가 틀립니다.");
        }
        token = jwtProvider.create(email);
        String userName = selectedUser.getUser_name();
        int userCode = selectedUser.getUser_code();
        String role = selectedUser.getRole();

        //나중에 확인해보기
        LoginResDto loginResDto = new LoginResDto();
        loginResDto.setUser_email(email);
//        loginResDto.setUser_password(password);
        loginResDto.setUser_name(userName);
        loginResDto.setUser_code(userCode);
        loginResDto.setRole(role);
        loginResDto.setToken(token);



        return loginResDto;
    }

    @Override
    public LoginComResDto loginCom(LoginReqDto loginReqDto) throws Exception {
        String token = null;

        Company selectedCompany = userRepository.findByComEmail(loginReqDto.getEmail());

        System.out.println("loginReqDto.getEmail() = " + loginReqDto.getEmail());
        System.out.println("loginReqDto.getPassword() = " + loginReqDto.getPassword());
        Company company = new Company();
        company.setCompany_email(loginReqDto.getEmail());
        company.setCompany_password(loginReqDto.getPassword());
        if(selectedCompany == null){
            throw new Exception("email이 틀립니다.");
        }
        if(!bCryptPasswordEncoder.matches(company.getCompany_password(), selectedCompany.getCompany_password())){
            throw new Exception("비밀번호가 틀립니다.");
        }
        String email = selectedCompany.getCompany_email();
        String companyName = selectedCompany.getCompany_name();
        String role = selectedCompany.getRole();
        int companyCode = selectedCompany.getCompany_code();
        token = jwtProvider.create(email);

        LoginComResDto loginComResDto = new LoginComResDto();
        loginComResDto.setCompany_email(email);
        loginComResDto.setCompany_name(companyName);
        loginComResDto.setRole(role);
        loginComResDto.setCompany_code(companyCode);

        loginComResDto.setToken(token);
//        loginComResDto.setCompany_password(selectedCompany.getCompany_password());

        return loginComResDto;
    }


    @Override
    public ResponseEntity<? super GetLoginUserResDto> getLoginUser(String email) {
        User user = new User();
        try {
             user = userRepository.findByEmail(email);
             if(user == null) return GetLoginUserResDto.notExistUser();

        }catch (Exception exception){
            exception.printStackTrace();
            return null; //일단 null해보자 안되면 고치기
        }
        return GetLoginUserResDto.success(user);
    }
}
