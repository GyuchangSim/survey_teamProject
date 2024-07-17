//2024.05.24 김예찬
package com.surveyProject.project.web.controller.surveypage;

import com.surveyProject.project.domain.survey.survey.SurveyInformation;
import com.surveyProject.project.web.dto.surveypage.surveyCompleteDto;
import com.surveyProject.project.web.dto.surveypage.SurveyStartRespDto;
import com.surveyProject.project.web.dto.surveypage.surveylist.*;
import org.springframework.web.bind.annotation.RestController;
import com.surveyProject.project.service.survey.surveypage.SurveyService;
import com.surveyProject.project.web.dto.CMRespDto;
import com.surveyProject.project.web.dto.surveypage.surveystartcomplete.SurveyStartCompleteDto;
import lombok.RequiredArgsConstructor;
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController //view가 아닌 데이터를 요청을 다룰 때 사용
@RequestMapping("/survey/personal/list")
@RequiredArgsConstructor
public class SurveyPersonalController {
	
	private final SurveyService surveyService;
	
	/* 
	 * 게시물 불러오기 로직(만들어 놓은 메소드에 대해 다 해보기)
	 * 1. 겟맵핑사용
	 * 2. 매개변수는 page, count이 두개 넣으면 됨.
	 * 3. 매개변수가 두개니깐 나는 dto 사용 할거임.
	 * 3-1. 기존에 내가 page, count, num 을 사용하는 Adto를 만들어놔서 나는 그냥
	 * 기존에 Adto 사용해서 할거임. 
	 * 4. k서비스에 page와 count를 보내줄거임
	 * 5. k 서비스에서 page와 count묶어서 맵으로 만듦.
	 * 6. 레파지토리에 만든 맵을 보낼거임.
	 * 7. xml에서 맵에 들어있는 두개의 변수를 어떻게 대입할거임.
	 * 8. 리턴이 리스트 하나(리스트 여러개) 나옴.
	 * 9. 나는 이 리턴값을 담기 위해 c엔티티를 만들어서 담을거임.
	 *  */
	

	//설문조사 전체 띄우기
	@GetMapping("/main/surveyList")
	public ResponseEntity<?> getSurveyList(){
		List<SurveyListRespDto> surveyListRespDtoList = new ArrayList<>();
		try {
			surveyListRespDtoList = surveyService.getSurveyList();
			System.out.println("컨트롤러 : surveyListRespDtoList = " + surveyListRespDtoList);
		}catch (Exception exception){
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "정보 불러오기 실패",surveyListRespDtoList ));
		}

		return ResponseEntity.ok().body(new CMRespDto<>(1, "정보 불러오기 성공",surveyListRespDtoList ));
	}
	
	@GetMapping("")
	public ResponseEntity<?> checkFilterAndGetSurveyList(@RequestParam int page, @RequestParam int contentCount, @RequestParam String surveyClass, @RequestParam(required = false) List<Integer> selectedCategories, @RequestParam(required = false) List<String> selectedGenders, @RequestParam(required = false) List<String> selectedAges) {
		
		List<SurveyListRespDto> surveyListRespDtos = null;
		System.out.println("page = " + page);
		try {
			surveyListRespDtos = surveyService.checkFilterAndGetSurveyListS(page, contentCount, surveyClass, selectedCategories, selectedGenders, selectedAges);
			System.out.println("컨트롤러 테스트: " + surveyListRespDtos);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(e);
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "실패", surveyListRespDtos));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "성공", surveyListRespDtos));
	}
	
	//소윤
	@GetMapping("/start/{surveyCode}")
	public ResponseEntity<?> getSurveyStart(@PathVariable int surveyCode){
		SurveyStartRespDto surveyStartRespDto = null;
		
		try {
			surveyStartRespDto = surveyService.getSurveyStart(surveyCode);
		} catch (Exception e) {
			e.printStackTrace();
		  return ResponseEntity.badRequest().body(new CMRespDto<>(-1,"실패",surveyStartRespDto));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1,"성공",surveyStartRespDto));
	}
	
	@GetMapping("/{surveyCode}/complete")   // 지영
	public ResponseEntity<?> surveyPersonComplete(@PathVariable int surveyCode) {
		
		surveyCompleteDto completeDto = null;
		
		try {
			completeDto = surveyService.surveyComplete(surveyCode);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "failure", completeDto));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", completeDto));
	}
	
	@PutMapping("/{surveyCode}/complete/{userCode}/{money}")
	public ResponseEntity<?> updateSurveyComplete(@PathVariable int surveyCode, @PathVariable int userCode,@PathVariable int money) {
		
		boolean status = false;
		
		try {
			status = surveyService.updateSurveyComplete(surveyCode, userCode, money);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "failure", status));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
	}
	
	
	



	//설문조사 디테일 페이지
	@GetMapping("/details/{surveyCode}")
	public ResponseEntity<?>getSurveyDetail(@PathVariable int surveyCode){
		SurveyDetailResDto surveyDetailResDtoList = null;
//		System.out.println("surveyCode = " + surveyCode);
//		System.out.println("컨트롤러 : surveyDetailResDtoList = " + surveyDetailResDtoList);


		try{
			surveyDetailResDtoList = surveyService.getSurveyDetail(surveyCode);
//			System.out.println("surveyDetailResDtoList = " + surveyDetailResDtoList);
		}catch (Exception exception){
			System.out.println("exception = " + exception);
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "데이터 불러오기 실패", surveyDetailResDtoList));
		}

		return ResponseEntity.ok().body(new CMRespDto<>(1, "데이터 불러오기 성공", surveyDetailResDtoList));
	}

	//검색창
	@GetMapping("/searchList")
	public ResponseEntity<?> searchList(@RequestParam String word){
		List<SurveySearchListResDto> surveyInformationList = null;
		try {
			
			surveyInformationList = surveyService.getSearchList(word);
			System.out.println(" 컨트롤러 : surveyInformationList = " + surveyInformationList);

		}catch (Exception exception){
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "검색 실패", surveyInformationList));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "검색 성공", surveyInformationList));
	}

//	설문조사 인기설문
	@GetMapping("/main/survey")
	public ResponseEntity<?> mainSurvey(){
		List<TopSurveyResDto>topSurveyResDtoList = new ArrayList<>();
		topSurveyResDtoList = surveyService.getTopSurvey();

		return ResponseEntity.ok().body(new CMRespDto<>(1, "성공", topSurveyResDtoList));
	}


	
	
	
	
	
	

	
	
}


/* ?? Controller에서는 Repository에 있는 모든 메소드를 호출하는 것이 아니라
 * 클라이언트가 요청하는 기능에 필요한 Repository의 메소드만 호출하면 된다. */
