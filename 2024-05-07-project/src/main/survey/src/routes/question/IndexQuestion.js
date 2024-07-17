//2024.5.10 최소윤
//2024.5.17 map부분 
//자주 묻는 질문

import React, { useState } from 'react';
import './IndexQuestion.css';
import Logo from './../../images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, faHouse} from '@fortawesome/free-solid-svg-icons';
import CustomerSurviceBox from '../../components/CustomerSurviceBox';

export default function IndexQuestion() {

  const QUESTION = [
    { id : 1, qustion : '회원탈퇴는 어디서 진행하나요?', answer : '회원탈퇴는 마이페이지에서 가능합니다', status: false},
    { id : 2, qustion : '포인트는 얼마부터 현금으로 출금이 가능한가요?', answer : '5000원부터 가능합니다', status: false},
    { id : 3, qustion : '설문조사 당 포인트의 기준은 무엇인가요?', answer : '설문신청을 한 사람이 설정한 포인트입니다', status: false},
    { id : 4, qustion : '사이트의 정기점검 시간은 언제인가요?', answer : '1:00 ~ 2:00 입니다', status: false},
    { id : 5, qustion : '기업이 아닌 개인도 설문 의뢰가 가능한가요?', answer : '네 가능합니다', status: false},
    { id : 6, qustion : '적립금 교환 후 계좌이체 기간은 얼마가 소요되나요?', answer : '점검시간이 아니라면 바로 이체됩니다', status: false},
    { id : 7, qustion : '하루에 할 수 있는 설문의 수가 정해져 있나요?', answer : '아니요 정해져 있지 않습니다', status: false},
    { id : 8, qustion : '고객센터 1:1문의할 수 있는 메일이나 연락처가 있나요?', answer : 'jiyoung@gmail.com로 문의부탁드립니다', status: false}
  ];

  const [questions, setQuestions] = useState(QUESTION);

  const onQuestionClickHandler = (index) => {
    const newQuestions = questions.map((item, itemIndex) => {
      if (itemIndex === index) item.status = !item.status
      return item;
    });
    setQuestions(newQuestions);
  }

  return (
      <div className='container'>
        <div className='surveyBox-question'>
          <div className='infoBox-question'>
          <FontAwesomeIcon icon={faHouse} size='lg' className='houseImg-question'/>
          </div>
          <div className='infoBox-question'><span>고객센터</span></div>
          <div className='infoBox-question'><span>자주묻는 질문</span></div>
        </div>
        <main>
          <CustomerSurviceBox />
          <div className='question-box'>
            <div className='question-box-top'>
              <div className='question-box-top-left'>
              <span className='question-box-text'>자주 묻는 질문</span>
              </div>
              <div className='question-box-top-right'>
                <img src={Logo} alt='Logo' />
                <span  className='question-box-text'>설문할래</span>
              </div>
            </div>
            <div className='question-main'>
              {
                questions.map((question,i) => {
                  return(
                  <div key={i} className='question'>
                    <FontAwesomeIcon onClick={() => onQuestionClickHandler(i)} icon={faCircleArrowRight} style={{verticalAlign : 'sub'}}/>
                    <span>{question.qustion}</span>
                    {question.status  &&  <div className='answer'><span>-{question.answer}</span></div>}
                  </div>
                  )})
              }
            </div>
          </div>
        </main>
      </div>
  )
}