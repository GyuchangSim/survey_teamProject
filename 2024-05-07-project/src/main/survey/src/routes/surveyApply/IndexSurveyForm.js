import React, { useEffect, useRef, useState } from 'react'
import './SurveyForm.css'
import img from '../../images/image.png'
import add from '../../images/add.png'
import deleteimg from '../../images/delete.png'
import detail from '../../images/detailQuestion.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function IndexSurveyForm() {

const inputImg = useRef();
const [surveyTitleImg, setSurveyTitleImg] = useState('');
const [surveyTitle, setSurveyTitle] = useState('');
const [surveyInfo, setSurveyInfo] = useState('')
const [questionTitle, setQuestionTitle] = useState('');
const [selectOption, setSelectOption] = useState("1");
const [essential, setEssential] = useState(true);
const [detailQuestion, setDetailQuestion] = useState("");
const [detailQuestionStatus, setDetailQuestionStatus] = useState(false);

const [token,setToken] = useState(localStorage.getItem('token'));

const navigate = useNavigate();


//apply정보
let location = useLocation();
const applyClass = location.state.applyClass
const surveyClass = location.state.surveyClass
const pwd = location.state.pwd
const userCode = location.state.userCode
const companyCode= location.state.companyCode
const category = location.state.category
const gender = location.state.gender
const age = location.state.age
const perMoney = location.state.perMoney
const participantNum = location.state.participantNum
const periodStart = location.state.periodStart
const periodStop = location.state.periodStop

useEffect(() => {
  console.log('applyclass' + applyClass);
  console.log('surveyclass' + surveyClass);
  console.log('pwd' + pwd);
  console.log( 'usercode'+ userCode);
  console.log( 'companyCode'+ companyCode);
  console.log('category'+ category);
  console.log( 'gender'+ gender);
  console.log( 'age'+ age);
  console.log( 'permoney'+ perMoney);
  console.log( 'participantnum'+ participantNum);
  console.log( 'periodstart'+ periodStart);
  console.log( 'periodstop'+ periodStop);
})

const onClickImageUpload = () => {
  inputImg.current.click();
};

const saveImageFile = () => {
  const file = inputImg.current.files[0];
const reader = new FileReader();
  if(file){
    reader.readAsDataURL(file);
  }

  reader.onloadend = () => {
    setSurveyTitleImg(reader.result);
  }
}

// option들을 관리할 변수 (현재 편집중인)
const initialOptions = [
  {option: '', optionImg: ''},
  {option: '', optionImg: ''},
  {option: '', optionImg: ''},
  {option: '', optionImg: ''},
  {option: '', optionImg: ''}
]

const [options, setOptions] = useState(initialOptions);

const QUESTION = [];

// question들을 관리할 변수
const [questions, setQuestions] = useState(QUESTION);

const onChangeTitle = (e) => {
  setSurveyTitle(e.target.value);
}
const onChangeInfo = (e) => {
  setSurveyInfo(e.target.value);
}
const onChangeQuestionTitle = (e) => {
  setQuestionTitle(e.target.value);
}
const onChangeOption = (e) => {
  setSelectOption(e.target.value);
}
const onChangeCheckbox = () => {
  setEssential(!essential);
}


const onChangeOptionContent = (e) => {
  const {value, name} = e.target;
  const newOptions = [...options];
  newOptions[name].option = value;
  setOptions(newOptions);
}

//const onChangeOptionImg = (e) => {
//  const {value, name} = e.target;
//  const newOptionImg = [...options];
//  newOptionImg[name].optionImg = value;
//  setOptions(newOptionImg);
//}

const onChangeDetailQuestion = (e) => {
  setDetailQuestion(e.target.value);
}

const onClickDetailQuestion = () => {
  setDetailQuestionStatus(!detailQuestionStatus);
}

