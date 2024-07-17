package com.surveyProject.project.service.survey.result;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.surveyProject.project.domain.survey.result.Answers;
import com.surveyProject.project.domain.survey.result.Questions;
import com.surveyProject.project.domain.survey.result.ResultRepository;
import com.surveyProject.project.web.dto.result.AnswersDto;
import com.surveyProject.project.web.dto.result.QuestionsDto;
import com.surveyProject.project.web.dto.result.ResultDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ResultServiceImpl implements ResultService{

	private final ResultRepository resultRepository;

	@Override
	public ResultDto getResultByCode(int surveyCode, int code) throws Exception {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("survey_code", surveyCode);
		map.put("code", code);
		
		ResultDto resultDto = new ResultDto();
		resultDto = resultRepository.getResultByCode(map).toDto(); 
		
		List<QuestionsDto> questionsDtos = new ArrayList<QuestionsDto>();
		List<Questions> questions = new ArrayList<Questions>();
		questions = resultRepository.getQuestionsByCode(map);
		
		questions.forEach((question) -> {
			QuestionsDto dto = new QuestionsDto();
			dto = question.toDto();
			
			List<AnswersDto> answersDtos = new ArrayList<AnswersDto>(); 
			List<Answers> answers = new ArrayList<Answers>();
			try {
				answers = resultRepository.getAnswersByCode(question.getQuestion_code());
				answers.forEach(answer -> {
					answersDtos.add(answer.toDto());
				});
				dto.setAnswers(answersDtos);
			} catch (Exception e) {
				e.printStackTrace();
			}
			questionsDtos.add(dto);
		});
		
		resultDto.setQuestions(questionsDtos);
		return resultDto;
	}
}
