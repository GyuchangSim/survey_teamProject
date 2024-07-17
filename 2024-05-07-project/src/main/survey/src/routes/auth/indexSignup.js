// 파일 이름 변경
import './indexSignup.css';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import naver from '../../images/naver.png';
import logo2 from '../../images/logo2.png';
import React, { useEffect, useRef, useState } from 'react';
// import Axios from 'axios';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { Link } from 'react-router-dom';

// 날짜 : 2024.05.08
// 작성자 : 심규창

export default function IndexSignup() {
//초기값 세팅
  let[email, setEmail] = useState('');
let[pwd, setPwd] = useState('');
let[name, setName] = useState('');
let [nickname, setNickname] = useState('')
let [gender, setGender] = useState(0);
let [role, setRole] = useState('');
let [rank, setRank] = useState('')
let [birth, setBirth] = useState('');



 // 오류메세지 상태 저장
 const [emailMessage, setEmailMessage] = React.useState("");
 const [passwordMessage, setPasswordMessage] = React.useState("");

//유효성 검사

const [isEmail, setIsEmail] = React.useState(false);
const [isPassword, setIsPassword] = React.useState(false);

const onEmail = (e) =>{
  console.log(e.target.value)
  const currentEmail = e.target.value;
  setEmail(currentEmail)
  const emailRegExp =
     /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
     if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false);
    } else {
      setEmailMessage("사용 가능한 이메일 입니다.");
      setIsEmail(true);
    }
  };
 

   const onPwd = (e) =>{
    const currentPassword = e.target.value;
      setPwd(currentPassword);

      const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자 이상 \n입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
 }
 
 const onName = (e) =>{
  console.log(e.target.value)
  setName(e.target.value)
 }

 const onNickname = (e) =>{
  console.log(e.target.value)
  setNickname(e.target.value)
 }

   const onGender = (e) =>{
  console.log(e.target.value)
  setGender(e.target.value)
 }

 const onRole = (e) =>{
  console.log(e.target.value)
  setRole(e.target.value)
 }
 useEffect(()=>{
  console.log(birth)
 },[birth])

 const onBirth = (e) =>{
  // console.log(e.target.value)
  setBirth(e.target.value);
  
  console.log(birth)

 }





 

// const [startDate, setStartDate] = useState(new Date());
const [visible, setVisible] = useState(false);

// //input date값 가져오기
// const dday = document.querySelector("#input-date").value
// console.log(dday)




  return (
    
    <div className='signup_container'>
      <div className='signup_left'>
        <img className='logo_image' src={logo2}></img>
        {/* <h1 className='logo_title'>설문할래</h1> */}
      </div>

      <div className='signup_right'>
         <div className='signup_box'><img src={logo2}></img><span>회원가입 할래?</span></div>
         <div className='signup-linkbox'>
            <Link to={'/auth/signup/person'}  ><button className='signup-link-button'>개인</button></Link>
            <Link to={'/auth/signup/company'}><button className='signup-link-button'>단체</button></Link>
         </div>
         
         <div className='social-box'> 
            <input className='signup-input' type='email' placeholder='이메일' onChange={onEmail}/>
            <p className="message" style={{marginLeft : "35px", fontSize : '13px', color : 'blue'}}>{emailMessage}</p>
            <input className='signup-input' type='text' placeholder='이름' onChange={onName}/>
            <input className='signup-input' type='password' placeholder='비밀번호'onChange={onPwd}/><br/>
            <p className="message" style={{marginLeft : "35px", fontSize : '13px', color : 'blue', whiteSpace:'pre-wrap' }}>{passwordMessage}</p>
            
            <div className='index-gender-box'>
              <label className='gender' >성별</label>
              <label className='gender-radio' for="male">남 <input type='radio' name='gender' value='male' placeholder='성별' onChange={onGender}/></label>
              <label className='gender-radio' for = "female">여 <input type='radio' name='gender' value='female' placeholder='성별' onChange={onGender}/></label>
          
         </div><br/>
         
         <div className='birth-date-box'>
          <label  className='birth-date-label' for='input-date' >생년월일</label>
          <input id='input-date' className='birth-date-input'  onChange={onBirth} type='date'/>
         
         </div>
          
          <button className='login-btn' type='submit' onClick={()=>{
            axios.post('/api/v1/auth/signup',{
              email : email,
              userName : name,
              password : pwd,
              gender : gender,
              provider : rank,
              birth : birth
              
              

            })
            .then((response)=>{
              console.log(response.data.data)
              if(response.data.data === true){
                alert('회원 가입에 성공하였습니다. ')
                window.location.replace('http://localhost:3000/auth/login')
              }else{
                alert('회원 가입에 실패하셨습니다.')
              }
              
            }).catch((error)=>{
              console.log(error)
            })
          }}>회원가입 </button>
        </div> 
         
      </div>
        <img className='logo_image-bottom' src={logo2}></img>
      
    

    </div>
  )
}










