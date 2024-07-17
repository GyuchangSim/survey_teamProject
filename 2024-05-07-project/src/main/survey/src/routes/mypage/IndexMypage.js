import React, { useEffect, useReducer, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import userImage from '../../images/userImg.jpg'
import P from '../../images/P.png'
import './IndexMypage.css'
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function IndexMypage() {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userCode, setUserCode] = useState(localStorage.getItem('user_code'));
  const data = null;
  // const [companyCode, setCompanyCode] = useState(localStorage.getItem('company_code'));
  // const [code, setCode] = useState(0);
  // const [codeStatus, setCodeStatus] = useState("user");

  const [pointmodalOpen, setPointmodalOpen] = useState(false);
  const [deletemodalOpen, setDeletemodalOpen] = useState(false);
  const modalBackground = useRef();

  const USERINFO = [
    {key: '이름', value: ''},
    {key: '닉네임', value: ''},
    {key: '생년월일', value: ''},
    {key: '성별', value: ''},
    {key: '이메일', value: ''},
    {key: '계좌', value: ''}
  ];

  const [userInfo, setUserInfo] = useState(USERINFO);
  const [userPoint, setUserPoint] = useState(0);
  const [pointList, setPointList] = useState([]);
  const [applyList, setApplyList] = useState([]);
  let [changePoint, setChangePoint] = useState(0);

  // const selectCode = () => {
  //   if(userCode === null) {
  //     setCode(companyCode);
  //     setCodeStatus("company");
  //   } else {
  //     setCode(userCode);
  //     setCodeStatus("user");
  //   }
  // }

  const userInfoLoad = () => {
    Axios.get(`/mypage/${userCode}`, {
      headers:{
        'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
      }
    })
    .then((response) => {
      // console.log(userCode);
      setUserInfo(
        [
          {key: '이름', value: response.data.data.userName},
          {key: '닉네임', value: response.data.data.userNickname},
          {key: '생년월일', value: response.data.data.userBirth},
          {key: '성별', value: response.data.data.userGender},
          {key: '이메일', value: response.data.data.userEmail},
          {key: '계좌', value: response.data.data.userAccount}
        ]
      );
      setUserPoint(response.data.data.userMoney);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const applyListLoad = () => {
    Axios.get('/mypage/getApplyList', {
      params: {code: userCode, type: 'user'},
      headers:{
        'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
      }
    })
    .then((response) => {
      // console.log(response.data.data);
      setApplyList(response.data.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const userSurveyListLoad = () => {
    Axios.get('/mypage',
      {
        params: {
          userCode: userCode
        },
        headers:{
          'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
        }
    })
    .then((response) => {
      setPointList(response.data.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    console.log(token);
    userInfoLoad();
    userSurveyListLoad();
    applyListLoad();
    // selectCode();
    // console.log(code, codeStatus);
  }, [])

  const changeToMoneyHandler = () => {
    if(parseInt(changePoint) > parseInt(userPoint)) {
      alert('보유 금액만큼만 출금 가능합니다.')
    } else if(parseInt(changePoint) < parseInt(userPoint)) {
      let updateUserPoint = userPoint; 
      updateUserPoint -= changePoint;
      setUserPoint(updateUserPoint);
      Axios.put(`/mypage/${userCode}/${updateUserPoint}`, data, {
        headers: {
            'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
      setPointmodalOpen(false);
    }
  }

  const onApplyListClickHandler = (index) => {
    const newApplyList = applyList.map((item, itemIndex) => {
      if (itemIndex === index) item.status = !item.status
      return item;
    })
    setApplyList(newApplyList);
  }

  return (
    <div className='surveyMypage_container'>
      {
        pointmodalOpen && 
          <div className='modal_container' style={{zIndex: '1'}} ref={modalBackground} onClick={e => {
            if (e.target === modalBackground.current) {
              setPointmodalOpen(false);
            }
          }}>
            <div className='point_change_modal'>
              <div style={{
                width: '100%',
                height: '50px',
                background: '#0F3360',
                color: 'white',
                padding: '10px',
                paddingLeft: '20px',
                fontSize: '18px',
                fontWeight: '600'
              }}><p>포인트 교환</p></div>
              <div style={{
                fontSize: '12px',
                textAlign: 'end',
                padding: '0px 10px'
              }}>
                <p>*5천원 단위로만 출금이 가능합니다.</p>
              </div>
              <div style={{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '30px'
              }}>
                <div className='pointBoxes'>
                  <div className='pointBox_title'>보유포인트</div>
                  <p>{userPoint}</p>
                </div>
                <div><FontAwesomeIcon icon={faAnglesRight} /></div>
                <div className='pointBoxes'>
                  <div className='pointBox_title'>출금할 포인트</div>
                  <p>{changePoint}</p>
                </div>
                <div className='pointRange'>
                  <div onClick={() => setChangePoint(0)}>0</div>
                  <div onClick={() => setChangePoint(changePoint += 5000)}>5,000</div>
                  <div onClick={() => setChangePoint(changePoint += 10000)}>10,000</div>
                </div>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'end',
                marginRight: '80px',
                marginTop: '15px'
              }}>
                <div style={{
                  width: '70px',
                  height: '25px',
                  color: "white",
                  background: '#0F3360',
                  borderRadius: '3px',
                  textAlign: 'center',
                  cursor: 'pointer'
                }} onClick={changeToMoneyHandler}>출금</div>
              </div>
            </div>
          </div>
      }
      {
        deletemodalOpen && 
          <div className='modal_container' style={{zIndex: '1'}} ref={modalBackground} onClick={e => {
            if (e.target === modalBackground.current) {
              setDeletemodalOpen(false);
            }
          }}>
            <div className='delete_modal_content'>
              <div style={{
                width: '100%',
                height: '50px',
                background: '#CB4E4E',
                color: 'white',
                padding: '10px',
                paddingLeft: '20px',
                fontSize: '18px',
                fontWeight: '600',
                borderTopRightRadius: '3px',
                borderTopLeftRadius: '3px',
                borderBottom: '1px solid black'
              }}>회원탈퇴</div>
              <div style={{
                textAlign: 'center'
              }}><h3>탈퇴하시겠습니까?</h3></div>
              <div className='deleteButtons'>
                <div onClick={() => {
                  Axios.delete(`/mypage/${userCode}`)
                  .then((response) => {console.log(response);})
                  .catch((err) => {console.log(err);})
                }}>예</div>
                <div onClick={() => setDeletemodalOpen(false)}>아니오</div>
              </div>
            </div>
          </div>
      }
        <div className='surveyBox_mypage'>
          <div className='infoBox_mypage'>
          <FontAwesomeIcon icon={faHouse} size='lg' className='houseImg_mypage'/>
          </div>
          <div className='infoBox_mypage'><span style={{
            fontSize: '20px'
          }}>마이페이지</span></div>
        </div>
        
        <div style={{
          position : 'relative'
        }}>
          <div>
            <div className='infoFrame'>
              <div className='leftBox'>
                <div className='profileImg'>
                  <img src={userImage} alt='dog'/>
                </div>
                <div className='changePoints'>
                  <img src={P} alt='Point'/>
                  <h4 style={{
                    fontSize: '16px'
                  }}>{userPoint}</h4> {/* user_money 불러오기 */}
                </div>
              </div>
              <div className='rightBox'>
                <div className='userInfo'>
                  {/* user_mst, user_dtl에서 불러오기 */}
                  {
                    userInfo.map((user) => (
                      <h4>{user.key} : {user.value}</h4>
                    ))
                  }
                </div>
                <div className='buttons'>
                  <div>
                    <button style={{
                      background: '#FFE072'
                    }} onClick={() => {
                      setPointmodalOpen(true);
                    }}>적립금 교환</button>
                  </div>
                  <div className='rightButtons'>
                    <Link to={'/mypage/modify'}>
                      <button style={{
                        marginRight: '5px'
                      }} className='blueButton'>회원정보 수정</button>
                    </Link>
                    <button style={{
                      background: '#FF7E7E'
                    }} onClick={() => {setDeletemodalOpen(true)}}>회원 탈퇴</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='listFrame'>
              <div className='listTitle'>
                <h4>적립금 내역</h4>
              </div>
              <div className='list'>
                  <ul>
                    {/* survey_title, survey_money 가져오기 */}
                    {
                      pointList.map(list => (
                        <li>{list.surveyTitle} - {list.surveyPerMoney}P</li>
                      ))
                    }
                  </ul>
              </div>
            </div>
          </div>
          <div style={{
            position: 'absolute',
            width: '200px',
            minHeight: '200px',
            border: '1px solid #0f3360',
            right: '20px',
            top : '0px',
            borderRadius: '7px'
          }}>
            <div style={{
              backgroundColor: '#1e569a',
              color: 'white',
              fontWeight: '500',
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px',
              height: '40px',
              alignContent: 'center',
              textAlign: 'center'
            }}>
              신청한 설문 내역
            </div>
            <div style={{
              margin: '10px 10px'
            }}>
              {
                applyList.map((list, i) => (
                  <div key={i} className='applyList_mypage'> 
                    <span onClick={() => onApplyListClickHandler(i)} style={{cursor: 'pointer'}}>▶</span>
                    <Link to={`/survey/result/:${list.surveyCode}`} state={{surveyCode: list.surveyCode}} style={{
                      textDecorationLine: 'none',
                      color: 'black'
                    }}>
                      <span style={{fontSize: '14px'}}>{list.surveyTitle}</span>
                    </Link>
                  
                  {list.status && <div className='applyList_mypage' style={{
                    border: '1px solid #cacaca',
                    borderRadius: '5px',
                  }}>
                    <span>참여 : {list.participantCount}명</span>
                    <br />
                    <span>상태 : {list.statusContent}</span>
                    <br />
                    <span>시작일 : {list.surveyPeriodStart}</span>
                    <br />
                    <span>마감일 : {list.surveyPeriodStop}</span>
                    </div>}
                  </div>

                ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}