const onClickQuestionPlus = () => {
  const newQuestion = {
    questionTitle: questionTitle,
    questionOptions: options, //배열 
    questionSelectOption: selectOption, 
    questionEssential: essential, 
    detailQuestion: detailQuestion,
    detailQuestionStatus: detailQuestionStatus 
  }
  setQuestions([...questions, newQuestion]);
  resetForm();
}

const resetForm = () => {
  setQuestionTitle('');
  setOptions(initialOptions);
  setSelectOption("1");
  setEssential(true);
  setDetailQuestion('');
  setDetailQuestionStatus(false);
}

// 추가된 설문지에 대한 함수 정의(수정)
const onChangeAddedQuestionTitle = (e) => {
  const {value, name} = e.target;
  const questionsTitle = [...questions];
  questionsTitle[name].questionTitle = value;
  setQuestions(questionsTitle);
}

const onChangeAddedOption = (e) => {
  const {value, name} = e.target;
  const questionsSelectOption = [...questions];
  questionsSelectOption[name].questionSelectOption = value
  setQuestions(questionsSelectOption);
}

const onChangeAddedQuestionOptions = (e) => {
  const {value, name} = e.target;
  const questionsOptions = [...questions];
  questionsOptions[name[0]].questionOptions[name[2]].option = value;
  setQuestions(questionsOptions);
}

const onChangeAddedQuestionOptImg = (e) => {
  const {value, name} = e.target;
  const questionOptImg = [...questions];
  questionOptImg[name[0]].questionOptions[name[2]].optionImg = value;
  setQuestions(questionOptImg);
}

const onChangeEssential = (i) => {
  const questionEssentialCheck = [...questions];
  questionEssentialCheck[i].questionEssential = questionEssentialCheck[i].questionEssential ? false : true;
  setQuestions(questionEssentialCheck);
}

const onClickAddedDetailQuestion = (i) => {
  const DetailQuestionCheck = [...questions];
  DetailQuestionCheck[i].detailQuestionStatus = DetailQuestionCheck[i].detailQuestionStatus ? false : true;
  setQuestions(DetailQuestionCheck);
}

const onChangeAddedDetailQuestion = (e) => {
  const {value, name} = e.target;
  const detailQuestions = [...questions];
  detailQuestions[name].detailQuestion = value;
  setQuestions(detailQuestions);
}

// 추가된 설문지에 대한 함수 정의(삭제)
const deleteQuestion = (index) => {
  const newQuestions = questions.filter((q, i) => i !== index);
  setQuestions(newQuestions);
}

//apply 요청
function onClickHandler(){
  axios.post('http://localhost:8000/api/v1/survey/applyform',{
    applicationClass : applyClass,
    surveyClass : surveyClass,
    surveyPassword : pwd,
    userCode : userCode,
    companyCode : companyCode,
    categoryCode : category,
    gender : gender,
    age : age,
    perMoney : perMoney,
    participantMax : participantNum,
    periodStart : periodStart,
    periodStop : periodStop
  },{
    headers:{
      'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
    }
  }
  ).then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.log(error);
  })
}

//공지사항 요청
const surveyPost = () => {
const questionTitles = questions.map(question => question.questionTitle);
const questionOptions = questions.map(question => question.questionOptions);
const questionSelectOptions = questions.map(question => question.questionSelectOption);
const questionEssentials = questions.map(question => question.questionEssential);
const detailQuestions = questions.map(question => question.detailQuestion);

axios.post('/api/v1/survey/surveyform', {
  surveyTitle : surveyTitle,
  surveyInfo : surveyInfo,
  questionTitle : questionTitles,
  questionOptions : questionOptions,
  questionSelectOption : questionSelectOptions,
  questionEssential : questionEssentials,
  detailQuestion : detailQuestions
},{
  headers:{
    'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
  }
})
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
})
}

const pay = () => {
  navigate('/payment/:surveyCode',
{state:{surveyTitle, perMoney, participantNum }},
{
  headers:{
    'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
  }
})
}

