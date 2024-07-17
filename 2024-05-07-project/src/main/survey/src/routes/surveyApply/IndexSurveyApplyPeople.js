import React, { useEffect, useState } from 'react'
import './applyForm.css'
import { useNavigate } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

export default function IndexSurveyApplyPeople() {
  
  const navigate = useNavigate();
  //변수 설정
  const [name, setName] = useState('');
  const [surveyClass, setSurveyClass] = useState('');
  const [pwd, setPwd] = useState('');
  const [participantNum, setParticipantNum] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState();
  const [perMoney, setPerMoeny] = useState('');
  const [periodStart, setPeriodStart] = useState('');
  const [periodStop, setPeriodStop] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState('');
  const [toggle, setToggle] = useState(false);

  //연령
  const [checkedList, setCheckedList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  
  
const onAge = (e) =>{
  const copyAge = e.target.value;
  setAge(copyAge)
  console.log(copyAge)
  setAge(copyAge);
}

  
  const onAgree =(e) =>{
    if(e.target.id === 'no'){
      alert('개인정보 수집에 동의해주셔야합니다.')
    }
  }

  const onSurveyClass = (e)=>{
    const newSurveyClass = e.target.value;
    setSurveyClass(newSurveyClass);  
    if(surveyClass === '단체'){ 
    const newToggle = true
    setToggle(newToggle);
    console.log(newToggle)
    
    
  }else{
    const newToggle = false
    setToggle(newToggle);
    console.log(newToggle)

  }
}

  const onPwd = (e)=>{
    const newPwd = e.target.value;
    setPwd(newPwd)
    console.log(newPwd)
  }

  const onGender = (e) =>{
    const newGender = e.target.value;
    setGender(newGender);
  }

  const onMoney = (e) => {
    const newMoney = e.target.value;
    setPerMoeny(newMoney);
  }

  const onStart = (e) => {
    const newStart = e.target.value
    setPeriodStart(newStart);
  }

  const onStop = (e) => {
    const newStop = e.target.value;
    setPeriodStop(newStop);
  }

  const onCategory = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
  }

  const onParticipant = (e) => {
    const newParticipant = e.target.value;
    console.log(newParticipant);
    setParticipantNum(newParticipant);
  }
//첨부파일
let formData = new FormData();
 useEffect(()=>{
  console.log(formData)
 },[formData])

const onFile = (e) =>{
  formData.append("file", e.target.files[0])
  console.log(e.target.files[0])
  axios.post('http://localhost:8000/api/v1/survey/file',formData)
  .then((response)=>{
    alert("파일 업로드에 성공했습니다.")
  }).catch((error)=>{
    alert("파일 업로드에 실패했습니다.")
  })
}

const token = localStorage.getItem('token')
const applyClass = localStorage.getItem('applyClass')
const companyCode = localStorage.getItem('company_code');


//설문신청 값 전송
function onClickHandler(){
  navigate('/survey/surveyform',
    {state:{applyClass,surveyClass, pwd, companyCode, category, gender, age, perMoney, 
      participantNum, periodStart, periodStop}},
    {headers:{'Authorization' :`Bearer ${token}`}}
    )}

  return (
    <>
      <div className='container-form'>
        <div className='agreeBox'>
          <div style={{
            marginTop: '10px'
          }}>
            <h3 style={{
              fontSize:'20px'
            }}>개인정보 수집 및 이용 동의<span style={{
              fontSize: '14px',
              color: 'red'
            }}>(필수)</span></h3>
          </div>
          <div className='radioCheck'>
            <input type='radio' id='yes' name='agree' onClick={onAgree}/>
            <label for='yes'>예</label>
            <input type='radio' id='no' name='agree'/>
            <label for='no'>아니요</label>
          </div>
        </div>
        <div className='applyInfo'>
          <h4 style={{
            color: "red",
            fontSize: '18px'
          }}>* 설문조사 첨부파일 내 필수 입력사항</h4>
          <h5>1. 이 조사를 실시하는 이유</h5>
          <h5>2. 이 조사를 통해 무엇에 이용하고자 하는지</h5>
          <h5>3. 알아야 할 사항은 무엇인지</h5>
          <h5>4. 조사 결과를 받기 원하는 시기</h5>
        </div>
        <div className='inputInfo'>
          <table className='apply_table'>
            <tr className='apply_tr'>
              <th className='apply_th'>성명(회사명)</th>
              <td colSpan={3} className='apply_td'>
                <input type='text' value={localStorage.getItem('company_name')} style={{
                  border: 'none',
                  outline: 'none'
                }}/>
              </td>
              <td colSpan={3}  style={{display : 'none'}} className='apply_td'>
                <input type='text' value={companyCode} style={{
                  border: 'none',
                  outline: 'none',
                  
                }}/>
              </td>
            </tr>
            { toggle ==  true? <tr className='apply_tr'>
              <th className='apply_th'>비밀번호</th>
              <td colSpan={3} className='apply_td'>
                <input type='text' style={{
                  border: 'none',
                  outline: 'none'
                }} onChange={onPwd}/>
              </td>
            </tr> : null}
            <tr className='apply_tr'>
              <th className='apply_th'>대상</th>
              <td className='apply_td'>
                <input type='radio' id='person' name='surveyClass' value='개인' onClick={onSurveyClass}></input>
                <label for='person'>개인</label>
                <input type='radio' id='people' name='surveyClass' value='단체' onClick={onSurveyClass}></input>
                <label for='people'>단체</label>
              </td>
              <td className='apply_td'>
                <input type='radio' id='woman' value='여성' name='surveyClassGender' onClick={onGender}></input>
                <label for='woman'>여성</label>
                <input type='radio' id='man' value='남성' name='surveyClassGender'onClick={onGender}></input>
                <label for='man'>남성</label>
                <input type='radio' id='genderAll' value='모두' name='surveyClassGender'></input>
                <label for='genderAll'>모두</label>
              </td>
              <td className='apply_td'>
                <input type='radio' id='ten' value='10' onClick={onAge} name='surveyClassAge'></input>
                <label for='ten'>10대</label>
                <input type='radio' id='twenty' value='20' onClick={onAge} name='surveyClassAge'></input>
                <label for='twenty'>20대</label>
                <input type='radio' id='thirty' value='30' onClick={onAge} name='surveyClassAge'></input>
                <label for='thirty'>30대</label>
                <input type='radio' id='forty' value='40' onClick={onAge} name='surveyClassAge'></input>
                <label for='forty'>40대</label>
                <br></br>
                <input type='radio' id='fifty' value='50' onClick={onAge} name='surveyClassAge'></input>
                <label for='fifty'>50대</label>
                <input type='radio' id='sixty' value='60' onClick={onAge} name='surveyClassAge'></input>
                <label for='sixty'>60대 이상</label>
                
                
              </td>
            </tr>
            <tr className='apply_tr'>
              <th className='apply_th'>1인당 적립금</th>
              <td colSpan={3} className='apply_td'>
                <input type='number' step={50} style={{
                  border: 'none',
                  outline: 'none'
                }}  onClick={onMoney}/></td>
            </tr>
            <tr className='apply_tr'>
              <th className='apply_th'>최대 참여인원</th>
              <td colSpan={3} className='apply_td'>
                <input type='number' step={10} style={{
                  border: 'none',
                  outline: 'none'
                }} onClick={onParticipant}/></td>
            </tr>
            <tr className='apply_tr'>
              <th className='apply_th'>설문조사 기간</th>
              <td colSpan={2} className='apply_td'>
                <label> 시작 : 
                  <input type='date' name='startPeriod' onClick={onStart}></input> 
                </label>
              </td>
              <td className='apply_td'>
              <label> 마감 :  
                  <input type='date' name='endPeriod' onClick={onStop}></input> 
                </label>
              </td>
            </tr>
            <tr className='apply_tr'>
              <th className='apply_th'>카테고리</th>
              <td colSpan={3} className='apply_td'>
                <select onClick={onCategory}>
                  <option value='1'>교육</option>
                  <option value='2'>사회</option>
                  <option value='3'>경제</option>
                  <option value='4'>기술</option>
                  <option value='5'>건강</option>
                  <option value='6'>미용</option>
                  <option value='7'> 취미</option>
                  <option value='8'>기타</option>
                </select>
              </td>
            </tr>
            <tr className='apply_tr'>
              <th className='apply_th'>첨부파일</th>
              <td colSpan={3} className='apply_td'><input type='file' onChange={onFile} /></td>
            </tr>
          </table>
        </div>
        <button style={{
          width: '100px',
          height: '30px',
          backgroundColor: '#0F3360',
          color: 'white',
          fontWeight: 600,
          margin: 'auto',
          cursor: 'pointer'
        }} onClick={onClickHandler}>다음으로</button>
      </div>
    </> 
  )
}
