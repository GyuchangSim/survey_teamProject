package com.surveyProject.project.service.survey.notice;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.surveyProject.project.web.dto.NoticeRespDto;
import org.springframework.stereotype.Service;

import com.surveyProject.project.domain.survey.notice.Notice;
import com.surveyProject.project.domain.survey.notice.NoticeRepository;
import com.surveyProject.project.web.dto.notice.Createnotice;
import com.surveyProject.project.web.dto.notice.GetNoticeDetailRespDto;
import com.surveyProject.project.web.dto.notice.GetNoticeRespDto;
import com.surveyProject.project.web.dto.notice.GetUserRespDto;
import com.surveyProject.project.web.dto.notice.UpdateNoticeReqDto;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class NoticeServiceImpl implements NoticeService{
	
	private final NoticeRepository noticeRepository;
	
	//user정보가져오기
	@Override
	public GetUserRespDto getUserRole(int userCode) throws Exception {
		return noticeRepository.getuser(userCode).toUserDto();
	}
	
	//noticelist 페이지
	@Override
	public List<GetNoticeRespDto> getNoticeList(int page, int contentCount) throws Exception {
		Map<String, Object> map = new HashMap<String,Object>();
		
		map.put("index", (page - 1) * contentCount);
		map.put("count", contentCount);
		
	    List<Notice> noticelist = noticeRepository.getnotice(map);
	    
	    List<GetNoticeRespDto> noticeListRespDtos = new ArrayList<GetNoticeRespDto>();
	    
	    noticelist.forEach(notice -> {
	    	noticeListRespDtos.add(notice.toListDto());
	    });
		return noticeListRespDtos;
	}
	

	//notice 작성 
	@Override
	public boolean createNotice(Createnotice createnotice) throws Exception {
		
		return noticeRepository.savenotice(createnotice.toEntity()) > 0;
	}

	//noticedetail 페이지 
	@Override
	public GetNoticeDetailRespDto getNoticeDetailRespDto(int noticeCode) throws Exception {
		
		return noticeRepository.noticedetail(noticeCode).toDto();
	}

	
	
	//notice 수정
	@Override
	public boolean updateNotice(UpdateNoticeReqDto updateNoticeReqDto) throws Exception {
		
		return noticeRepository.updatenotice(updateNoticeReqDto.toEntity()) > 0;
	}

	//notice삭제 
	@Override
	public boolean deleteNotice(int noticeCode) throws Exception {
		
		return noticeRepository.deletenotice(noticeCode) > 0;
	}

	//메인페이지 공지사항 띄우기
	@Override
	public List<NoticeRespDto> getNotice() {
		return noticeRepository.getNotice3();
	}


	
}
