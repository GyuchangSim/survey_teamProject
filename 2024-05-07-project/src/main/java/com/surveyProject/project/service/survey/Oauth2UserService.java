package com.surveyProject.project.service.survey;

import com.surveyProject.project.domain.survey.user.CustomOauth2User;
import com.surveyProject.project.domain.survey.user.User;
import com.surveyProject.project.domain.survey.user.UserRepository;
import com.surveyProject.project.provider.JwtProvider;
import com.surveyProject.project.web.dto.auth.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class Oauth2UserService extends DefaultOAuth2UserService {
    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest oAuth2UserRequest)throws OAuth2AuthenticationException{
        OAuth2User oAuth2User = super.loadUser(oAuth2UserRequest);
        System.out.println("oAuth2User.getAttributes() = " + oAuth2User.getAttributes());



        String registrationId = oAuth2UserRequest.getClientRegistration().getRegistrationId();
        String userNameAttributeName    = oAuth2UserRequest.getClientRegistration().getProviderDetails()
                .getUserInfoEndpoint().getUserNameAttributeName();
        OAuthAttributes attributes = null;


        if (registrationId.equals("google")) {
            attributes = OAuthAttributes.googleMemberInfo(userNameAttributeName, oAuth2User.getAttributes());


        } else if (registrationId.equals("naver")) {
            attributes = OAuthAttributes.naverMemberInfo(userNameAttributeName, oAuth2User.getAttributes());

        } else if (registrationId.equals("facebook")) {
            attributes = OAuthAttributes.naverMemberInfo(userNameAttributeName, oAuth2User.getAttributes());
        }


        String email  = attributes.getEmail();
        if(userRepository.findByEmail(email) == null){
            System.out.println(registrationId);
            User user= new User();
            user.setUser_email(attributes.getEmail());
            user.setUser_password(attributes.getPassword());
            user.setRole("ROLE_USER");
            user.setProvider(registrationId);
            user.setUser_name(attributes.getName());

            try {
                userRepository.save(user);
                System.out.println("user = " + user);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        String userName = attributes.getName();


//        String token = jwtProvider.create(email);
        LoginResDto loginResDto = new LoginResDto();
        loginResDto.setUser_email(email);
        loginResDto.setUser_name(userName);
//        loginResDto.setToken(token);
        loginResDto.setRole("ROLE_USER");



        SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_USER");
//        return new DefaultOAuth2User(
//                Collections.singleton(authority),
//                attributes.getAttributes(),
//                userNameAttributeName);

        return new CustomOauth2User(loginResDto);


    }
}
