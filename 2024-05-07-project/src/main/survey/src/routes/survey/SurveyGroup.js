import React, {useState} from 'react'
import './IndexSurvey.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faTruckMedical} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import './SurveyGroup.css';
import './SurveyList.css';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import qs from 'qs';
import xicon from '../../images/xicon.png';


Modal.setAppElement('#root')
/* #root를 앱의 최상위 요소로 설정,
모달창이 열리면 그 외의 부분은 사용자에게 비활성화 되어야 하므로 react-modal
라이브러리의 setAppElement메서드를 사용하였다. */



//설문조사 단체 페이지
export default function SurveyGroup() { 

    const [modal, setModal] = useState(false);
    const [surveyList, setSurveyList] = useState([]);
    let [token, setToken] = useState(localStorage.getItem('token'));
    const[page,setPage] = useState(1);
    const[surveyData, setSurveyData] = useState([]);

    //성별선택
    const [selectedGender, setSelectedGender] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedAges, setSelectedAges] = useState([]);

    const handleGenderChange = (gender) => {
        setSelectedGender(prevSelectedGender => {
          if (prevSelectedGender.includes(gender)) { 
            return prevSelectedGender.filter(g => g !== gender);
          } else {
            return [...prevSelectedGender, gender];
          }
        });
      };

    //카테고리 선택
    
    const handleCategoryChange = (categoryName) => {
        setSelectedCategories(prevCategories => {
          if (prevCategories.includes(categoryName)) {
            return prevCategories.filter(c => c !== categoryName);
          } else {
            return [...prevCategories, categoryName];
          }
        });
      };

    //연령 선택
    const handleAgeChange =(age) => {
        setSelectedAges(preAges => {
            if(preAges.includes(age)){
                console.log(age)
                return preAges.filter(a => a !== age)
            }else{
                console.log(typeof(selectedAges))
                return [...preAges, age]
            }
        })
    }

    //데이터 전체 불러오기
    useEffect (() => {
        axios.get('http://localhost:8000/survey/group/list/surveyList',
        {
            headers:{
                'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
              }
        }).then(response=>{
            console.log(response.data.data)
            setSurveyData(response.data.data)
           
        }).catch(error => {
            console.log(error)
        })
    },[])
    const [ref, inView] = useInView();
    const [isLoading, setIsLoading] = useState(false);
    const observer = useRef();

    useEffect(() => {

        const currentObserver = observer.current;
        if(currentObserver) {
            currentObserver.disconnect();
        }

        observer.current = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (target.isIntersecting && !isLoading) {
                setPage(prevPage => prevPage + 1);
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        });

        if (ref.current) {
            observer.current.observe(ref.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [ref, isLoading]);

    // useEffect(() => {
    //     getSurveyList(page);
    // }, [page]);

    useEffect(() => {
        setSurveyList([]);
        setPage(1);
        // getSurveyList(1);
    }, []);
   
    
        const openModal = () => {
            setModal(!modal);
        };
    
        const closeModal = () => {
            setModal(!modal);
        };

        const modalStyle = {
            content : {
                top : '50%',
                left : '50%',
                right : 'auto',
                bottom : 'auto',
                marginRight : '-50%',
                transform : 'translate(-50%, -50%)',
                width : '520px',
                height : '320px',
                borderRadius : '16px'
            },
            overlay: {
                backgroundColor: 'rgba(255, 255, 255, 0.3)'
            }
        };

        
    return(
        <div className='container'>
            <div className='surveyBox-surveygroup'>
                <div className='infoBox-surveygroup'>
                <FontAwesomeIcon icon={faHouse} size='lg' className='houseImg-surveygroup'/>
                </div>
                    <div className='infoBox-surveygroup'><span>설문조사</span></div>
                    <div className='infoBox-surveygroup'><span>설문조사(단체)</span></div>
            </div>

              {/* 필터 박스 */}
              <div>
                <div style={{marginTop: "15px",
                            display: "flex",
                            flexDirection: "row"}}>
                    <div style={{marginLeft: "20px"}}>
                        <span>카테고리</span>
                        <CategoryFilter selectedCategories={selectedCategories} onCategoryChange={handleCategoryChange} />
                    </div>
                    <div style={{marginLeft: "20px"}}>
                        <span>성별</span>
                        <div style={{display: "flex",                     
                            marginTop: "10px",
                            width: "250px",
                            height: "100px",
                            alignItems: "center",
                            backgroundColor: "#eee"}}>

                                    <div style={{display: "flex", alignItems: "center", marginBottom: "8px", justifyContent : 'center'}}>
                                    <GenderFilter selectedGender={selectedGender} handleGenderChange = {handleGenderChange}/>
                                </div>
                            </div>
                        
                    </div>
                  <AgeFilter handleAgeChange={handleAgeChange} selectedAges={selectedAges}/>
                </div>
            </div> 
            {/* 필터 박스 */}

            <hr></hr>
            <div className='surveyList'>
                <SurveyList surveyData={surveyData} openModal={openModal} selectedGender={selectedGender} selectedCategories={selectedCategories} selectedAges={selectedAges} token = {token}/> 
            {
                surveyList.map((survey, index) => {
                    return(
                        <>
                        <div className='survey-list' style={{cursor: "pointer"}} onClick={openModal}
                        key={survey.surveyCode}>
                            <div className='survey-title'>
                                <span>{survey.surveyTitle}</span>
                            </div>
                            <div className='survey-list-content'>
                                <p>기간 : {survey.surveyPeriodStart} ~ {survey.surveyPeriodStop}</p>
                            </div>
                        </div>
                        
                        
                    </>
                        )})
                }
                    <div ref={ref} style={{ height: '1px' }} />
                    {isLoading && <p>Loading...</p>}           
            </div>
        </div>
    )
}

const SurveyList = ({surveyData, openModal, selectedCategories, selectedGender, selectedAges, token}) => {
    const [toggle, setToggle] = useState(false);
    const [surveyPwd, setSurveyPwd] = useState('');
    const [surveyCode, setSurveyCode] = useState('');
    
    
    const filteredProducts = surveyData.filter(survey => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(survey.categoryName);
        const genderMatch = selectedGender.length === 0 || selectedGender.includes(survey.surveyTargetGender)
        const ageMatch = selectedAges.length === 0 || selectedAges.includes(survey.surveyTargetAge)

        return categoryMatch && genderMatch && ageMatch;
    })

    const navigate = useNavigate();

    const handleSurveyClick = (surveyCode) => {
        {toggle === false? setToggle(true) : setToggle(false)}  
              axios.get(`http://localhost:8000/survey/group/list/pwd/${surveyCode}`, {
                headers:{
                    'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
                  }
              }).then((response) => {
                const newSurveyPwd = response.data.data.surveyPassword
                setSurveyPwd(newSurveyPwd)
                const newSurveyCode = response.data.data.surveyCode;
                setSurveyCode(newSurveyCode)

              }).catch(error => {
                console.log(error)
              })
              
        // navigate(`/survey/group/list/start/${surveyCode}`);
    
  };
    
    return(
            <>
                {filteredProducts.map((survey) => (
                            <div className='survey-list' style={{cursor: "pointer"}} 
                            onClick={() => {handleSurveyClick(survey.surveyCode)}
                            }>
                                <div className='survey-title'>
                                    <span>{survey.surveyTitle}</span>
                                </div>
                                <div className='survey-list-content'>
                                    <span>카테고리 : {survey.categoryName}</span>
                                    <span>적립금 : {survey.surveyPerMoney}</span>
                                    <span>성별 : {survey.surveyTargetGender}</span>
                                    <span>연령 : {survey.surveyTargetAge}</span>
                                    <p>기간 : {survey.surveyPeriodStart} ~ {survey.surveyPeriodStop}</p>
                                </div>
                         
                            </div>
                    ))
                }  
                {toggle === true? <CodeModal surveyPwd={surveyPwd} surveyCode={surveyCode} setToggle={setToggle}/> : ''}
            </>
            )
    }
    
    const categories = ['교육', '경제', '건강', '취미', '사회', '기술', '미용', '기타'];
    const CategoryFilter = ({selectedCategories, onCategoryChange}) =>{
        return(
            <>
             <div style={{display: "flex", justifyContent: "center",
                                    marginTop: "10px",
                                    width: "410px",
                                    height: "100px",
                                    alignItems: "center",
                                    backgroundColor: "#eee"}}>
                        <div style={{marginRight: "20px"}}>
                            <div style={{display: "flex", flexDirection: "row", marginBottom: "8px"}}>
                             <div>
                                 {categories.map(categoryName => (
                                <label key={categoryName}>
                                <input
                                type="checkbox"
                                value={categoryName}
                                checked={selectedCategories.includes(categoryName)}
                                onChange={() => onCategoryChange(categoryName)}
                                className='checkbox'
                                />
                                {categoryName}
                                 </label>

                            ))}

                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }

    const genders = ['모두', '남성', '여성'];
    const GenderFilter = ({selectedGender,handleGenderChange }) => {
        return(
            <>
                 {
                genders.map(gender => (
                    <label key={gender}>
                        <input type='checkbox'
                                value={gender}
                                checked={selectedGender.includes(gender)}
                                onChange={()=>{handleGenderChange(gender)}}
                                className='checkbox'/>
                        {gender}
                    </label>
                    
                ))
            }
            </>

        )
    }
  

    const Ages = ['10', '20', '30', '40', '50', '60']
    const AgeFilter = ({selectedAges, handleAgeChange, }) => {
        return(
            <>
               <div style={{marginLeft: "20px"}}>
             <span>연령</span>
              <div style={{display: "flex", justifyContent:"center",
                             alignContent: "space-around",

                            marginTop: "10px",

                            width: "500px",
                            height: "100px",

                            alignItems: "center",
                            backgroundColor: "#eee"}}>

                <div style={{marginRight: "20px"}}>
                    <div style={{display: "flex", flexDirection: "row", marginBottom: "8px"}}>
                    {
                        Ages.map(age => (
                            <div className='C'>
                            <input value={age} 
                                type='checkbox' 
                                className='age-checkbox'
                                checked={selectedAges.includes(age)}
                                onChange={()=>{handleAgeChange(age)}}/>
                            <span>{age}대</span>
                        </div>
                    ))
                   }
                      </div>
                 </div>
            </div>
        </div>
            </>

        )
    
    }
        //모달창
        const CodeModal = ({surveyPwd, surveyCode, setToggle}) => {
            const [password, setPassword] = useState('');
            const navigate = useNavigate();
            

            const pwd = (e) => {
                const changePwd = e.target.value
                setPassword(changePwd)
                console.log(changePwd)
            }
            const checkPwd = () => {
                if(surveyPwd === password){
                    navigate(`/survey/group/list/start/${surveyCode}`);
                }else{
                    alert('비밀번호를 다시 입력해주세요')
                    
                }
            }
            
            return(
                <>
                    <div className='modal-overlay'>
                        <div className='modal-container'>
                           
                                <div className='modal-code-top'>코드 입력 <img 
                                                                            style={{cursor:'pointer', 
                                                                                    marginLeft:'400px', 
                                                                                    marginTop:'10px', 
                                                                                    width:'15px',
                                                                                     height:'15px'}} 
                                                                                     src={xicon}
                                                                                     onClick={()=>{setToggle(false)}}></img></div>
                                <div className='modal-code-box'>
                                        <label className='modal-code-label'>비밀번호를 입력해주세요</label><br/>
                                        <input className='modal-code-input' type='password'onChange={pwd}/><br/>
                                </div>
                                        <button className='modal-code-btn' onClick={checkPwd}>입력</button>
                        </div>
                    </div>
                </>
            )
        }

                              
 
