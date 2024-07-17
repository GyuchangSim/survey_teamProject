import React, { useState } from 'react'
import logo from '../images/Logo.png'
import { Link } from 'react-router-dom';
import './NavigationBar.css'
import styled from 'styled-components';

export default function NavigationBar() {

  const links = ['surveyinfo', '/survey/personal/list', 'apply', 'notice'];
  const links2 = ['/auth/login', '/auth/signup/person'];

  const [dropdownStatus, setDropdownStatus] = useState(false);
  const sessionId = window.localStorage.getItem("user_name") ||window.localStorage.getItem("company_name");

  const onPerson =()=>{
    if(sessionId === null){
      alert('로그인을 해주세요.')
      window.location.replace('http://localhost:3000/auth/login')
      
    }else if(window.localStorage.getItem("company_name")){
      alert('개인계정으로 로그인해주세요')
    }
    localStorage.setItem('applyClass', '개인')


  }
  const onPeople =()=>{
    if(sessionId === null){
      alert('로그인을 해주세요.')
      window.location.replace('http://localhost:3000/auth/login')
      
    }else if(window.localStorage.getItem("user_name")){
      alert('회사계정으로 로그인해주세요')
    }
    localStorage.setItem('applyClass', '단체')
  }
  


  return (
    
    <div className='navibox-container' style={{
      position: 'relative'
    }}>
      <div className='navibar_frame' 
      onMouseOver={() => setDropdownStatus(true)}
      onMouseOut={() => setDropdownStatus(false)}
      style={{
        borderRadius: dropdownStatus ? '0' : null
      }}>
        <div
          style={{
            display: 'flex',
            marginLeft: '20px',
        }}>
          <Link to='/'>
            <img src={logo} alt='logo' width={96} height={56} style={{
              cursor: 'pointer'
            }} />
          </Link>
          <h3 style={{
            color: 'white',
            fontSize: '24px',
            marginLeft: '10px',
            paddingTop: '10px',
            textShadow: '1px 1px 3px #0C2A50'
          }}>설문할래</h3>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '15px'
          }}>
            {links2.map(link => (
              <Link key={link} to={link} style={{
                textDecorationLine: 'none',
                color: 'white',
                padding: '10px 30px',
                fontSize: '16px',
                fontWeight: 500,
                textShadow: '1px 1px 3px #0C2A50',
              }}>
                {/* 기존꺼 */}
                {/* {link === '/auth/login' ? '로그인' : link === '/auth/signup/person' ? '회원가입' : link} */}
              
                  
              </Link>
            ))}
              {/* 새로 추가함 */}
              {sessionId != null ? <a href="/mypage" className='login' style={{color:'white', fontWeight:'700', textDecoration:'none'}}>{sessionId}님 마이페이지</a> : <a href="/auth/login" style={{color:'white', fontWeight:'600',textDecoration:'none'}} className='login'>로그인</a>}
              <span style={{color : '#0F3360'}}>sdf</span>
                    {sessionId != null ? <a href="" style={{color:'white', fontWeight:'700', textDecoration:'none'}} className='login' onClick={() => {{localStorage.clear()}}}>로그아웃</a> : <a href='/auth/signup/person' style={{color:'white', fontWeight:'700', textDecoration:'none'}} >회원가입</a>}
            {/* ---------------------------------------------- */}
          </div>
          <div style={{
            display: 'flex',
            margin: '10px',
            justifyContent: 'space-around',
            fontSize: '16px',
            fontWeight: '500',
            textShadow: '1px 1px 3px #0C2A50'
          }}>
            {links.map(link => (
                <Link key={link} to={link} style={{
                  textDecorationLine: 'none',
                  color: 'white',
                  padding: '10px 60px',
                }}>
                  {link === 'surveyinfo' ? '안내' : link === 'apply' ? '설문 신청' : link === 'notice' ? '고객센터' : link === '/survey/personal/list' ? '설문 조사' : link}
                </Link>
            ))}
          </div>
        </div>
      {
        dropdownStatus && 
        <div className='dropdown'>
          <div className='Subitem'>
            <div className='nav_links'>
              <Link to={'/webinfo'}>웹사이트 소개</Link>
              <Link to={'/surveyinfo'}>설문조사 안내</Link>
            </div>
            <div className='nav_links' style={{
              marginLeft: '25px'
            }}>
              <Link to={'/survey/personal/list'}>설문조사(개인)</Link>
              <Link to={'/survey/group/list'}>설문조사(단체)</Link>
            </div>
            <div className='nav_links' style={{
              marginLeft: '50px'
            }}>
              <Link to={'/apply/person'} onClick ={onPerson}>설문신청(개인) </Link>
              <Link to={'/apply/people'} onClick ={onPeople}>설문 신청(단체) </Link>
            </div>
            <div className='nav_links' style={{
              marginLeft: '50px'
            }}>
              <Link to={'/notice'}>공지사항</Link>
              <Link to={'/question'}>자주 묻는 질문</Link>
            </div>

          </div>
        </div>
      }
      </div>
    </div>
  )
}


