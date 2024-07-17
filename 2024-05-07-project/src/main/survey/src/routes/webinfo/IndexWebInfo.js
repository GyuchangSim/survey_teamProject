//2024/05/09 최소윤
//웹사이트 소개

import './IndexWebInfo.css'
import Logo from './../../images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import SurveyInfoBox from './../../components/SurveyInfoBox';



export default function IndexWebInfo() {
  return (
      <div className='container'>
        <div className='surveyBox-web'>
          <div className='infoBox-web'>
          <FontAwesomeIcon icon={faHouse} size='lg' className='houseImg-web'/>
          </div>
          <div className='infoBox-web'><span>안내</span></div>
          <div className='infoBox-web'><span>웹사이트 소개</span></div>
        </div>
        <main>
          <SurveyInfoBox />
          <div className='web-info-main'>
            <div className='web-info-main-top'>
              <div className='web-info-main-top-left'>
              <span className='web-info-main-text'>웹사이트 소개</span>
              </div>
              <div className='web-info-main-top-right'>
                <img src={Logo} alt='Logo' />
                <span className='web-info-main-text'>설문할래</span>
              </div>
            </div>
            <div className='web-info-main-main'>
              <div>
              <p>당신의 의견을 듣고,중요한 결정을 내리는데 도움을 줄 수 있는 최적의 설문조사 플랫폼입니다</p>
              <p>저희의 웹사이트는 개인과 단체 모두를 위한 설문조사를 쉽고 효과적으로 만들고 관리할 수 있도록 다양한 기능을 제공합니다</p>
              </div>
              <div>
                <h3>주요기능</h3>
                <p>1. 다양한 설문조사 옵션: 최대 5개까지 다양한 응답 옵션을 제공하여, 보다 풍부한 데이터를 수집할 수 있습니다.</p>
                <p>2. 맞춤형 질문 설정: 최대 20개까지 질문을 추가하여, 원하는 정보를 상세하게 얻을 수 있습니다.</p>
                <p>3. 다양한 응답 형식:</p>
                <p>- 체크박스를 통해 중복 답변을 허용하여 다양한 의견을 반영할 수 있습니다.</p>
                <p>- 단답형 질문은 중복 답변을 허용하지 않아 명확한 정보를 얻을 수 있습니다.</p>
              </div>
              <div>
                <h3>보안 및 참여제한</h3>  
                <p>• 비밀번호 보호: 단체 설문조사는 비밀번호로 보호되어 있어, 승인된 사용자만 접근할 수 있습니다.</p>
                <p>• 참여 제한:</p>
                <p>- 개인 설문조사: 특정 성별, 연령 등 조건에 맞지 않거나 이미 참여한 경우 참여가 제한됩니다.</p>
                <p>- 단체 설문조사: 정확한 코드 입력이 필요한 단체 대상 설문조사는 지정된 대상자만 참여할 수 있습니다.</p>
              </div>
              <div>
                <h3>맞춤형 설문조사 제공</h3>
                <p>• 일반 소비자 의견 조사: 다양한 소비자의 의견을 효과적으로 수집할 수 있습니다.</p>
                <p>• 카테고리별 설문조사: 특정 주제나 분야에 대한 심도 있는 조사를 진행할 수 있습니다.</p>
                <p>• 단체 대상 설문조사: 기업, 학교, 동호회 등 다양한 단체를 대상으로 한 맞춤형 설문조사를 쉽게 생성할 수 있습니다.</p>
              </div>
              <div>
                <p>저희 설문조사 웹사이트는 간편하면서도 강력한 기능을 제공하여, 여러분이 필요한 데이터를 효과적으로 수집할 수 있도록 도와드립니다.</p>
                <p>지금 바로 저희 웹사이트를 통해 설문조사를 시작하고, 귀중한 인사이트를 얻어보세요!</p>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}
