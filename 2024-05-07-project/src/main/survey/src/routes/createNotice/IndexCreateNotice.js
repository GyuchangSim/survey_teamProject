// 2024.5.16 최소윤
//공지사항 작성
//2024.5.28 axios 요청

import React, { useState } from 'react'
import './IndexCreateNotice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import Logo from './../../images/Logo.png';
import { Link } from 'react-router-dom';
import CustomerSurviceBox from '../../components/CustomerSurviceBox';
import axios from 'axios';

export default function IndexCreateNotice() {

  const [noticeTitle,setNoticeTitle] = useState('');
  const [noticeContent,setNoticeContent] = useState('');
  const [token,setToken] = useState(localStorage.getItem('token'));
  const [userCode, setUserCode] = useState(localStorage.getItem('user_code'));

  const savenoticeTitle = (e) => {
    setNoticeTitle(e.target.value);
  }

  const savenoticeContent = (e) => {
    setNoticeContent(e.target.value);
  }

  const CreateNotice = () => {
    axios.post('/api/v1/survey/notice/create',{
      userCode : userCode,
      noticeTitle : noticeTitle,
      noticeContent : noticeContent},
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
      .then((response) => {
        console.log(response);
        alert('작성되었습니다');
      })
      .catch((error) => {
        console.log(error);
      })
  }
    
  
  return (
    <div className='container'>
        <div className='surveyBox-create'>
          <div className='infoBox-create'>
          <FontAwesomeIcon icon={faHouse} size='lg' className='houseImg-create'/>
          </div>
          <div className='infoBox-create'><span>고객센터</span></div>
          <div className='infoBox-create'><span>공지사항</span></div>
        </div>
        <main>
          <CustomerSurviceBox />
          <div className='notice-create-main'>
            <div className='notice-create-main-top'>
              <div className='notice-create-main-top-left'>
              <span className='notice-create-text'>공지사항</span>
              </div>
              <div className='notice-create-main-top-right'>
                <img src={Logo} alt='Logo' />
                <span className='notice-create-text'>설문할래</span>
              </div>
            </div>
            <div className='notice-create-main-main'>
                  <div className='notice-create'>
                    <div className='notice-create-title' onChange={savenoticeTitle}>
                      <input type='text' placeholder='제목을 입력하세요'></input>
                    </div>
                    <div className='notice-create-content' onChange={savenoticeContent}>
                      <textarea placeholder='내용을 입력하세요'></textarea>
                    </div>
                  </div>
                  <div className='notice-create-buttons'>
                    {
                      <Link to={'/notice'}>
                        <button type='button' className='create-cancle-button'>작성 취소</button>
                      </Link>
                    }
                    {
                      <Link to={'/notice'}>
                        <button type='button' className='create-complete-button' onClick={CreateNotice}>작성 완료</button>
                      </Link>
                    }
                  </div>
            </div>
          </div>
        </main>
    </div>
  )
}
