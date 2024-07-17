import React, { useState } from 'react'
import './Login.css';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import naver from '../../images/naver.png';
import logo2 from '../../images/logo2.png';
import IndexSignup from './indexSignup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { faJetFighter } from '@fortawesome/free-solid-svg-icons';
// 날짜 : 2024.05.08
// 작성자 : 심규창

export default function LoginCompany() {

  let [email, setEmail] = useState('')
  let [pwd, setPwd] = useState('');

  const onEmail = (e) =>{
    console.log(e.target.value)
    setEmail(e.target.value)
   }

     const onPwd = (e) =>{
    console.log(e.target.value)
    setPwd(e.target.value)
   }

   const handleChange = () => {
    axios.post('/api/v1/auth/logincom',{
      email : email,
      password : pwd,
    })
    .then((response)=>{
      console.log(response.data.data)
   
     


      if(response.data.code === 1){
        alert('로그인이 되었습니다.')
        localStorage.setItem("token", response.data.data.token)
        localStorage.setItem("company_name", response.data.data.company_name)
        localStorage.setItem("company_code", response.data.data.company_code)
      }else{
        alert('이메일 또는 비밀번호를 확인해주세요')
      }
      
      // window.location.replace('http://localhost:3000/')
      //메인페이지로 가기
    }).catch((error)=>{
      console.log(error)
      alert('실패')
    })
   }

   const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      handleChange();
    }
   }

    

  return (

    
    <div className='signin_container'>
      <div className='signin_left'>
        <img className='logo_image' src={logo2}></img>
        {/* <h1 className='logo_title'>설문할래</h1> */}
      </div>
      <div className='signin_right'>
         <div className='signin_box'><img src={logo2}></img><span>로그인 할래?</span></div>
         <div className='signup-linkbox'>
          <Link to={'/auth/login'}  ><button className='signup-link-button'>개인</button></Link>
          <Link to={'/auth/login/com'}><button className='signup-link-button'>단체</button></Link>
         </div>
         <div className='social-box'>
          
            <input className='signin-input' type='email' value={email} placeholder='이메일' onChange={onEmail}/>
            <input className='signin-input' type='password' value={pwd} placeholder='비밀번호 ' onChange={onPwd} onKeyDown={handleKeyPress}/>
            
          <button className='login-btn' type='submit' onClick={handleChange}>로그인 </button>
          
          <div className='google-box'><img className='login_image' src={google}/></div>
          <div className='naver-box'><img className='login_image' src={naver}/></div>
          <div className='facebook-box'><img className='login_image' src={facebook}/></div>
          <a   className='signin-tag'><Link to="/auth/signup/person">회원가입 할래?</Link></a>

          {/* <div className='google-box'><img className='login_image' src={'../google.png'}/><span id='login-text'>google로 계속하기</span></div>
          <div className='naver-box'><img className='login_image' src={'../naver.png'}/><span id='login-text'>naver로 계속하기</span></div>
          <div className='facebook-box'><img className='login_image' src={'../facebook.png'}/><span id='login-text'>facebook로 계속하기</span></div> */}
          
         </div> 
      </div>
      <img className='logo_image-bottom' src={logo2}></img>
      
    

    </div>
  )
}
