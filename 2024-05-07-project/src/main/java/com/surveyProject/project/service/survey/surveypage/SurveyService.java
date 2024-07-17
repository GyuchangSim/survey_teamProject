//2024.05.24 김예찬
//ex. 필터를 클릭하는 것에 대한 로직을 짜기, Dto -> Entity형식으로 바꿔주는 로직 
package com.surveyProject.project.service.survey.surveypage;

import java.util.List;
import java.util.Map;

import com.surveyProject.project.domain.survey.survey.SurveyInformation;
import com.surveyProject.project.domain.survey.survey.SurveyList;
import com.surveyProject.project.domain.survey.survey.SurveyStartComplete;
import com.surveyProject.project.web.dto.surveypage.surveyCompleteDto;
import com.surveyProject.project.web.dto.surveypage.SurveyStartRespDto;
import com.surveyProject.project.web.dto.surveypage.surveylist.*;
import com.surveyProject.project.web.dto.surveypage.surveystartcomplete.SurveyStartCompleteDto;


public interface SurveyService {
	
	public List<SurveySearchListResDto> getSearchList(String word) throws Exception;

	
	public List<SurveyListRespDto> checkFilterAndGetSurveyListS(int page, int contentCount, String surveyClass, List<Integer> selectedCategories, List<String> selectedGenders, List<String> selectedAges) throws Exception;
	
	
	/*단체 설문조사 목록 페이지에서 목록 중 하나를 클릭했을 때
	 올바른 코드를 입력했을 경우에는 단체 설문조사 시작 페이지로
	 넘어가지만 올바르지 않은 코드를 입력한 후 입력 버튼을
	 누를 경우 "코드가 틀립니다. 다시 입력해주세요"라는 문구를
	 모달창 내에 띄우기, 입력 버튼을 누르지 않고 키보드의 Enter
	 키를 눌러도 입력 버튼을 누른 것처럼 만들기*/
	public List<SurveyStartCompleteDto> checkSurveyPasswordAndTargetAndSurveyStartS(String surveyPassword, int surveyCode, int userCode) throws Exception;
	//설문조사 Start 페이지(get) : 개인,단체 설문조사 start 페이지에 DB에서 관련 데이터를 가져오는 메소드 
 
	public surveyCompleteDto surveyComplete(int surveyCode) throws Exception; //지영
	public boolean updateSurveyComplete(int surveyCode, int userCode, int money) throws Exception;
	
	//설문조사 Complete 페이지(get) : 개인,단체 설문조사 Complete 페이지에 DB에서 관련 데이터를 가져오는 메소드 - 지영 수정	
	

	/*모달창: (디자인 가운데로 수정)사용자가 참여한 설문조사와
	대상자가 아닌 설문조사와 조사 대상자 수가 만료된 설문조사에 대해 
	각각 알맞게 모달창 띄우기, ------> 모달창 하나 추가해야함("이미 마감된 설문조사입니다") 
	참여하지 않은 설문조사인 경우 설문조사 시작 페이지로 넘어가게 하기*/
	

	//설문조사 디테일 페이지
	public SurveyDetailResDto getSurveyDetail(int surveyCode) throws Exception;

	//메인페이지 설문조사 띄우기
	public List<TopSurveyResDto> getTopSurvey();

	//설문조사 전부 띄우기
    List<SurveyListRespDto> getSurveyList() throws Exception;

    List<SurveyListRespDto> getSurveyGroupList() throws Exception;	
	
	
	/* form 페이지 */
	
	
	
	/*설문complete 페이지에서 확인 버튼을 누르면
	 설문조사 메인페이지로 가게 둘다 수정 -> 리액트에서 수정*/
	
	
    //survey personal Start페이지(소윤)
    public SurveyStartRespDto getSurveyStart(int surveyCode) throws Exception;
    
    //survey group Start페이지(소윤)
    public SurveyStartRespDto getSurveyGroupStart(int surveyCode) throws Exception;

    SurveyListRespDto getGroupPwd(int surveyCode) throws Exception;
}


/* 서비스 계층에서는 주로 비즈니스 로직을 수행하는
메서드를 구현하게 된다. 이는 도메인 모델을 사용하여 
데이터를 처리하고, 데이터베이스와의 상호작용을 관리하는 등의 
작업을 포함한다. */

//자료형은 Dto형식으로 리턴
