
import './indexSignup.css';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import naver from '../../images/naver.png';
import logo2 from '../../images/logo2.png';
import { useEffect, useState } from 'react';
// import Axios from 'axios';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { Link} from 'react-router-dom';
import React from 'react';



// 날짜 : 2024.05.08
// 작성자 : 심규창

export default function IndexSignupCompany() {
let[email, setEmail] = useState('');
let[pwd, setPwd] = useState('');
let[name, setName] = useState('');
let [companyFile, setCompanyFile] = useState('');
let [image, setImage] = useState('');


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

 
 let formData = new FormData();
 useEffect(()=>{
  console.log(formData)
 },[formData])

 //첨부파일 이미지 넣기
 const handleFileChange = (e) => {

  
formData.append("file", e.target.files[0]);
  axios.post('http://localhost:8000/file/upload',formData).then((response)=>{
    console.log(response.data)
    alert("file upload success");
  }).catch((error)=>{
    console.log(error)
    alert("file upload fail");
  })
 
 }




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
         <input className='signup-input' type='text' placeholder='회사명' onChange={onName}/>
         {/* <input className='signup-input' type='text' placeholder='닉네임' onChange={onNickname}/> */}
         <input className='signup-input' type='password' placeholder='비밀번호'onChange={onPwd}/><br/>
         <p className="message" style={{marginLeft : "35px", fontSize : '13px', color : 'blue', whiteSpace:'pre-wrap' }}>{passwordMessage}</p>
         
         <div className='index-gender-box'>
         <div className='file_input'><input type='file' name='file' onChange={handleFileChange}/></div>
         </div><br/>
        
          
          <button className='login-btn' type='submit' onClick={()=>{
            axios.post('/api/v1/auth/signupcom',{
              email : email,
              companyName : name,
              password : pwd
          
              
             
              

            })
            .then((response)=>{
              console.log(response.data.code)
              if(response.data.code === 1){
                alert('회원가입 요청 중입니다. 승인 후 연락드리겠습니다.')
              }else{
                alert('회원가입에 실패하셨습니다.')
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










