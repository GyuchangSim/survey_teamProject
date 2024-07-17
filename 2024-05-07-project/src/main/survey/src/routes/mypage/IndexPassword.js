import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import userImage from '../../images/userImg.jpg'
import P from '../../images/P.png'
import { Link, useLocation } from 'react-router-dom'
import Axios from 'axios'

export default function IndexPassword() {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userCode, setUserCode] = useState(localStorage.getItem('user_code'));

  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [checkPw, setCheckPw] = useState("");

  const {state} = useLocation();

  const changePasswordHandler = () => {
    if(newPw === checkPw){
      Axios.put('/mypage/password', {
        userCode: userCode,
        originPW: currentPw,
        newPW: newPw
      }, {
        headers: {
          'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
        }
      })
      .then((response) => {
        console.log(response);
        window.location.href = "http://localhost:3000/mypage";
      })
      .catch((err) => {
        console.log(err);
        alert("현재 비밀번호가 일치하지 않습니다.")
      })
    } else {
      alert("신규 비밀번호가 일치하게 입력해주세요.")
    }
  }

  return (
    <div className='surveyMypage_container'>
        <div className='surveyBox_mypage'>
          <div className='infoBox_mypage'>
          <FontAwesomeIcon icon={faHouse} size='lg' className='houseImg_mypage'/>
          </div>
          <div className='infoBox_mypage' style={{
            width: '300px'
          }}><span style={{
            fontSize: '20px'
          }}>마이페이지(회원정보 수정)</span></div>
        </div>
        <div className='infoFrame'>
          <div className='leftBox'>
            <div className='profileImg'>
              <img src={userImage} alt='userImg' style={{ cursor: 'pointer' }} />
            </div>
            <div className='changePoints'>
              <img src={P} alt='Point'/>
              <h4 style={{
                fontSize: '16px'
              }}>{state.userMoney}</h4>
            </div>
          </div>
          <div className='rightBox' style={{ display: 'flex'}}>
            <div className='userInfo'>
              <h4>기존 비밀번호: <input type='password' value={currentPw}placeholder='기존 비밀번호를 입력해주세요.' onChange={(e) => setCurrentPw(e.target.value)} style={{
                width: '320px'
              }}/></h4>
              <h4>신규 비밀번호: <input type='password' value={newPw}placeholder='신규 비밀번호를 입력해주세요.' onChange={(e) => setNewPw(e.target.value)} style={{
                width: '320px'
              }}/></h4>
              <h4>비밀번호 확인: <input type='password' value={checkPw} placeholder='신규 비밀번호를 한번 더 입력해주세요.' onChange={(e) => setCheckPw(e.target.value)} style={{
                width: '320px'
              }}/></h4>
            </div>
            <div className='buttons' style={{
              marginLeft: '5px',
              justifyContent: 'end'
            }}>
              <button className='blueButton' onClick={changePasswordHandler}>
                비밀번호 수정 완료
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}