return (
  <div>
    <div className='container_surveyform'>
      <div className='survey_main_form'>

        {/* 설문조사 제목, 설명 박스 */}
        <div className='survey2_title_box'>
          <div style={{
            backgroundColor: '#0F3360',
            height: '20px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}>
          </div>
          <div className='title_box'>
            <div>
              <input onChange={onChangeTitle} value={surveyTitle} style={{
              border: 'none',
              fontSize: '25px',
              background: '#f4f4f4'
              }} placeholder='제목 없는 설문지'></input>
            </div>
            <div>
              <label htmlFor='photo' onChange={onClickImageUpload}>
                <img src={surveyTitleImg ? surveyTitleImg : img} alt='img' style={{
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer'
                }}/>
              </label>
              <input type='file' ref={inputImg} id='photo' onChange={saveImageFile} style={{
                display: 'none'
              }} />
              </div>
            </div>
            <div className='info_box_form'>
              <input value={surveyInfo} onChange={onChangeInfo} style={{
              width: '560px',
              border: 'none',
              background: '#f4f4f4'
              }} placeholder='설문지 설명을 입력하세요.' />
            </div>
          </div>
        {/* 추가된 질문박스들 */}
        {
          questions.map((question, i) => (
            <div className='question_box_input'>
              <div className='question_title_box'>
                <div>
                  <input onChange={onChangeAddedQuestionTitle} name={i} value={question.questionTitle}style={{
                  border: 'none',
                  background: '#f4f4f4',
                  fontSize: '18px',
                  minWidth: '400px'
                  }} placeholder='제목 없는 질문' />
                </div>
                <div>
                  <select value={question.questionSelectOption} onChange={onChangeAddedOption} name={i}>
                    <option value="0">주관식 질문</option>
                    <option value="1">객관식 질문</option>
                    <option value="2">체크박스</option>
                  </select>
                </div>
              </div>
            {
              question.questionSelectOption === "0" ? 
              <div className='survey_form_answer'>
                답변:
                <input style={{border: 'none', backgroundColor: '#f4f4f4', borderBottom: '1px solid black', width: '560px'}} />
              </div>
              : question.questionSelectOption === "1" ?
              <div className='survey_form_options'>
                {
                  question.questionOptions.map((option, index2) => (
                    <div>
                      <div>
                        <input type='radio' name='question_option' />
                        <input value={option.option} name={[i, index2]} onChange={onChangeAddedQuestionOptions} style={{
                          marginLeft: '10px'
                        }} placeholder={"옵션" + (index2+1)} />
                      </div>
                      <form>
                        <input type='file' name={[i, index2]} onChange={onChangeAddedQuestionOptImg} accept=".jpg, .png, .gif, .jpeg" className='inputImage'/> 
                      </form>
                      {/* -> value가 전달이 안된다. */}
                    </div>
                  ))
                }
              </div>
              : question.questionSelectOption === "2" ?
              <div className='survey_form_options'>
                {
                  question.questionOptions.map((option, index2) => (
                    <div>
                      <div>
                        <input type='checkbox' name='question_checkbox'/>
                        <input value={option.option} name={[i, index2]} onChange={onChangeAddedQuestionOptions} style={{
                          marginLeft: '10px'
                        }} placeholder={"옵션" + (index2+1)}/>
                      </div>
                      <form>
                        <input type='file' name={[i, index2]} onChange={onChangeAddedQuestionOptImg} accept=".jpg, .png, .gif, .jpeg" className='inputImage' /> 
                      </form>
                        {/* -> value가 전달이 안된다. */}
                    </div>
                  ))
                }
              </div>
              : null
            }
            {
              question.detailQuestionStatus &&
              <div className='detail_question_box'>
                <div className='detail_question_title'>
                  <input value={question.detailQuestion} name={i} onChange={onChangeAddedDetailQuestion} placeholder='제목 없는 추가 질문'/>
                </div>
                <div>
                  <textarea style={{
                    width: '560px', height: '30px', resize: 'none', marginTop: '10px'
                  }}></textarea>          
                </div>
              </div>
            }
            <div className='question_bottom_box'>
              <div>필수<input type='checkbox' checked={question.questionEssential} style={{ marginLeft: '5px'}} onChange={() => onChangeEssential(i)} /></div>
              <div>
              <img src={detail} alt='deleteimg' style={{width: '30px', margin: 'auto', cursor:'pointer'}} onClick={() => onClickAddedDetailQuestion(i)} />
                <img src={deleteimg} alt='deleteimg' style={{width: '30px', marginLeft: '7px', cursor:'pointer'}} 
                  onClick={() => deleteQuestion(i)} />
              </div>
            </div>
        </div>
          ))
        }
        
        {/* 질문박스 */}
        <div className='question_box_input'>
            <div className='question_title_box'>
              <div>
                <input value={questionTitle} onChange={onChangeQuestionTitle} style={{
                border: 'none',
                background: '#f4f4f4',
                fontSize: '18px',
                minWidth: '400px'
              }} placeholder='제목 없는 질문'/>
              </div>
              <div>
                <select onChange={onChangeOption} value={selectOption}>
                  <option value="0">주관식 질문</option>
                  <option value="1">객관식 질문</option>
                  <option value="2">체크박스</option>
                </select>
              </div>
            </div>
            {
              selectOption === "0" ? 
              <div className='survey_form_answer'>
                답변:
                <input style={{border: 'none', backgroundColor: '#f4f4f4', borderBottom: '1px solid black', width: '560px'}} />
              </div>
              : selectOption === "1" ?
              <div className='survey_form_options'>
                {
                  options.map((option, index) => (
                    <div>
                      <div>
                        <input type='radio' name='question_option'/>
                        <input onChange={onChangeOptionContent} value={option.option} name={index} style={{
                          marginLeft: '10px'
                        }} placeholder={"옵션" + (index+1)}/>
                      </div>
                      {/* <input type='file' name={index} onChange={onChangeOptionImg} /> */}
                    </div>
                  ))
                }
              </div>
              : selectOption === "2" ?
              <div className='survey_form_options'>
                {
                  options.map((option, index) => (
                    <div>
                      <div>
                        <input type='checkbox' name='question_checkbox'/>
                        <input onChange={onChangeOptionContent} value={option.option} name={index} style={{
                          marginLeft: '10px'
                        }} placeholder={"옵션" + (index+1)}/>
                      </div>
                      {/* <input type='file' name={index} onChange={onChangeOptionImg} /> */}
                    </div>
                  ))
                }
              </div>
              : null
            }
            {
              detailQuestionStatus &&
              <div className='detail_question_box'>
                <div className='detail_question_title'>
                  <input value={detailQuestion} onChange={onChangeDetailQuestion} placeholder='제목 없는 추가 질문' />
                </div>
                <div>
                  <textarea style={{
                    width: '560px', height: '30px', resize: 'none', marginTop: '10px'
                  }}></textarea>          
                </div>
              </div>
            }
            <div className='question_bottom_box'>
              <div>필수
                <input type='checkbox' checked={essential} style={{ marginLeft: '5px'}} onChange={onChangeCheckbox} />
              </div>
              <div>
                <img src={detail} alt='detailImg' style={{width: '30px', margin: 'auto 7px', cursor:'pointer'}} onClick={onClickDetailQuestion}/>
                <img src={add} alt='add' onClick={onClickQuestionPlus} style={{width: '25px', cursor: 'pointer'}} />
              </div>
            </div>
          </div>
        </div>
          <div className='survey_form_buttons'>
            <div>
                <button className='survey_form_button' onClick={() => console.log()}>취소</button>
                <button className='survey_form_button' onClick={() => {surveyPost(); onClickHandler(); pay();}}>제출</button>
            </div>
          </div>
      </div>
    </div>
  )
}
