package com.surveyProject.project.web.dto.surveypage.surveylist;

import com.surveyProject.project.domain.survey.survey.SurveyList;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SurveyListReqDto { //개인,단체 설문조사 목록 페이지

	
	private int userCode; 
	private int categoryCode;
	private int surveyCode; //AUTO_INCREMENT
	private String surveyTargetGender;
	private String surveyTargetAge;
	private String surveyPassword; // 단체 설문조사페이지일 경우에만 해당
	
	
	
	public SurveyList toEntity() {
		return SurveyList.builder()
				.user_code(userCode)
				.category_code(categoryCode)
				.survey_code(surveyCode)
				.survey_target_gender(surveyTargetGender)
				.survey_target_age(surveyTargetAge)
				.survey_password(surveyPassword)
				.build();
	}
	

	
//	//필터
//	public SurveyList toFilterEntity() {
//		return SurveyList.builder()
//				.category_code(categoryCode)
//				.build();
//	}
//	
//	//설문조사 목록 중 하나를 클릭했을 때 알맞는 모달창
//	public SurveyList toModalEntity() {
//		return SurveyList.builder()
//				.user_code(userCode)
//				.build();
//	}
//	
//	//단체 설문조사 목록 페이지 - 코드(패스워드) 입력
//	public SurveyList toPasswordEntity() {
//		return SurveyList.builder()
//				.survey_password(surveyPassword)
//				.build();
//	}
}

//private String surveyClass; //설문 대상자가 개인인지 단체인지


/* RespDto 클래스에는 toDto() 메소드가 없는 이유는, 
 일반적으로 서비스 레이어나 데이터 액세스 레이어에서 
 반환된 엔티티 객체를 DTO로 변환하는 작업이 필요하기 때문이다.
 이 변환 작업은 주로 서비스 레이어에서 수행되며, 
 이를 위해 별도의 toDto() 메소드를 DTO 클래스에 정의할 필요는 없다.
 대신, 서비스 레이어에서는 엔티티 객체를 DTO의 생성자나 
 별도의 변환 메소드를 통해 DTO로 변환한다. */