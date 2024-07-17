import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import person from '../../images/person.png'
import people from '../../images/people.png'
import './surveyApply.css'
import { Link } from 'react-router-dom'

export default function IndexSurveyApply() {

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
  

// const onPerson =()=>{
//   localStorage.setItem('applyClass', '개인')
// }

// const onPeople =()=>{
//   localStorage.setItem('applyClass', '단체')
// }

  return (
    <div className='container_apply'>
      <div className='surveyBox_apply'>
        <div className='infoBox_apply'>
        <FontAwesomeIcon icon={faHouse} size='lg' className='.houseImg_apply' />
        </div>
        <div className='infoBox_apply' style={{
          width: '300px'
        }}><span style={{
          fontSize: '20px'
        }}>설문 신청(신청자 기준)</span></div>
      </div>
        <div className='Boxes_apply'>
          {
            <Link to={'/apply/person'} style={{
              textDecoration: "none",
              color: 'black'
            }}>
              <div className='applyPerson'>
                <img src={person} htmlfor='person' alt='person' className='classImages' onClick={onPerson} />
                
                <h6>설문 신청 개인</h6>
              </div>
            </Link>
          }

          {
            <Link to={'/apply/people'} style={{
              textDecoration: "none",
              color: 'black'
            }}>
              <div className='applyPeople'>
                <img src={people} alt='people' className='classImages' onClick={onPeople}/>
                <h6>설문 신청 단체</h6>
              </div>
            </Link>
          }
        </div>
    </div>
  )
}
