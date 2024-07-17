import React, { useEffect, useState } from 'react'
import Search from './search/Search'
import './IndexMain.css';
import logo2 from '../../images/logo2.png';
import axios from 'axios';

export default function IndexMain() {

let [data, setData] = useState(['', '', ''])
let [token, setToken] = useState(localStorage.getItem('token'));
let [topSurvey, setTopSurvey] = useState(['','',''])
let [topSurveyCode, setTopSurveyCode] = useState(['','',''])

//메인페이지 최신 공지사항 3개 띄우기
useEffect(()=>{
  axios.get("/api/v1/survey/main/notice",{
    headers:{
      'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
    }
  })
      .then((response)=>{

        let copyData = [...data];

        copyData[0] = Object.values(response.data[0]);
        copyData[1] = Object.values(response.data[1]);
        copyData[2] = Object.values(response.data[2]);
        setData(copyData);
        console.log(copyData);
        console.log(token);
        console.log(copyData[0][0]);

  })
},[])

//메인 페이지 조회수 많은 설문 3개 띄우기
useEffect(()=>{
  axios.get("/survey/personal/list/main/survey",{
    headers:{
      'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
    }
  }).then((response)=>{
    console.log(response.data.data[0]);
    let copyTopSurvey = [...topSurvey];
    copyTopSurvey[0] = response.data.data[0];
    copyTopSurvey[1] = response.data.data[1];
    copyTopSurvey[2] = response.data.data[2];
    setTopSurvey(copyTopSurvey);
    console.log(copyTopSurvey);

  })
},[])


  
  return (
    <>
      <div>
        <Search />
        <div className='indexMain-container'>
            <div className='popular-rank'>
              <div className='top-text'>이번 주 인기 설문</div>
              <div className='bottom-text'>
{                  topSurvey.map((item, i) => (
                      <a href={`/survey/personal/list/start/${item.surveyCode}`} className='bottom-text-content' key={i}>- {item.surveyTitle}</a> 
                  ))}
                  
                  
              </div>
            </div>
            <div className='main-notice'>
              <div className='main-notice-top'>공지사항</div>
              <div className='main-notice-bottom'>
          
                
                {
                  data.map((item, i) => (
                    <a href={`/notice/detail/${item[1]}`}  className='bottom-text-content' key={i}>- {data[i]} </a>
                  ))
                }
                
                <div className='bottom-text-content'>{} </div>
                {/* <div className='bottom-text-content'>{data[2]} </div> */}
              </div>
            </div>
            
        </div>

      </div>
    </>
  )
}