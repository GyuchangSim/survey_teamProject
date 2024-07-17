package com.surveyProject.project.domain.survey.survey;



import com.surveyProject.project.web.dto.surveypage.SurveyStartRespDto;
import com.surveyProject.project.web.dto.surveypage.surveylist.SurveyListReqDto;
import com.surveyProject.project.web.dto.surveypage.surveylist.SurveyListRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor 
@Builder																																														
//설문조사 개인 + 단체 목록 페이지
public class SurveyList {
	
	private int user_code; //개인이 설문을 신청했을 경우 그 개인의 정보를 가져오기 위해 필요, 여기서 user의 정보는 사용자가 아닌 신청자의 user정보	
	private String user_birth;
	private int user_gender;
	private int company_code;

	
	private int category_code; //AUTO_INCREMENT
	private String category_name;
	
	private String survey_target_gender;
	private String survey_target_age;
	private int survey_per_money;
	private int participant_max;
	private String survey_period_start;
	private String survey_period_stop;

	
	private String survey_class; //설문 조사 대상이 개인인지 단체인지
	private String survey_password; // 단체 설문조사페이지일 경우
	private int survey_code; //AUTO_INCREMENT
	private String survey_title;
	private String survey_content; // 설문조사 시작 페이지에서 나오는 "제목 없는 설문지" 바로 밑부분에 나오는 설문조사에 대한 설명란에 적을 설명내용
	private String survey_present_img;
	private int participant_count;
	private int survey_status; // AUTO_INCREMENT, 설문의 상태 -> 완료, 기간만료, 대상자 수 만료, 승인대기중을 나타내는 코드
	private String status_content; // 설문 상태의 내용 -> 완료, 기간만료, 대상자 수 만료, 승인대기중
	
	
	
	public SurveyListReqDto toSurveyListReqDto() {
		return SurveyListReqDto.builder()
				.userCode(user_code)
				.surveyPassword(survey_password)
				.surveyCode(survey_code)
				.build();
	}
	
	public SurveyListRespDto toSurveyListRespDto() {
		return SurveyListRespDto.builder()
//				.userCode(user_code)

				.surveyCode(survey_code)
				.categoryName(category_name)
				.categoryCode(category_code)
				.surveyTargetAge(survey_target_age)
				.surveyTargetGender(survey_target_gender)
				.surveyTitle(survey_title)
				.surveyPerMoney(survey_per_money)
				.surveyPeriodStart(survey_period_start)
				.surveyPeriodStop(survey_period_stop)
				.surveyPassword(survey_password)
				.build();
	}
	
	public SurveyStartRespDto toSurveyStartRespDto() {
		return SurveyStartRespDto.builder()
				.surveyTitle(survey_title)
				.surveyPeriodStart(survey_period_start)
				.surveyPeriodStop(survey_period_stop)
				.surveyPerMoney(survey_per_money)
				.build();
	}
	
	public SurveyStartRespDto toSurveyStartGroupRespDto() {
		return SurveyStartRespDto.builder()
				.surveyTitle(survey_title)
				.surveyPeriodStart(survey_period_start)
				.surveyPeriodStop(survey_period_stop)
				.build();
	}

	public SurveyListRespDto toGroupPwdDto(){
		return SurveyListRespDto.builder()
				.surveyPassword(survey_password)
				.build();
	}


}




/* 데이터는 Controller에서 Service로 이동할 때와 Service에서 Controller로 이동할 때 DTO로 변환되며, 
 Service에서 Repository로 이동할 때와 Repository에서 Service로 이동할 때 Entity로 변환된다,
 - Controller: 데이터가 주로 Dto 형식으로 존재
 - Service: 데이터가 주로 Dto와 Entity 두 가지 형식으로 존재(Controller로부터 받은 Dto를 Entity로 변환하여 DB와의 작업을 수행하거나 DB로부터 받은 Entity를 Dto로 변환하여 Controller에게 전달하는 역할)
 - Repository: 데이터가 주로 Entity 형식으로 존재
 - DB: 데이터가 Entity 형식으로 존재 */

/*비즈니스 로직이란 애플리케이션에서 수행되는 실제 연산과 규칙을 의미.
이는 애플리케이션의 핵심 기능을 구현하는 데 필요한 코드를 포함하며, 
데이터의 생성, 표시, 저장, 변경 등을 관리한다.
예를 들어, 설문조사 애플리케이션에서 비즈니스 로직은 
다음과 같은 작업을 포함할 수 있다
- 설문조사 생성: 사용자가 새로운 설문조사를 생성할 수 있도록 한다.
- 질문 추가: 사용자가 설문조사에 질문을 추가할 수 있도록 한다.
- 응답 처리: 사용자의 응답을 수집하고 저장한다.
- 결과 분석: 수집된 응답을 분석하여 결과를 생성한다.
이러한 비즈니스 로직은 도메인 모델 내에 위치하게 된다.
도메인 모델은 비즈니스 로직과 관련된 데이터를 포함하며, 
이 데이터를 처리하는 메서드(함수)를 포함할 수 있다. 
이는 객체 지향 프로그래밍의 핵심 원칙 중 하나인 캡슐화를 따른다.*/

/*domain쪽이 DB랑 직접 매칭되는 Entity*/

/* @Builder는 복잡한 객체를 생성할 .때 유용, 특히 많은 수의 매개변수를 가진 객체를
생성하거나 객체 생성 과정이 복잡할 때 사용, 필요한 필드는 설정하고 나머지
필드는 기본값으로 남겨둘 수 있다. -> int형 필드의 기본값은 0, 객체 참조 필드(String)의
기본값은 null */
 