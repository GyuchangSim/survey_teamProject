
	package com.surveyProject.project.domain.survey.survey;

	import java.util.HashMap;
import java.util.List;
	import java.util.Map;

	import com.surveyProject.project.web.dto.surveypage.surveylist.SurveyDetailResDto;
	import com.surveyProject.project.web.dto.surveypage.surveylist.SurveyListRespDto;
	import com.surveyProject.project.web.dto.surveypage.surveylist.TopSurveyResDto;
	import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.surveyProject.project.web.dto.surveypage.surveyform.SurveyFormReqDto;


	@Mapper
	public interface SurveyRepository {
		/* 2024.05.27 월 김예찬 */
		
		
		//0설문조사 개인, 단체 목록 페이지(get) : 개인,단체 설문조사 list 페이지에 DB에서 각 설문조사 목록에 들어갈 데이터들을 가져오는 메소드
		//설문조사 개인 목록 페이지 - 필터링 : 설문조사 개인 목록 페이지에서 필터에 있는 체크박스들을 누르면 필터링된 설문조사 목록만 화면에 보이게 하기위한 메소드
		public List<SurveyList> checkFilterAndGetSurveyListR(Map<String, Object> params) throws Exception;
		
		
		//0설문조사 단체 목록 페이지(post) - 단체 코드 확인 : 단체 설문조사 목록 페이지에서 하나를 클릭했을 경우 코드를 입력 후 올바른지 아닌지 확인하는 메소드
 		//설문조사 목록 페이지에서 설문조사를 하나 눌렀을 때 조사 대상의 조건인 연령대 또는 성별과 맞지 않을 경우 "대상자가 아닙니다" 모달창을 띄우기 위한 메소드
		public List<SurveyStartComplete> checkSurveyPasswordAndTargetAndSurveyStartR(Map<String, Object> map) throws Exception;
		
		
		
		
		
		
		
		
		//설문조사 Form 페이지(get) : (개인,단체) 해당 설문조사에 대한 내용을 DB에서 가져오는 메소드
		public List<SurveyForm> getSurveyFormR(Map<String, Object> map) throws Exception;
		
		//설문조사 Form 페이지(post) : (개인,단체)사용자가 필수문항(질문)에 대해 답변을 하지 못했을 경우 답변을 하지 않은 문항에 대하여 답변해달라는 문구를 추가로 띄우는 메소드 - 필수인 질문에 답변을 다 했을 경우 true, 아니면 false로 해서 리액트에서 true이면 아무것도 안뜨고 false이면 문구를 화면에 띄우기
		public boolean checkEssentialR(SurveyFormReqDto surveyFormReqDto) throws Exception; // -> 화면을 RespDto로 받아올 때 checkEssential도 같이 받아와서 화면에서 확인? / DB의 저장되어 있는 checkEssential과 비교?
		
		//설문조사 Form 페이지(post) : (개인,단체)사용자가 입력한 설문조사 답변들을 DB에 넣는 메소드 
		public List<SurveyForm> postSurveyFormR(Map<String, Object> map) throws Exception;
		//map: int userCode, int surveyCode
		

		
		
		
		
		
		//매개변수를 쓰지 않고 DB에 가서 직접 확인하기 보다는 필요한 매개변수만 써서 메소드를 만드는 것이 성능에 더 효율적
		/*String today = LocalDate.now().toString();
	    이후 로직은 DB의 survey_period_stop과 today를 비교하는 방식으로 진행
	    위의 코드에서 LocalDate.now().toString()을 사용하여 오늘의 날짜를 얻는다.
	    이렇게 하면, updateSurveyStatus 메소드를 호출할 때마다 
	    항상 현재 날짜를 기준으로 설문조사의 상태를 업데이트하게 된다. 
	    이 방법은 설문조사가 실시간으로 업데이트되어야 하는 경우에 특히 유용하다.
		그러나 이 방법을 사용하려면, DB의 survey_period_stop 필드가 날짜 형식(yyyy-mm-dd)으로 
		저장되어 있어야 한다. 그렇지 않으면, today와 survey_period_stop을 비교하는 데 
		문제가 발생할 수 있다. */
		

		public SurveyComplete SurveyComplete(int survey_code) throws Exception;  //지영
		public int updateSurveyCompleteSurvey(int survey_code) throws Exception;
		public int updateSurveyCompleteUser(Map<String, Object> map) throws Exception;
		public int updateSurveyCompleteRespondent(Map<String, Object> map) throws Exception;

		//설문조사 Complete 페이지(get) : 개인,단체 설문조사 complete 페이지로 DB에서 관련 데이터를 각각 가져와 화면에 정보를 띄워주기 위한 메소드
//		public List<SurveyStartComplete> getSurveyCompleteR(int survey_code) throws Exception; 

		/* update */
		//0설문조사 Complete 페이지(post) : 개인, 단체 설문조사 complete 페이지의 완료버튼을 누르면 survey_respondent 테이블에 정보가 추가되는 메소드
//		public boolean postSurveyCompleteDataR(Map<String, Object> map) throws Exception;
		//int user_code와 int survey_code가 매개변수
		
		//0설문조사 Complete 페이지(put) : 사용자가 설문조사를 완료할 때마다 해당 설문조사의 DB에 participant_count가 1씩 증가하는 메소드
//		public boolean updateParticipantCountR(int survey_code) throws Exception;
		//설문조사의 participant_count를 1 증가시킨 후 xml파일의 해당하는 쿼리가 실행된 후 영향을 받은 레코드의 수가 반환됨

		//0설문조사 Complete 페이지(put) : 개인 설문조사 complete 페이지에 사용자가 보유한 적립금에 완료한 설문조사에 해당하는 적립금인 survey_per_money를 더하는 메소드
//		public boolean updateMoneyR(Map<String, Object> map) throws Exception;
		//int user_code와 int survey_per_money가 매개변수

		//0설문조사 status 업데이트(put) : 개인,단체 설문조사 list 페이지에서 이미 참여했거나 / 기간이 만료되거나 / 대상자수가 만료된 설문조사에 대해 survey_status를 업데이트하고 알맞는 모달창을 띄워주는 메소드 
		public boolean updateSurveyStatusR(int survey_code) throws Exception;
		/* update */		
		
		//검색기능
		public List<SurveyInformation> getSearchList(Map<String, Object> map) throws Exception;

		//설문조사 디테일
		public SurveyInformation getSurveyDetailTitle(Map<String, Object> map) throws Exception;
		public List<SurveyInformation> getSurveyDetailQuestion(Map<String, Object> map) throws Exception;
		public List<SurveyInformation> getSurveyDetailOption(int question_code) throws Exception;

		//메인페이지 인기 설문
		public List<TopSurveyResDto> getTopSurvey();

		//메인페이지 설문조사 띄우기
        public List<SurveyList> getSurveyList() throws Exception;

		public List<SurveyList> getCategorySurveyList(int categoryCode) throws Exception;

        public List<SurveyList> getSurveyGroupList() throws Exception;
        
        //surveyStart개인 페이지(소윤)
        public SurveyList getSurveyStart(int survey_code) throws Exception;
        
        //surveyStart단체 페이지(소윤)
        public SurveyList getSurveyGroupStart(int survey_code) throws Exception;

        SurveyList getGroupPwd(int surveyCode) throws Exception;
    }

	
	
	/* @Mapper는 SQL쿼리를 호출하기 위한 메소드를 선언한 인터페이스를 
	MyBatis가 구현체로 자동생성해주기 때문에 SQL쿼리를 
	자바에서 직접 작성하지 않고 인터페이스를 통해 간결하게 
	데이터베이스 작업이 수행 가능 */

	/*Entity객체를 보관하는 저장소, Entity 자체를 저장하고 불러오는
	역할로 객체(Entity)에 대한 CRUD를 수행할 수 있으면 된다. 따라서
	일반적으로는 Repository의 인터페이스를 도메인 로직에 넣어둔다.*/
	//Entity는 실제 DB의 테이블과 매칭될 클래스
	//Repository는 백엔드 개발에서 데이터베이스와 직접적으로 상호작용하는 역할
	/*Repository는 데이터베이스의 테이블에 대응하는 도메인 모델의 CRUD연산을
	수행하는 메소드를 제공하며 이 메소드들은 데이터베이스의 특정 테이블에 대한
	쿼리를 실행하고, 그 결과를 도메인 모델의 인스턴스로 변환하여 반환함*/

