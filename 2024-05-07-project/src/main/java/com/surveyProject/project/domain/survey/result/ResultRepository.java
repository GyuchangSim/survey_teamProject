package com.surveyProject.project.domain.survey.result;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.surveyProject.project.domain.survey.result.Questions;
import com.surveyProject.project.domain.survey.result.Answers;



@Mapper
public interface ResultRepository {

	public Result getResultByCode(Map<String, Object> map) throws Exception;
	public List<Questions> getQuestionsByCode(Map<String, Object> map) throws Exception;
	public List<Answers> getAnswersByCode(int question_code) throws Exception;
}
