package com.surveyProject.project.domain.survey.user;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;


@Mapper
public interface UserRepository {
    public int save(User user) throws Exception;
    //성공 실패를 리턴

    public User findByEmail(String email) throws UsernameNotFoundException;

    public int savecom(Company company) throws Exception;

    public Company findByComEmail(String email) throws UsernameNotFoundException;
    //유저정보 묶음을 리턴
}
