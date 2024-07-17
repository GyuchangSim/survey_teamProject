package com.surveyProject.project.service.survey.pay;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.surveyProject.project.web.dto.pay.KakaoApproveResponse;
import com.surveyProject.project.web.dto.pay.KakaoCancelResponse;
import com.surveyProject.project.web.dto.pay.KakaoReadyResponse;
import com.surveyProject.project.web.dto.pay.PaymentDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class KakaoPayService {

	static final String cid = "TC0ONETIME"; // 가맹점 테스트 코드
    static final String admin_Key = "DEV6B8D8F9A06BD326F8275B37D9AD01681B3FAD"; // 공개 조심! 본인 애플리케이션의 어드민 키를 넣어주세요
    private KakaoReadyResponse kakaoReady;
    
    public KakaoReadyResponse kakaoPayReady(PaymentDto paymentDto) {

         // 카카오페이 요청 양식
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("cid", cid);
        parameters.put("partner_order_id", "partner_order_id");
        parameters.put("partner_user_id", "partner_user_id");
        parameters.put("item_name", paymentDto.getSurveyTitle());
        parameters.put("quantity", 1);
        parameters.put("total_amount", (paymentDto.getParticipantMax() * paymentDto.getSurveyPerMoney()));
        //parameters.put("vat_amount", null);
        parameters.put("tax_free_amount", 0);
        parameters.put("approval_url", "http://localhost:3000/payment/success"); // 성공 시 redirect url
        parameters.put("cancel_url", "http://localhost:8000/payment/cancel"); // 취소 시 redirect url
        parameters.put("fail_url", "http://localhost:8000/payment/fail"); // 실패 시 redirect url
        
        System.out.println(parameters);
        
        // 파라미터, 헤더
        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<Map<String, Object>>(parameters, this.getHeaders());
                
        // 외부에 보낼 url
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://open-api.kakaopay.com/online/v1/payment/ready";
        
        kakaoReady = restTemplate.postForObject(
        		url,
                requestEntity,
                KakaoReadyResponse.class);
                        
        return kakaoReady;
    }
    
    /**
     * 결제 완료 승인
     */
    public KakaoApproveResponse ApproveResponse(String pgToken) {
    
        // 카카오 요청
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("cid", cid);
        parameters.put("tid", kakaoReady.getTid());
        parameters.put("partner_order_id", "partner_order_id");
        parameters.put("partner_user_id", "partner_user_id");
        parameters.put("pg_token", pgToken);

        // 파라미터, 헤더
        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<Map<String, Object>>(parameters, this.getHeaders());
        
        // 외부에 보낼 url
        RestTemplate restTemplate = new RestTemplate();
        
        KakaoApproveResponse approveResponse = restTemplate.postForObject(
                "https://open-api.kakaopay.com/online/v1/payment/approve",
                requestEntity,
                KakaoApproveResponse.class);
                
        return approveResponse;
    }
    
    /**
     * 결제 환불
     */
     public KakaoCancelResponse kakaoCancel() {

         // 카카오페이 요청
    	 Map<String, Object> parameters = new HashMap<>();
         parameters.put("cid", cid);
         parameters.put("tid", "환불할 결제 고유 번호");
         parameters.put("cancel_amount", "환불 금액");
         parameters.put("cancel_tax_free_amount", "환불 비과세 금액");
         parameters.put("cancel_vat_amount", "환불 부가세");

         // 파라미터, 헤더
         HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<Map<String, Object>>(parameters, this.getHeaders());
     
         // 외부에 보낼 url
         RestTemplate restTemplate = new RestTemplate();
     
         KakaoCancelResponse cancelResponse = restTemplate.postForObject(
                 "https://open-api.kakaopay.com/online/v1/payment/cancel",
                 requestEntity,
                 KakaoCancelResponse.class);
                 
         return cancelResponse;
     }
    
    /**
     * 카카오 요구 헤더값
     */
    private HttpHeaders getHeaders() {
        HttpHeaders httpHeaders = new HttpHeaders();

        String auth = "DEV_SECRET_KEY " + admin_Key;

        httpHeaders.set("Authorization", auth);
        httpHeaders.set("Content-type", "application/json");

        return httpHeaders;
    }
    
}
