package com.surveyProject.project.domain.survey.notice;

import java.util.List;
import java.util.Map;

import com.surveyProject.project.web.dto.NoticeRespDto;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface NoticeRepository {
	
	//user정보가져오기 
	public Notice getuser(int userCode) throws Exception;
	
	//noticelist 페이지
	public List<Notice> getnotice(Map<String, Object> map) throws Exception;
	
	//notice 작성
	public int savenotice(Notice notice) throws Exception;
	
	//noticedetail 페이지 
	public Notice noticedetail(int notice_code) throws Exception;
	
	
	//notice 수정
	public int updatenotice(Notice notice) throws Exception;
	
	//notice삭제
	public int deletenotice(int notice_code) throws Exception;

	//메인페이지 공지사항
	public List<NoticeRespDto> getNotice3();
}
