import './IndexSurvey.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import done from "./../../images/done.png";
import './SurveyList.css';
// import './CommonTop.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './SurveyList.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import qs from 'qs';


// 날짜 : 2024.05.09
// 작성자 : 김예찬
//2024.5.21 최소윤 modal부분

Modal.setAppElement('#root');


//설문조사 개인 카테고리 필터
export default function IndexSurvey() { 


    const [surveyList, setSurveyList] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [ref,inView] = useInView();
    const[page,setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const observer = useRef();
    const [selectedGender, setSelectedGender] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedAges, setSelectedAges] = useState([]);


    //axios할때마다 {headers:~~token} 추가하기
    const getSurveyList = async (page) => {
        try {
            setIsLoading(true);
            const params = {
                page: page,
                contentCount: 6,
                surveyClass: '개인',
                categoryCode: selectedCategories.length > 0 ? selectedCategories : null,
                surveyTargetGender: selectedGender.length > 0 ? selectedGender : null,
                surveyTargetAge: selectedAges.length > 0 ? selectedAges : null
            };
            const response = await axios.get('/survey/personal/list', {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: params,
                paramsSerializer: params => {
                    return qs.stringify(params, { arrayFormat: 'repeat' });
                }
            });
            if (response.data.data.length > 0) {
                setSurveyList(prevList => page === 1 ? response.data.data : [...prevList, ...response.data.data]);
            } else {
                // 더 이상 로드할 데이터가 없을 때
                observer.current = null; // 관찰자 비활성화
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const handleIntersection = (entries, observer) => {
            const target = entries[0];
            if (target.isIntersecting && !isLoading && observer) {
                observer.unobserve(target.target);
                setPage(prevPage => prevPage + 1);
            }
        };

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        };

    const observerInstance = new IntersectionObserver(handleIntersection, options);
    if (ref.current) {
        observerInstance.observe(ref.current);
    }

    return () => {
        if (ref.current) {
            observerInstance.unobserve(ref.current);
        }
    };
    }, [ref, isLoading]);

    useEffect(() => {
        if (page > 1) {
            getSurveyList(page);
        }
    }, [page]);

    useEffect(() => {
        setSurveyList([]);
        setPage(1);
        getSurveyList(1);
    }, [selectedCategories, selectedGender, selectedAges]);

      
    //옵션선택

    const handleCategoryChange = (categoryName) => {
        setSelectedCategories(prevCategories => prevCategories.includes(categoryName) 
            ? prevCategories.filter(c => c !== categoryName) 
            : [...prevCategories, categoryName]);
    };


    const handleGenderChange = (event) => {
        const gender = event.target.value;
        setSelectedGender(prevGender => prevGender.includes(gender) 
            ? prevGender.filter(g => g !== gender) 
            : [...prevGender, gender]);
    };

    const handleAgeChange = (ageGroup) => {
        setSelectedAges(prevAges => prevAges.includes(ageGroup) 
            ? prevAges.filter(age => age !== ageGroup) 
            : [...prevAges, ageGroup]);
    };
    //카테고리 선택
    const [modal, setModal] = useState(false); //react-modal을 활용한 모달창 띄우기
    const [message, setMessage] = useState(''); //모달창의 2가지 메시지
    
    
    const openModal = (message) => {
        setModal(!modal); //modal의 상태를 동적으로 변경하기 위해 true 또는 false가 아닌 !moda을 써야 함
        setMessage(message);
    };

    const closeModal = () => {
        setModal(!modal);
        setMessage(''); //메시지를 빈 문자열로 초기화
    };

    const CustomModal = ({modal, message}) => {

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
            }
        };
        
        return (
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
                    backgroundColor: "#77A1D7",
                    alignContent: "center"
                    }}>
                    <div>  
                        <FontAwesomeIcon icon={faXmark} 
                        style={{color: "#fefefe",
                                marginTop : '2px',
                                transform: "scale(2, 2)",
                                position: "relative",
                                right: -475,
                                cursor: "pointer"
                                }}
                        onClick={closeModal}
                        />
                    </div>
                </div>
                <div style={{display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column",
                    alignItems: "center"
                    }}>
                    <div>
                        <img src={done} alt='done' style={{
                            marginTop : '15px',
                            transform: "scale(1.5, 1.5)",
                            position: "relative",
                            top: 95}}/>
                    </div>
                    <div>
                        <h2 style={{color: "#ff0000",
                            position: "absolute",
                            bottom: 35,
                            left: 130,
                        }}>{message}</h2>
                    </div>
                </div>
            </Modal>
        )
    
    }


    return(
    
        <div className='container'>
            <div className='surveyBox-survey'>
            <div className='infoBox-survey'>
            <FontAwesomeIcon icon={faHouse} size='lg' className='houseImg-survey'/>
            </div>
                <div className='infoBox-survey'><span>설문조사</span></div>
                <div className='infoBox-survey'><span>설문조사(개인)</span></div>
            </div>

            <hr></hr>
            
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
                        <div style={{display: "flex", marginTop: "10px", width: "100px", height: "100px", alignItems: "center", backgroundColor: "#eee"}}>
                            <div style={{display: "flex", flexDirection: "column"}} onChange={handleGenderChange}>
                                <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                                    <input type='checkbox' className='checkbox' value="male" checked={selectedGender.includes('male')} />
                                    <span>남</span>
                                </div>
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <input type='checkbox' className='checkbox' value="female" checked={selectedGender.includes('female')} />
                                    <span>여</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AgeFilter selectedAges={selectedAges} onAgeChange={handleAgeChange} />
                    
                </div>
            </div> 
            {/* 필터 박스 */}

            <hr></hr>

        
            {/* <div className='surveyList'>
                {
                    data.map((indexSurveyContent, i) => {
                        return(
                                <div className='survey-list'>
                                    <Link to={'/survey/personal/list/{surveyCode}/start'} style={{
                                    textDecoration: "none", color: '#fefefe'}}>
                                        <div className='survey-title' style={{display: "flex",
                                            justifyContent: "center"
                                        }}>
                                            <span>{indexSurveyContent.title}</span>
                                        </div>
                                        <div className='survey-list-content'>
                                            <p>{"적립금: " + indexSurveyContent.money + "원"}</p>
                                            <p>{"기간: " + indexSurveyContent.start + " ~ " + indexSurveyContent.stop}</p>
                                        </div>
                                    </Link>
                                </div>
                                //여기에 사용자의 설문조사 여부에 따라 모달창을 2가지로 다르게 띄우는 조건을 넣어야 함
                        )})
                }
                
                <div className='survey-list'>
                        <div className='survey-title'>
                            <span></span>
                        </div>
                        <div className='survey-list-content' style={{cursor : 'pointer'}}  onClick={() => openModal("이미 참여한 설문조사입니다")}>
                            <span>적립금 : 500원</span>  
                            <span>기간 : 2024.05.21 ~ 2024.05.30</span>  
                        </div>
                </div>
                <div className='survey-list'>
                    <div className='survey-title'>
                        <span>소비자 조사</span>
                    </div>
                    <div className='survey-list-content' style={{cursor : 'pointer'}} onClick={() => {openModal("대상자가 아닙니다");}}>
                        <span>적립금 : 500원</span>
                        <span>기간 : 2024.05.15 ~ 2024.06.30</span>
                    </div>
                </div>
            </div>
            <CustomModal modal={modal} message={message} /> */}

            <div className='surveyList'>
                {surveyList.map((survey, index) => (
                    <div className='survey-list' key={index}>
                        <Link to={`/survey/personal/list/${survey.surveyCode}/start`} style={{
                                    textDecoration: "none", color: '#fefefe'}}>
                            <div className='survey-title' style={{display: "flex",
                                            justifyContent: "center"
                                        }}>
                                <span>{survey.surveyTitle}</span>
                            </div>
                            <div className='survey-list-content' style={{cursor : 'pointer'}}>
                                <span>적립금 : {survey.surveyPerMoney}</span>
                                <span>기간 : {survey.surveyPeriodStart} ~ {survey.surveyPeriodStop}</span>
                            </div>
                        </Link>
                    </div>
                ))}
                <div ref={observer} style={{ height: '1px' }} />
                {isLoading && <p>Loading...</p>}
            </div>      
        </div>
    );
};    
        {/* <div ref={ref}>여기</div> */}

