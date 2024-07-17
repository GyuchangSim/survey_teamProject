//2024.05.24 김예찬
package com.surveyProject.project.web.controller.surveypage;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.surveyProject.project.service.survey.surveypage.SurveyService;
import com.surveyProject.project.web.dto.CMRespDto;
import com.surveyProject.project.web.dto.surveypage.SurveyStartRespDto;
import com.surveyProject.project.web.dto.surveypage.surveylist.SurveyListReqDto;
import com.surveyProject.project.web.dto.surveypage.surveylist.SurveyListRespDto;
import com.surveyProject.project.web.dto.surveypage.surveystartcomplete.SurveyStartCompleteDto;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/survey/group/list")
@RequiredArgsConstructor
public class SurveyGroupController {

	private final SurveyService surveyService;

	//설문 전체 띄우기
	@GetMapping("/surveyList")
	public ResponseEntity<?> getSurveyList(){
		List<SurveyListRespDto> surveyListRespDto = new ArrayList<>();
		try {
			surveyListRespDto = surveyService.getSurveyGroupList();
		}catch (Exception exception){
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "정보 불러오기 실패", surveyListRespDto));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "정보 불러오기 성공", surveyListRespDto));

	}


	//단체 설문조사 리스트들이 모여있는 페이지, ("")와 ("/")는 동일한 동작을 함
	@GetMapping("")
	public ResponseEntity<?> checkFilterAndGetSurveyList(@RequestParam int page, @RequestParam int contentCount, @RequestParam String surveyClass, @RequestParam(required = false) List<Integer> selectedCategories, @RequestParam(required = false) List<String> selectedGenders, @RequestParam(required = false) List<String> selectedAges) {
		
		List<SurveyListRespDto> surveyListRespDto = null;
		
		try {
			surveyListRespDto = surveyService.checkFilterAndGetSurveyListS(page, contentCount, surveyClass, selectedCategories, selectedGenders, selectedAges);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(e);
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "실패", surveyListRespDto));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "성공", surveyListRespDto));
	}
	
	
	//단체 설문조사 중 하나를 클릭했을 때 시작페이지
	@PostMapping("/{surveyCode}/start")
	public ResponseEntity<?> checkSurveyPasswordAndSurveyStart(@RequestParam(required = false) String surveyPassword ,@PathVariable int surveyCode, @PathVariable int userCode) {
		
		
		List<SurveyStartCompleteDto> surveyStartCompleteDto = null;
		
		try {
			surveyStartCompleteDto = surveyService.checkSurveyPasswordAndTargetAndSurveyStartS(surveyPassword ,surveyCode, userCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "실패", surveyStartCompleteDto));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "성공", surveyStartCompleteDto));
	}
	
	//surveyStart(소윤)
	@GetMapping("/start/{surveyCode}")
	public ResponseEntity<?> getSurveyGroupStart(@PathVariable int surveyCode){
		
		SurveyStartRespDto surveyStartRespDto = null;
		
		try {
			System.out.println(surveyCode);
			surveyStartRespDto = surveyService.getSurveyGroupStart(surveyCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().body(new CMRespDto<>(-1,"실패",surveyStartRespDto));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1,"성공",surveyStartRespDto));
	}

	//비밀번호 모달창
	@GetMapping("/pwd/{surveyCode}")
	public ResponseEntity<?> getGroupPwd(@PathVariable int surveyCode){
		SurveyListRespDto surveyListRespDto = null;
		try{

			surveyListRespDto = surveyService.getGroupPwd(surveyCode);
		}catch (Exception e){
			e.printStackTrace();
			System.out.println("e = " + e);
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "패스워드 실패",surveyListRespDto ));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "패스워드 성공",surveyListRespDto ));

	}
}
