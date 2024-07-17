// // 2024.5.22 최소윤
// import React, { useEffect, useState } from 'react'
// import './IndexSurveyPage.css'
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function IndexSurveyPage() {

//   const surveyTitle = 'test';
//   const surveyInfo = 'test를 위해서 사용';
//   const surveyCode = 1;
//   const [surveyDetail, setSurveyDetail] = useState([]);
  

//   const sampleQuestions = [
//     {
//       questionTitle : '좋아하는 과일은?',
//       questionOptions : [
//         {option : '배'},
//         {option : '사과'},
//         {option : '딸기'},
//       ],
//       questionSelectOption : '1',
//       detailquestion : '딸기를 좋아하는 이유는 무엇인가요?',
//       questionEssential : true
//     },
//     {
//       questionTitle : '좋아하는 계절은?',
//       questionOptions : [
//         {option : '봄'},
//         {option : '여름'},
//         {option : '가을'},
//         {option : '겨울'}
//       ],
//       questionSelectOption : '2',
//       detailquestion : '겨울을 좋아하는 이유는 무엇인가요?',
//       questionEssential : false
//     },
//     {
//       questionTitle : '좋아하는 과일은?',
//       questionOptions : [],
//       questionSelectOption : '0',
//       detailquestion : null,
//       questionEssential : true
//     },
//   ]
  
//   useEffect(()=>{
//     axios.get(`http://localhost:8000/survey/personal/list/details/${surveyCode}`)
//     .then(response => {
//       console.log(response.data.data)
//       setSurveyDetail(response.data.data);
//     }).catch(error => {
//       console.log(error)
//     })
//   },[])


  

//   return (
//     <>
//       <div className='surveypage-container'>
//         <div className='surveypage-main'>

//           {/* 설문조사 제목, 설명 박스 */}
//           <div className='survey-title-box'>
//             <div style={{
//               backgroundColor: '#0F3360',
//               height: '20px',
//               borderTopLeftRadius: '8px',
//               borderTopRightRadius: '8px',
//             }}></div>
//             <div className='title-box'>
//               <div><span style={{
//                 border: 'none',
//                 fontSize: '25px',
//                 background: '#f9f9f9'
//               }}>{surveyTitle}</span></div>
//               {/* <div><img src={img} alt='img' style={{
//                 width: '40px',
//                 height: '40px',
//                 cursor: 'pointer'
//               }}/></div> */}
//             </div>
//             <div className='info-box-surveypage'>
//               <span style={{
//               width: '560px',
//               border: 'none',
//               background: '#f9f9f9'
//               }} >{surveyInfo}</span>
//             </div>
//           </div>

//           {/*질문박스들 */}
//           {
//             sampleQuestions.map((question) => (
//               <div className='surveypage-question-box'>
//                 <div className='question-title-box'>
//                   <div><span>{question.questionTitle}</span></div> 
//                 </div>
//                 {
//                   question.questionSelectOption === "0" ? 
//                   <div className='survey-page-answer'>
//                     답변:
//                     <input style={{border: 'none', borderBottom: '1px solid black', backgroundColor : '#f9f9f9', width: '560px'}} />
//                   </div>
//                   : question.questionSelectOption === "1" ?
//                   <div className='survey-page-options'>
//                     {
//                       question.questionOptions.map((option) => (
//                         <div>
//                           <div>
//                             <input type='radio' name='question_option' />
//                             <span className='surveypage-option'>{option.option}</span> 
//                           </div>
//                           {/* <img src={option.optionImg} alt='option_img' style={{
//                             cursor:'pointer'
//                           }} /> */}
//                         </div>
//                       ))
//                     }
//                   </div>
//                   : question.questionSelectOption === "2" ?
//                   <div className='survey-page-options'>
//                     {
//                       question.questionOptions.map((option) => (
//                         <div>
//                           <div>
//                             <input type='checkbox' name='question_checkbox'/>
//                             <span className='surveypage-option'>{option.option}</span>
//                           </div>
//                           {/* <img src={option.optionImg} alt='option_img'/> */}
//                         </div>
//                       ))
//                     }
//                   </div>
//                   : null
//                 }
//                 {
//                   question.detailquestion !== null ?  
//                   <div className='test' style={{margin : '10px'}}>
//                     <p style={{
//                       margin : '10px',
//                       paddingTop : '10px',
//                       borderTop : '1px solid black',
//                       fontSize : '14px'
//                     }}>{question.detailquestion}</p>
//                     <textarea type='text' style={{
//                       marginLeft : '10px',
//                       width : '560px',
//                       height : '40px',
//                       resize : 'none',
//                       fontSize : '12px'
//                     }}></textarea>
//                   </div>
//                   : null
//                 }
//                 <div className='question-bottom-box'>
//                   <div><span>필수</span><input type='checkbox' checked={question.questionEssential === true} style={{ marginLeft: '5px'}}  readOnly/></div>
//                 </div>
//               </div>
//             ))
//           }
//           <div className='surveypage-buttons'>
//             {
//               <Link to={'/'}>
//                 <button type='button' className='surveypage-cancel-button'>취소</button>
//               </Link>
//             }
//             {
//               <Link to={'/survey/personal/list/{surveyCode}/complete'}>
//                  <button type='button' className='surveypage-submit-button'>제출</button>
//               </Link>
//             }
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

