package com.surveyProject.project.domain.survey.user;

import com.surveyProject.project.provider.JwtProvider;
import com.surveyProject.project.web.dto.auth.LoginResDto;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;


@RequiredArgsConstructor
public class CustomOauth2User implements OAuth2User {

  private final LoginResDto loginResDto;


    @Override
    public Map<String, Object> getAttributes() {
        return null;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        Collection<GrantedAuthority> collection = new ArrayList<>();
        collection.add(new GrantedAuthority() {
            @Override
            public String getAuthority() {
                return loginResDto.getRole() ;
            }
        });
        return collection;
    }

    @Override
    public String getName() {
        return loginResDto.getUser_name();
    }

    public String getEmail(){
        return loginResDto.getUser_email();
    }

    public String getToken(){return loginResDto.getToken();}
}
