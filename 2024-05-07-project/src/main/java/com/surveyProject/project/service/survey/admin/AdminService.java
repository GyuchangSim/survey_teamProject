package com.surveyProject.project.service.survey.admin;

import java.util.List;

import com.surveyProject.project.web.dto.admin.ReadCompanyDto;
import com.surveyProject.project.web.dto.admin.ReadSurveyDto;

public interface AdminService {

	public List<ReadCompanyDto> getCompanyList(int page, int contentCount) throws Exception;
	public List<ReadSurveyDto> getSurveyList(int page, int contentCount) throws Exception;
	public boolean updateCompanyApproval(int companyCode) throws Exception;
	public boolean deleteCompany(int companyCode) throws Exception;
	public boolean updateSurveyApproval(int surveyCode) throws Exception;
	public boolean deleteSurvey(int surveyCode) throws Exception;
	
}
