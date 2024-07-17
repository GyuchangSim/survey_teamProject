package com.surveyProject.project.service.survey.notice;

import java.util.List;

import com.surveyProject.project.web.dto.NoticeRespDto;
import com.surveyProject.project.web.dto.notice.Createnotice;
import com.surveyProject.project.web.dto.notice.GetNoticeDetailRespDto;
import com.surveyProject.project.web.dto.notice.GetNoticeRespDto;
import com.surveyProject.project.web.dto.notice.GetUserRespDto;
import com.surveyProject.project.web.dto.notice.UpdateNoticeReqDto;

public interface NoticeService {
	
	//user정보가져오기
	public GetUserRespDto getUserRole(int userCode) throws Exception;
	
	//noticelist 페이지
	public List<GetNoticeRespDto> getNoticeList(int page,int contentCount) throws Exception;
	
	//notice 작성 
	public boolean createNotice(Createnotice createnotice) throws Exception;
	
	//noticedetail 페이지 
	public GetNoticeDetailRespDto getNoticeDetailRespDto(int noticeCode) throws Exception;
	
	//notice 수정
	public boolean updateNotice(UpdateNoticeReqDto putNoticeReqDto) throws Exception;
	
	//notice삭제
	public boolean deleteNotice(int noticeCode) throws Exception;

	//메인페이지 공지사항
	public List<NoticeRespDto> getNotice();

}
