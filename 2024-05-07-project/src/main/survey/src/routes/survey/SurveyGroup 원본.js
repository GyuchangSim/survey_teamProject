import React, {useState} from 'react'
import './IndexSurvey.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faTruckMedical} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import './SurveyGroup.css';
import './SurveyList.css';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';



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
    const [ref, inView] = useInView();
    const [isLoading, setIsLoading] = useState(false);
    const observer = useRef();

    const getSurveyList = () => {
        //axios할때마다 {headers:~~token} 추가하기
        axios.get(`/survey/group/list`,
            {params : {page: page, contentCount : 9, surveyClass : "단체"}, 
            headers:{
                'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
              }}
        )
        .then((response) => {
            
            // console.log(response);
            // console.log(response.data);
            console.log(response.data.data);
            setSurveyList(response.data.data);
            setPage(page + 1);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getSurveyList();
        setSurveyList([]);
        setPage(1);
      }, [])
   
    
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

            <hr></hr>

            <div className='surveyList'>
            {
                surveyList.map((survey, index) => {
                    return(
                        <>
                        <div className='survey-list' style={{cursor: "pointer"}} onClick={openModal}>
                            <div className='survey-title'>
                                <span>{survey.surveyTitle}</span>
                            </div>
                            <div className='survey-list-content'>
                                <p>기간 : {survey.surveyPeriodStart} ~ {survey.surveyPeriodStop}</p>
                            </div>
                        </div>
                        
                        <Modal 
                        isOpen={modal}
                        onRequestClose={closeModal}
                        shouldCloseOnOverlayClick={false}
                        style={modalStyle}
                        >
                        <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "70px",
                            borderRadius: "16px 16px 0px 0px",       
                            backgroundColor: "#0F3360",
                            alignContent: "center"
                            }}>
                            <div style={{display: "flex",
                                        justifyContent: "space-between"}}>
                                <h2 style={{color: "#fefefe",
                                    fontWeight: "normal",
                                    position: "relative",
                                    right: -40
                                    }}>코드 입력</h2>
                                    <div>
                                        <FontAwesomeIcon icon={faXmark} 
                                        style={{color: "#fefefe",
                                                transform: "scale(2, 2)",
                                                position: "relative",
                                                right: 26,
                                                top: 6,
                                                cursor: "pointer"
                                                }}
                                                onClick={closeModal}
                                                />
                                    </div>
                            </div>
                        </div>
                        <div className='밑 3분의 2' style={{display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    position: "relative",
                                                    top: 75
                                                    }}>

                            {/* 코드를 입력해주세요 네모 창 */}
                            <div style={{width: "400px",
                                        height: "150px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        border: "1px solid #141414",
                                        borderRadius: "6px"
                                        }}>
                                <div style={{position: "absolute",
                                            top: 0,
                                            display: "flex",
                                            justifyContent:"center",
                                            width: "400px",
                                            height: "40px",
                                            backgroundColor: "#0F3360",
                                            color: "#fefefe",
                                            borderRadius: "6px",
                                            alignItems: "center"
                                            }}>
                                    <h3 style={{fontWeight: "normal"
                                    }}>코드를 입력해주세요</h3>
                                </div>
                                <div>
                                    <input type='text' size="20" maxLength="10"
                                    
                                    style={{borderTop: "none",
                                            borderLeft: "none",
                                            borderRight: "none",
                                            textAlign: "center",
                                            position: "relative",
                                            top: 20   
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderWidth = "3px";
                                        e.target.style.borderColor = "#77A1D7";
                                        e.target.style.outline = "none";
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderWidth = "2px";
                                        e.target.style.borderColor = "#141414";
                                    }}
                                    />
                                </div>
                            </div>
                            {/* 코드를 입력해주세요 네모 창 */}

                            <br></br>

                            {/* 입력버튼 */}
                            <div>
                                <input type='button' value="입력" 
                                style={{fontSize: "18px",
                                        width: "84px",
                                        height: "30px",
                                        color: "#fefefe",
                                        backgroundColor: "#0F3360",
                                        borderRadius: "5px",
                                        position: "relative",
                                        bottom: 4,
                                        cursor: "pointer"
                                        }}/>
                            </div>
                            {/* 입력버튼 */}
                        </div>
                    </Modal>
                    </>
                        )})
                }
                               
            </div>
        </div>
    )
}

                              
 
