package com.surveyProject.project.service.survey.admin;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import com.surveyProject.project.domain.survey.admin.Company;
import com.surveyProject.project.domain.survey.admin.Survey;
import com.surveyProject.project.domain.survey.admin.AdminRepository;
import com.surveyProject.project.web.dto.admin.ReadCompanyDto;
import com.surveyProject.project.web.dto.admin.ReadSurveyDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService{
	
	private final AdminRepository adminRepository;

	@Override
	public List<ReadCompanyDto> getCompanyList(int page, int contentCount) throws Exception {

		HashMap<String, Object> pagecode = new HashMap<String, Object>();
		pagecode.put("index", (page - 1)*contentCount);
		pagecode.put("count", contentCount);
		
		List<Company> companyList = adminRepository.getCompanyListOfIndex(pagecode);
		List<ReadCompanyDto> companyListRespDto = new ArrayList<ReadCompanyDto>();
		companyList.forEach(company -> {
			companyListRespDto.add(company.toCompanyDto());
		});
		
		return companyListRespDto;
	}

	@Override
	public List<ReadSurveyDto> getSurveyList(int page, int contentCount) throws Exception {
		
		HashMap<String, Object> pagecode = new HashMap<String, Object>();
		pagecode.put("index", (page - 1)*contentCount);
		pagecode.put("count", contentCount);
		
		List<Survey> surveyList = adminRepository.getSurveyListOfIndex(pagecode);
		List<ReadSurveyDto> readSurveyDto = new ArrayList<ReadSurveyDto>();
		surveyList.forEach(survey -> {
			readSurveyDto.add(survey.toSurveyDto());
		});
		
		return readSurveyDto;
	}

	@Override
	public boolean updateCompanyApproval(int companyCode) throws Exception {
		return adminRepository.updateCompanyApproval(companyCode) > 0;
	}

	@Override
	public boolean deleteCompany(int companyCode) throws Exception {
		return adminRepository.deleteCompany(companyCode) > 0;
	}

	@Override
	public boolean updateSurveyApproval(int surveyCode) throws Exception {
		return adminRepository.updateSurveyApproval(surveyCode) > 0;
	}

	@Override
	public boolean deleteSurvey(int surveyCode) throws Exception {
		return adminRepository.deleteSurvey(surveyCode) > 0;
	}

}
