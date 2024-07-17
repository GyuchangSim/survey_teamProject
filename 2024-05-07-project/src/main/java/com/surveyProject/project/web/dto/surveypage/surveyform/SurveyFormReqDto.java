package com.surveyProject.project.web.dto.surveypage.surveyform;

import java.time.LocalDateTime;

import com.surveyProject.project.domain.survey.survey.SurveyForm;

import lombok.Data;

@Data
public class SurveyFormReqDto {

	private int surveyCode;
	private int userCode;

	private int participantCount;
	private LocalDateTime createDate; //제출 버튼을 누르면 누른 날짜와 시간이 DB에 기록됨
	private LocalDateTime updateDate; //처음에는 creatDate랑 같은 값이 들어감(now()했을 때)
	
	private int questionCode;
	private int selectType; //주관식, 객관식, 체크박스 선택하는 것
	private int optionCode;
	private String optionContent;
	

	private int answerCode;
	private String surveyAnswer;
	private String surveyAnswerShort;
	private String surveyAnswerLong;
	private String detailQuestion;
	private String detailAnswer;

	
	
	public SurveyForm toEntity() {
	// 설문조사 각 질문에 대한 옵션 코드를 맵으로 받고 맵들을 모아 리스트로 받는게 맞는 것 같은데 밑처럼 이렇게 코드를 짜는게 맞나? 아니면 밑의 메소드를 질문의 수(question_code) 만큼 받아야 할 것 같은데 아닌가?
	// Bing참고 - 별도의 질문Dto와 답변Dto를 별도로 만들어 관리 / left outer join해서 한 Dto로 관리
		
		return SurveyForm.builder()
				.survey_code(surveyCode)
				.user_code(userCode)
				.participant_count(participantCount)
				.create_date(createDate)
				.update_date(updateDate)
				.question_code(questionCode)
				.select_type(selectType)
				.option_code(optionCode)
				.option_content(optionContent)
				.answer_code(answerCode)
				.survey_answer(surveyAnswer)
				.survey_answer_short(surveyAnswerShort)
				.survey_answer_long(surveyAnswerLong)
				.detail_question(detailQuestion)
				.detail_answer(detailAnswer)
				.build();
	
	
	}
}


/* builder()의 .survey_code(surveyCode)에서 survey_code는 Survey클래스의 필드이고 surveyCode는 
 *  Dto클래스의 필드이다. 따라서 Dto클래스의 필드값은 Survey객체의 survey_code필드에 설정된다. 
 *  즉, .survey_code(surveyCode)는 Survey객체의 survey_code필드를 surveyCode값으로 설정하는 것을
 *  의미한다. 이렇게 하면 클라이언트로부터 받은 데이터가 Survey 객체에 올바르게 설정된다. */

