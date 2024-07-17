package com.surveyProject.project.domain.survey.survey;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor 
@Builder 
public class SurveyForm {

	
	private LocalDateTime create_date;
	private LocalDateTime update_date; 
	
	private int user_code; //개인이 설문을 신청했을 경우 그 개인의 정보를 가져오기 위해 필요, 여기서 user의 정보는 사용자가 아닌 신청자의 user정보
	private String user_name;
	private String user_birth;
	private int user_gender;
	private String user_nickname;
	
	private int survey_code; //AUTO_INCREMENT
	private String survey_title;
	private String survey_content; // 설문조사 시작 페이지에서 나오는 "제목 없는 설문지" 바로 밑부분에 나오는 설문조사에 대한 설명란에 적을 설명내용
	private int participant_count;
	private int survey_status; // AUTO_INCREMENT, 설문의 상태 -> 완료, 기간만료, 대상자 수 만료, 승인대기중을 나타내는 코드
	private String status_content; // 설문 상태의 내용 -> 완료, 기간만료, 대상자 수 만료, 승인대기중
	//private LocalDateTime create_date;
	//private LocalDateTime update_date; 
	
	private int question_code; //AUTO_INCREMENT
	private String question_title;
	private String question_img;
	private int question_essential; //사용자가 필수로 답해야하는 질문, 필수면 1 아니면 0
	private int select_type; //주관식, 객관식, 체크박스 선택
	private int option_code; //AUTO_INCREMENT
	private String option_content; 
	private String option_img;
	private String detail_question; //꼬리질문
	
	private int answer_code; //AUTO_INCREMENT, 
	private String survey_answer;
	private String survey_answer_short;
	private String survey_answer_long;
	private String detail_answer; //꼬리질문에 대한 사용자의 답변
	
	private int respondent_code; //AUTO_INCREMENT
	
	//toDto메소드 여러개 만들기?
}




/* 데이터는 Controller에서 Service로 이동할 때와 Service에서 Controller로 이동할 때 DTO로 변환되며, 
 Service에서 Repository로 이동할 때와 Repository에서 Service로 이동할 때 엔티티로 변환된다. */
 