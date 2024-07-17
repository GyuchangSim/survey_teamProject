import './App.css';
import {  Link, Route, Routes } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import IndexMain from './routes/main/IndexMain';
import IndexMypage from './routes/mypage/IndexMypage';
import Login from './routes/auth/Login';
import IndexSurveyInfo from './routes/surveyinfo/IndexSurveyInfo';
import IndexWebInfo from './routes/webinfo/IndexWebInfo';
import IndexNotice from './routes/notice/IndexNotice';
import IndexCreateNotice from './routes/createNotice/IndexCreateNotice';
import IndexNoticeDetail from './routes/noticeDetail/IndexNoticeDetail';
import IndexDetailModify from './routes/detailModify/IndexDetailModify';
import IndexQuestion from './routes/question/IndexQuestion';
import IndexSurveyApply from './routes/surveyApply/IndexSurveyApply';
import IndexSurveyApplyPerson from './routes/surveyApply/IndexSurveyApplyPerson';
import IndexSurveyApplyPeople from './routes/surveyApply/IndexSurveyApplyPeople';
import IndexAdmin from './routes/Admin/IndexAdmin';
import IndexSurvey from './routes/survey/IndexSurvey';
import SurveyGroup from './routes/survey/SurveyGroup';
import IndexSurveyStart from './routes/survey/IndexSurveyStart';
// import IndexSurveyPage from './routes/survey/IndexSurveyPage';
import IndexSurveyPage2 from './routes/survey/IndexSurveyPage2';
import SurveyGroupStart from './routes/survey/SurveyGroupStart';
import IndexSurveyComplete from './routes/survey/IndexSurveyComplete';
import SurveyGroupComplete from './routes/survey/SurveyGroupComplete';
import IndexMypageModify from './routes/mypage/IndexMypageModify'
import IndexSurveyForm from './routes/surveyApply/IndexSurveyForm';
import IndexAdmin2 from './routes/Admin/IndexAdmin2';
import IndexSignupCompany from './routes/auth/IndexSignupCompany';
import LoginCompany from './routes/auth/LoginCompany';
import IndexSignup from './routes/auth/indexSignup';
import IndexSurveyPayment from './routes/payment/IndexSurveyPayment'
import IndexSurveyPaymentResult from './routes/payment/IndexSurveyPaymentResult';
import IndexPassword from './routes/mypage/IndexPassword';
import IndexSurvey2 from './routes/survey/IndexSurvey2';
import IndexResult from './routes/result/IndexResult'


function App() {
  
  return (
    <>
      <div className='containerApp'>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<IndexMain />} />
          <Route path='/mypage' element={<IndexMypage />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/login/com' element={<LoginCompany />} />
          <Route path='/auth/signup/person' element={<IndexSignup />} />
          <Route path='/auth/signup/company' element={<IndexSignupCompany />} />
          <Route path='/surveyinfo' element={<IndexSurveyInfo/>} />
          <Route path='/webinfo' element={<IndexWebInfo/>} />
          <Route path='/notice' element={<IndexNotice />} />
          <Route path='/notice/create' element={<IndexCreateNotice />} />
          <Route path='/notice/detail/:noticeCode' element={<IndexNoticeDetail />} />
          <Route path='/notice/detail/modify/:noticeCode' element={<IndexDetailModify />} />
          <Route path='/question' element={<IndexQuestion/>} />
          <Route path='/apply' element={<IndexSurveyApply />} />
          <Route path='/apply/person' element={<IndexSurveyApplyPerson />} />
          <Route path='/apply/people' element={<IndexSurveyApplyPeople />} />
          {/* <Route path='/survey/personal/list' element={<IndexSurvey />} /> */}
          <Route path='/survey/personal/list' element={<IndexSurvey2 />} />
          <Route path='/survey/group/list' element={<SurveyGroup />} />
          <Route path='/adminpage/company' element={<IndexAdmin />} />
          <Route path='/survey/personal/list/:contentCode' element={<IndexSurveyStart />} />
          <Route path='/survey/personal/list/start/:surveyCode' element={<IndexSurveyStart />} />
          {/* <Route path='/survey/survey/page/:surveyCode' element={<IndexSurveyPage />} /> */}
          <Route path='/survey/survey/page/:surveyCode' element={<IndexSurveyPage2 />} />
          <Route path='/survey/group/list/start/:surveyCode' element={<SurveyGroupStart />} />
          <Route path='/survey/personal/list/:surveyCode/complete' element={<IndexSurveyComplete />} />
          <Route path='/survey/group/list/:surveyCode/complete' element={<SurveyGroupComplete />} />
          <Route path='/mypage/modify' element={<IndexMypageModify />} />
          <Route path='/survey/surveyform' element={<IndexSurveyForm />} />
          <Route path='/adminpage/survey' element={<IndexAdmin2 />} />
          <Route path='/payment/:surveyCode' element={<IndexSurveyPayment />} />
          <Route path='/payment/success' element={<IndexSurveyPaymentResult />} />
          <Route path='/mypage/password' element={<IndexPassword />} />
          <Route path='/survey/result/:surveyCode' element={<IndexResult />} />
        </Routes>
      </div>
      <footer>
        <div className='footerBox'>
          <div className='footerBox1'>
              <Link to={'/webinfo'} style={{
                textDecorationLine: 'none',
                fontSize: '12px'
              }}>
                <p id='footerBox1_item'>웹사이트 소개</p>
              </Link>
              <Link to={'/notice'} style={{
                textDecorationLine: 'none',
                fontSize: '12px'
              }}>
                <p id='footerBox1_item'>공지사항</p>
              </Link>
            <p id='footerBox1_item' style={{
              fontSize: '12px'
            }}>E-mail : jiyoung@gmail.com</p> 
          </div>
          <div>
            <p style={{
              fontSize: '12px'
            }}>ⓒ 2024 신지영, 심규창, 최소윤, 김예찬</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;