import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import userImage from '../../images/userImg.jpg'
import P from '../../images/P.png'
import './IndexMypage.css'
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Axios from 'axios';

export default function IndexMypageModify() {

  const USERINFO = [
    {key: '이름', value: ''},
    {key: '닉네임', value: ''},
    {key: '생년월일', value: ''},
    {key: '성별', value: ''},
    {key: '이메일', value: ''},
    {key: '계좌', value: ''}
  ];

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userCode, setUserCode] = useState(localStorage.getItem('user_code'));

  const inputImg = useRef();

  const [userImg, setUserImg] = useState();
  const [userImgProfile, setUserImgProfile] = useState();
  const [userinfo, setUserInfo] = useState(USERINFO);
  const [userMoney, setUserMoney] = useState(0);

  const userInfoLoad = () => {
    Axios.get(`/mypage/modify/${userCode}`, {
      headers:{
        'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
      }
    })
    .then((response) => {
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
      setUserMoney(response.data.data.userMoney);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    userInfoLoad();
  }, [])

  const onChange = (e) => {
    const {value, name} = e.target;
    const newUserinfo = [...userinfo];
    // console.log(newUserinfo);
    newUserinfo[name].value = value;
    setUserInfo(newUserinfo);
  }

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
      setUserImg(reader.result);
    }
    setUserImg(file);
    setUserImgProfile(file);
  }

  const updateUserInfo = () => {
    // const formData = new FormData();
    // formData.append("userCode", userCode);
    // formData.append("userName", userinfo[0].value);
    // formData.append("userNickname", userinfo[1].value);
    // formData.append("userEmail", userinfo[2].value);
    // formData.append("userBirth", userinfo[3].value);
    // formData.append("userGender", userinfo[4].value);
    // formData.append("userAccount", userinfo[5].value);
    // formData.append("userImg", userImg);
    // console.log(...formData);

    // Axios.put(`/mypage/modify/${userCode}`, formData)
    Axios.put(`/mypage/modify/${userCode}`, {
      userCode: userCode,
      userName: userinfo[0].value,
      userNickname: userinfo[1].value,
      userBirth: userinfo[2].value,
      userGender: userinfo[3].value,
      userEmail: userinfo[4].value,
      userAccount: userinfo[5].value
    }, {
      headers:{
        'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })

    // ----------------------------------------------------

    const formData = new FormData();
    formData.append("userImg", userImgProfile);

    Axios.post(`/mypage/modify/${userCode}`, formData, {
      headers: { 
        "Content-Type": "multipart/form-data",
        'Authorization' :`Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })

  }


  return (
    <div className='surveyMypage_container'>
        <div className='surveyBox_mypage'>
          <div className='infoBox_mypage'>
          <FontAwesomeIcon icon={faHouse} size='lg' className='houseImg_mypage'/>
          </div>
          <div className='infoBox_mypage' style={{
            width: '300px'
          }}><span style={{
            fontSize: '20px'
          }}>마이페이지(회원정보 수정)</span></div>
        </div>
        <div className='infoFrame'>
          <div className='leftBox'>
            <div className='profileImg'>
              <label htmlFor='photo' onChange={onClickImageUpload}>
              <img src={userImg ? userImg : userImage} alt='userImg' style={{ cursor: 'pointer' }} />
              </label>
              <input type='file' ref={inputImg} id='photo' onChange={saveImageFile} style={{
                  display: 'none'
                }}>
                </input>
            </div>
            <div className='changePoints'>
              <img src={P} alt='Point'/>
              <h4 style={{
                fontSize: '16px'
              }}>{userMoney}</h4> {/* user_money 불러오기 */}
            </div>
          </div>
          <div className='rightBox' style={{ display: 'flex'}}>
            <div className='userInfo' style={{ width: '450px'}}>
              {/* user_mst, user_dtl에서 불러오기 */}
              {/* {
                userinfo.map((user, index) => (
                  <h4>{user.key} : <input value={user.value} name={index} onChange={onChange} style={{
                    border: 'none',
                    width: '200px'
                  }} /></h4>
                ))
              } */}
              <form>
                <h4>{userinfo[0].key} : <input value={userinfo[0].value} name={0} onChange={onChange} style={{
                      border: 'none',
                      width: '360px'
                    }} /></h4>
                <h4>{userinfo[1].key} : <input value={userinfo[1].value} name={1} onChange={onChange} style={{
                      border: 'none',
                      width: '350px'
                    }} /></h4>
                <h4>{userinfo[2].key} : <input type='date' value={userinfo[2].value} name={2} onChange={onChange} style={{
                      border: 'none'
                    }} /></h4>
                <h4>{userinfo[3].key} : <select value={userinfo[3].value} name={3} onChange={onChange} style={{
                      border: 'none'
                    }}>
                      <option>male</option>
                      <option>female</option>
                    </select></h4>
                <h4>{userinfo[4].key} : <input type='email'  required autofocus value={userinfo[4].value} name={4} onChange={onChange} style={{
                      border: 'none',
                      width: '350px'
                    }} /></h4>
                <h4>{userinfo[5].key} : <input value={userinfo[5].value} name={5} onChange={onChange} style={{
                      border: 'none',
                      width: '350px'
                    }} /></h4>
              </form>
            </div>
            <div className='buttons' style={{
              marginLeft: '5px',
              justifyContent: 'end'
            }}>
              <Link to={'/mypage/password'} state={{userMoney: userMoney}} >
                <button type='submit' className='blueButton' onClick={updateUserInfo} style={{
                  backgroundColor: '#fefefe',
                  border: '2px solid #BDDAFF'
                }}>
                  비밀번호 수정
                </button>
              </Link>
              <Link to={'/mypage'} >
                <button type='submit' className='blueButton' onClick={updateUserInfo}>
                  회원정보 완료
                </button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
