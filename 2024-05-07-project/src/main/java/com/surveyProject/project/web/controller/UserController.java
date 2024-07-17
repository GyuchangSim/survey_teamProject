package com.surveyProject.project.web.controller;

import com.surveyProject.project.service.survey.FileService;
import com.surveyProject.project.service.survey.UserService;
import com.surveyProject.project.web.dto.CMRespDto;
import com.surveyProject.project.web.dto.auth.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final FileService fileService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupReqDto signupReqDto){
        boolean status = false;
        try {
            System.out.println(signupReqDto);
            status = userService.signup(signupReqDto);

        }catch (Exception e){
            System.out.println("e = " + e);
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "회원가입 실패", status));
        }

        return ResponseEntity.ok().body(new CMRespDto<>(1, "회원가입 성공", status));
    }

    @PostMapping("/signupcom")
    public ResponseEntity<?> signupcom(@RequestBody SignupComReqDto signupComReqDto){
        boolean status = false;
        try {
            System.out.println(signupComReqDto);
            status = userService.signupcom(signupComReqDto);
//            fileService.upload(signupComReqDto.getFile());


        }catch (Exception e){
            System.out.println("e = " + e);
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "회원가입 실패", status));
        }

        return ResponseEntity.ok().body(new CMRespDto<>(1, "회원가입 대기중", status));

    }

    //개인 로그인
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginReqDto loginReqDto) {
        LoginResDto loginResDto = new LoginResDto();
        System.out.println("컨트롤러 : " + loginReqDto.getEmail());

        try {
             loginResDto = userService.login(loginReqDto);
            System.out.println("loginResDto = " + loginResDto);
        } catch (Exception e) {
            System.out.println("e = " + e);
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "로그인 실패", loginResDto));

        }
        return ResponseEntity.ok().body(new CMRespDto<>(1, "로그인 성공", loginResDto));

    }

//단체 로그인
    @PostMapping("/logincom")
    public ResponseEntity<?> loginCom(@RequestBody LoginReqDto loginReqDto) {
        LoginComResDto loginComResDto = new LoginComResDto();
        System.out.println("컨트롤러 : " + loginReqDto.getEmail());

        try {


            loginComResDto = userService.loginCom(loginReqDto);
        } catch (Exception e) {
            System.out.println("e = " + e);
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "로그인 실패", loginComResDto));

        }
        return ResponseEntity.ok().body(new CMRespDto<>(1, "로그인 성공", loginComResDto));

    }


//    @GetMapping("/login")
//    public String login() {
//        return "login";
//    }

    @GetMapping("")
    public ResponseEntity<? super  GetLoginUserResDto> getLoginUser(@AuthenticationPrincipal String email){
        ResponseEntity<? super  GetLoginUserResDto> response = userService.getLoginUser(email);
        return response;
    }

    @GetMapping("/logout")
    public String logout(@RequestParam String param) {
        return new String();
    }




}
