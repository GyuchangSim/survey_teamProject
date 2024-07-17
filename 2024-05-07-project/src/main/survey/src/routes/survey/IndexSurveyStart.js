import React ,{useState, useEffect} from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {faChevronLeft} from'@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

export default function IndexSurveyStart() {

    const {surveyCode} = useParams();
    const [surveyTitle, setSurveyTitle] = useState('');
    const [surveyPeriodStart,setSurveyPeridoStart] = useState('');
    const [surveyPeriodStop,setSurveyPeriodStop] = useState('');
    const [surveyPerMoney,setSurveyPerMoney] = useState('');
    const [isPressed, setIsPressed] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));

    // const getSurveyStartData = () => {
    //     axios.post(`/survey/personal/list/${surveyCode}/start`,
    //         {
    //             headers: {
    //                 'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
    //               },
    //             params: {
                  
    //             }
    //         }
    //     )
    // }

    useEffect(() => {
        axios.get(`/survey/personal/list/start/${surveyCode}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            const SurveyStart = response.data.data
            console.log(response.data.data);
            setSurveyTitle(SurveyStart.surveyTitle);
            setSurveyPeridoStart(SurveyStart.surveyPeriodStart);
            setSurveyPeriodStop(SurveyStart.surveyPeriodStop);
            setSurveyPerMoney(SurveyStart.surveyPerMoney);
        }).catch((error) => {
            console.log(error);
        });
    },[surveyCode,token]);

    const navigate = useNavigate();

    const handleSurveyPageClick = () => {
        navigate(`/survey/survey/page/${surveyCode}`, {state:{surveyCode}});
    };


    const buttonStyle = {
        width: "120px", 
        height: "40px", 
        fontSize: "20px", 
        color: "#fefefe", 
        border: "none",
        borderRadius: "15px", 
        backgroundColor: "#1581FF",
        boxShadow: isPressed ? "none" : '2px 2px 4px rgba(0, 0, 0, 0.5)',
        transform: isPressed ? 'translateY(0.2px)' : 'translateY(-1.5px)',
        transition: 'all 0.1s ease-in-out'
    };



        {/* 설문조사 안내 + 테이블 */} 
            return(
            <>
                <div className='container' style={{width: "900px", 
                                       height: "750px", 
                                       padding: "70px",
                                       margin: "auto",
                                       marginTop: "50px",
                                       marginBottom: "50px",
                                       border: "4px solid #9f9f9f", 
                                       borderRadius: "12px",
                                       display: "flex",
                                       justifyContent: "center"
                                      }}>
                <div style={{marginBottom: "40px"}}>                       
                    <div className='survey-info-title' style={{marginBottom: "30px"}}>
                        <h1>설문조사 안내</h1>
                    </div>
                    <table className='survey-info-table' style={{width: "700px",
                                                        fontSize: "20px" }}>
                        <tr>
                            <th style={{width: "200px",
                                        height: "35px",
                                        backgroundColor: "#e8e8e8",
                                        borderTop: "3px solid #79797c",
                                        borderBottom: "2px dotted #79797c"}}>조사명</th>
                            <td style={{display: "flex",
                                        justifyContent: "center",
                                        height: "35px",
                                        borderTop: "3px solid #79797c",
                                        borderBottom: "2px dotted #79797c"}}>{surveyTitle}</td>
                        </tr>
                        <tr>
                            <th style={{height: "35px",
                                        backgroundColor: "#e8e8e8",
                                        borderBottom: "2px dotted #79797c"}}>조사기간</th>
                            <td style={{display: "flex",
                                        justifyContent: "center",
                                        height: "35px",
                                        borderBottom: "2px dotted #79797c"}}>{surveyPeriodStart} ~ {surveyPeriodStop}</td>
                        </tr>
                        <tr>
                            <th style={{backgroundColor: "#e8e8e8",
                                        borderBottom: "2px dotted #79797c"}}>적립금</th>
                            <td style={{display: "flex",
                                        justifyContent: "center",
                                        height: "35px",
                                        borderBottom: "2px solid #79797c"}}>{surveyPerMoney}</td>
                        </tr>
                    </table>
                </div>
                {/* 설문조사 안내 + 테이블 */}

                {/* 조사 참여 가이드 */}
                <div className='survey-participate-guide' style={{display: "flex", 
                                                            justifyContent: "center",
                                                            flexDirection: "column"
                                                            }}>
                    <h2>조사 참여 가이드</h2> 

                    <br></br>

                    <ol style={{paddingLeft: "16px"}}>
                    <li>설문조사 도중 뒤로가기 버튼을 사용하실 수 없습니다.</li>

                    <br></br>

                    {/* zIndex는 정수 값을 가지며, 값이 클수록 해당 요소는 다른 요소
                    위에 표시됨, 즉 zIndex값이 큰 요소가 zIndex값이 작은 요소를 덮음 */}
                    <div style={{display: "flex", 
                                flexDirection: "row"
                                }}>
                        <div>
                            <FontAwesomeIcon icon={faArrowLeftLong} width={130} 
                            style={{fontSize: "50px", 
                            transform: "scale(1.4, 1.2)",
                            position: 'relative',
                            zIndex: 1
                            }} />
                            <FontAwesomeIcon icon={faCircleXmark}
                            style={{fontSize: "50px", 
                            transform: "scale(0.7, 0.7)",
                            color: "#ff0000",
                            position: 'relative',
                            zIndex: 2,
                            left: -82
                            }}
                            />
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faChevronLeft} width={64}
                            style={{fontSize: "50px", 
                            transform: "scale(1.2, 1.2)",
                            position: 'absolute',
                            zIndex: 1
                            }}
                            />
                            <FontAwesomeIcon icon={faCircleXmark} 
                            style={{fontSize: "50px", 
                            transform: "scale(0.7, 0.7)",
                            color: "#ff0000",
                            position: 'relative',
                            zIndex: 2
                            }}
                            />
                        </div>
                    </div>

                    <br></br>

                    <li>설문조사를 통해 습득한 모든 정보는 외부 발설 및 유포시 
                    법적 불이익을 받을 수 있습니다.</li>

                    <br></br>

                    <li>설문조사 응답이 불성실하다고 판단될 경우 조사가 즉시 종료될 수 있으며, 
                    여러번 반복될 경우 강제 탈퇴 <br></br> 또는 적립금 미지급 등의 불이익이 있을 수 있습니다. </li>
                    </ol>
                    {/* 조사 참여 가이드 */}


                {/* 버튼 */}
                <div  onClick={handleSurveyPageClick} style={{display: "flex",
                     justifyContent: "center",
                     marginTop: "43px"
                }}>
                            <input
                                type='button' 
                                value={"조사참여"}  
                                style={buttonStyle}
                                onMouseDown={() => setIsPressed(true)}
                                onMouseUp={() => setIsPressed(false)}
                                onMouseLeave={() => setIsPressed(false)}
                            />
                </div>
                {/* 버튼 */}
                </div>
            </div>     
    {/* 위의 "로딩중..."은 false일 때 뜨는 문구로 로딩이 끝나면 정상적인 화면이 보임 */}
    </>
    );
};    

            
/* https://velog.io/@summereuna/React-HTTP-GET-%EC%9A%94%EC%B2%AD-%EB%B3%B4%EB%82%B4%EA%B8%B0
: 리액트 앱 <-> 백엔드 앱(NodeJS App, PHP APP등등) -> Database(Heidi SQL)*/