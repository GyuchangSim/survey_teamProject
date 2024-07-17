package com.surveyProject.project.web.controller.Notice;

import java.util.List;

import com.surveyProject.project.web.dto.NoticeRespDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.surveyProject.project.service.survey.notice.NoticeService;
import com.surveyProject.project.web.dto.CMRespDto;
import com.surveyProject.project.web.dto.notice.Createnotice;
import com.surveyProject.project.web.dto.notice.GetNoticeDetailRespDto;
import com.surveyProject.project.web.dto.notice.GetNoticeRespDto;
import com.surveyProject.project.web.dto.notice.GetUserRespDto;
import com.surveyProject.project.web.dto.notice.UpdateNoticeReqDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/survey")
@RequiredArgsConstructor
public class NoticeController{
	
	private final NoticeService noticeService;
	
	@GetMapping("/notice/user/{userCode}")
	public ResponseEntity<?> getuserrole(@PathVariable int userCode) {
		
		GetUserRespDto getUserRespDto = null;
		
		try {
			getUserRespDto = noticeService.getUserRole(userCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1,"실패",getUserRespDto));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1,"성공",getUserRespDto));
	}
	
	//noticepage
	@GetMapping ("/notice")
	public ResponseEntity<?> getnotice (@RequestParam int page, int contentCount) {
		List<GetNoticeRespDto> list = null;
		
		try {
			list = noticeService.getNoticeList(page, contentCount);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1,"실패",list));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1,"성공",list));
	}
	
	
	//noticedetail 페이지 
		@GetMapping("/notice/detail/{noticeCode}")
		public ResponseEntity<?> getnoticedetail(@PathVariable int noticeCode) {
			
			GetNoticeDetailRespDto getNoticeDetailRespDto = null;
			
			try {
				getNoticeDetailRespDto = noticeService.getNoticeDetailRespDto(noticeCode);
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.ok().body(new CMRespDto<>(-1,"실패",getNoticeDetailRespDto));
			}
			return ResponseEntity.ok().body(new CMRespDto<>(1,"성공",getNoticeDetailRespDto));
		}
		

	//notice 작성 
	@PostMapping("/notice/create")
	public ResponseEntity<?> createnotice(@RequestBody Createnotice createnotice){
		boolean result = false;
		
		try {
			result = noticeService.createNotice(createnotice);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "실패", result));
			
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "성공", result));
	}
	
	
	//notice 수정
	@PutMapping("/notice/detail/modify/{noticeCode}")
	public ResponseEntity<?> updatenotice(@PathVariable int noticeCode, @RequestBody UpdateNoticeReqDto updateNoticeReqDto) {
		boolean result = false;
		
		try {
			updateNoticeReqDto.setNoticeCode(noticeCode);
			result = noticeService.updateNotice(updateNoticeReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1,"실패",result));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1,"성공",result));
	}
	
	
	//notice삭제 
	@DeleteMapping("/notice/delete/{noticeCode}")
	public ResponseEntity<?> deletenotice(@PathVariable int noticeCode) {
		boolean result = false;
		
		try {
			result = noticeService.deleteNotice(noticeCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1,"실패",result));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1,"성공",result));
	}

	//메인페이지 최신 공지사항 띄우기
	@GetMapping("/main/notice")
	public ResponseEntity<?> mainNotice() {

		List<NoticeRespDto> notice = null;
//        Notice notice = null;
		notice = noticeService.getNotice();
//        System.out.println("notices = " + notices);
//		return ResponseEntity.ok().body(new CMRespDto<>(1, "성공", notice));
		return ResponseEntity.ok().body(notice);
	}
	
	
	
	
}
