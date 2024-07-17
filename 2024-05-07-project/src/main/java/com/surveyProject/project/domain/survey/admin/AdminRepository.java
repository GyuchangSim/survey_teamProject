package com.surveyProject.project.domain.survey.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AdminRepository {
	public List<Company> getCompanyListOfIndex(Map<String, Object> map) throws Exception;
	public List<Survey> getSurveyListOfIndex(Map<String, Object> map) throws Exception;
	public int updateCompanyApproval(int company_code) throws Exception;
	public int deleteCompany(int company_code) throws Exception;
	public int updateSurveyApproval(int survey_code) throws Exception;
	public int deleteSurvey(int survey_code) throws Exception;
}
