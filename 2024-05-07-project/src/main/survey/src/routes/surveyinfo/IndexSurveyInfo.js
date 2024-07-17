//2024.05.09 최소윤
//설문조사 안내

import React from 'react';
import './IndexSurveyInfo.css';
import Logo from './../../images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import SurveyInfoBox from '../../components/SurveyInfoBox';


export default function IndexSurveyInfo() {
  return (
      <div className='container'>
        <div className='surveyBox-surveyinfo'>
          <div className='infoBox-surveyinfo'>
          <FontAwesomeIcon icon={faHouse} size='lg' className='houseImg-surveyinfo'/>
          </div>
          <div className='infoBox-surveyinfo'><span>안내</span></div>
          <div className='infoBox-surveyinfo'><span>설문조사 안내</span></div>
        </div>
        <main>
         <SurveyInfoBox />
          <div className='survey-info-main'>
            <div className='survey-info-main-top'>
              <div className='survey-info-main-top-left'>
              <span className='servey-info-main-text'>설문조사 안내</span>
              </div>
              <div className='survey-info-main-top-right'>
                <img src={Logo} alt='Logo' />
                <span className='servey-info-main-text'>설문할래</span>
              </div>
            </div>
            <div className='survey-info-main-main'>
                <div className='survey-info-category'>
                  <h2>설문조사의 종류</h2>
                  <p>1. 일반 소비자들의 의견을 알아보는 설문조사입니다.</p>
                  <p>2. 카테고리가 명확한 설문조사입니다.</p>
                  <p>3. 기업 및 회사,학교,동호회, 그 외 단체를 대상으로 한 설문조사입니다.참여하기 위한 비밀번호가 필요합니다.</p>
                </div>
                <div className='survey-info-precautions'>
                  <h2>설문 신청</h2>
                  <p>1. 저희 페이지는 옵션을 5개까지 제공합니다</p>
                  <p>2. 질문은 20개까지 신청가능합니다</p>
                  <p>3. 체크박스는 중복답변을 허용하고 단답형은 중복답변을 허용하지 않습니다</p>
                </div>
                <div className='survey-info-survey'>
                  <h2>설문 조사</h2>
                  <p>1. 설문조사(개인)은 이미 참여했거나 성별,연령등의 대상자가 아닌경우 참여할 수 없습니다</p>
                  <p>2.설문조사(단체)는 입력한 코드가 맞지 않으면 참여할 수 없습니다</p>
                </div>
            </div>
          </div>
        </main>
      </div>
  )
}