const CategoryFilter = ({ selectedCategories, onCategoryChange }) => {
    const categories = ['교육', '경제', '건강', '취미', '사회', '기술', '미용', '기타'];
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            width: "410px",
            height: "100px",
            alignItems: "center",
            backgroundColor: "#eee"
        }}>
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
    );
};

const AgeFilter = ({ selectedAges, onAgeChange }) => {
    const ageGroups = ['10대', '20대', '30대', '40대', '50대', '60대'];
    return (
        <div style={{marginLeft: "20px"}}>
            <span>연령</span>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "space-around",
                marginTop: "10px",
                width: "350px",
                height: "100px",
                alignItems: "center",
                backgroundColor: "#eee"
            }}>
                <div style={{marginRight: "20px"}}>
                    <div style={{display: "flex", flexDirection: "row", marginBottom: "8px"}}>
                        {ageGroups.slice(0, 3).map(ageGroup => (
                            <div className='C' key={ageGroup}>
                                <input
                                    type='checkbox'
                                    className='checkbox'
                                    value={ageGroup}
                                    checked={selectedAges.includes(ageGroup)}
                                    onChange={() => onAgeChange(ageGroup)}
                                />
                                <span>{ageGroup}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        {ageGroups.slice(3).map(ageGroup => (
                            <div className='C' key={ageGroup}>
                                <input
                                    type='checkbox'
                                    className='checkbox'
                                    value={ageGroup}
                                    checked={selectedAges.includes(ageGroup)}
                                    onChange={() => onAgeChange(ageGroup)}
                                />
                                <span>{ageGroup}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

        
