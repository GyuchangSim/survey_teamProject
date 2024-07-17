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

export default function IndexSurvey() {
    const [surveyList, setSurveyList] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [ref, inView] = useInView();
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const observer = useRef();
    const [selectedGenders, setSelectedGenders] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedAges, setSelectedAges] = useState([]);

    const getSurveyList = async (page, contentCount, surveyClass, selectedCategories, selectedGenders, selectedAges) => {
        try {
            setIsLoading(true);
            const params = {
                page: page,
                contentCount: 6,
                surveyClass: '개인',
                // categoryCode: selectedCategories.length > 0 ? selectedCategories : undefined,
                // surveyTargetGender: selectedGender.length > 0 ? selectedGender : undefined,
                // surveyTargetAge: selectedAges.length > 0 ? selectedAges : undefined,

                // categories: selectedCategories.length > 0 ? selectedCategories : undefined,
                // genders: selectedGender.length > 0 ? selectedGender : undefined,
                // ages: selectedAges.length > 0 ? selectedAges : undefined

                selectedCategories: selectedCategories.length > 0 ? selectedCategories : undefined,
                selectedGenders: selectedGenders.length > 0 ? selectedGenders : undefined,
                selectedAges: selectedAges.length > 0 ? selectedAges : undefined
            };

            console.log('Request params:', params);

            const response = await axios.get('/survey/personal/list', {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: params,
                paramsSerializer: params => {
                    return qs.stringify(params, { arrayFormat: 'repeat' });
                }
            });

            console.log('Response data:', response.data);

            if (response.data.data.length > 0) {
                setSurveyList(prevList => page === 1 ? response.data.data : [...prevList, ...response.data.data]);
            } else {
                observer.current.disconnect();
            }
            setIsLoading(false);
        } catch (error) {
            console.log('Error:', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (observer.current) observer.current.disconnect();
    
    const handleIntersection = (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading) {
            setPage(prevPage => prevPage + 1);
        }
    };

    observer.current = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    });

    if (ref.current) observer.current.observe(ref.current);

    return () => {
        if (observer.current) observer.current.disconnect();
    };
}, [isLoading, ref]);

    useEffect(() => {
        if (page > 1) {
            getSurveyList(page, 6, "개인", selectedCategories, selectedGenders, selectedAges);
        }
    }, [page]);

    useEffect(() => {
        setSurveyList([]);
        setPage(1);
        getSurveyList(1, 6, "개인", selectedCategories, selectedGenders, selectedAges); //초기에 한번 호출
    }, [selectedCategories, selectedGenders, selectedAges]); // 필터 상태가 변경될 때마다 호출

    const handleCategoryChange = (categoryName) => {
        setSelectedCategories(prevCategories => prevCategories.includes(categoryName)
            ? prevCategories.filter(c => c !== categoryName)
            : [...prevCategories, categoryName]);
    };

    const handleGenderChange = (event) => {
        const gender = event.target.value;
        setSelectedGenders(prevGenders => prevGenders.includes(gender)
            ? prevGenders.filter(g => g !== gender)
            : [...prevGenders, gender]);
    };

    const handleAgeChange = (ageGroup) => {
        setSelectedAges(prevAges => prevAges.includes(ageGroup)
            ? prevAges.filter(age => age !== ageGroup)
            : [...prevAges, ageGroup]);
    };

    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState('');

    const openModal = (message) => {
        setModal(!modal);
        setMessage(message);
    };

    const closeModal = () => {
        setModal(!modal);
        setMessage('');
    };

    const CustomModal = ({ modal, message }) => {
        const modalStyle = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '520px',
                height: '320px',
                borderRadius: '16px'
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
                            style={{
                                color: "#fefefe",
                                marginTop: '2px',
                                transform: "scale(2, 2)",
                                position: "relative",
                                right: -475,
                                cursor: "pointer"
                            }}
                            onClick={closeModal}
                        />
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <div>
                        <img src={done} alt='done' style={{
                            marginTop: '15px',
                            transform: "scale(1.5, 1.5)",
                            position: "relative",
                            top: 95
                        }} />
                    </div>
                    <div>
                        <h2 style={{
                            color: "#ff0000",
                            position: "absolute",
                            bottom: 35,
                            left: 130,
                        }}>{message}</h2>
                    </div>
                </div>
            </Modal>
        )
    }

    return (
        <div className='container'>
            <div className='surveyBox-survey'>
                <div className='infoBox-survey'>
                    <FontAwesomeIcon icon={faHouse} size='lg' className='houseImg-survey' />
                </div>
                <div className='infoBox-survey'><span>설문조사</span></div>
                <div className='infoBox-survey'><span>설문조사(개인)</span></div>
            </div>
            <hr></hr>
            <div>
                <div style={{ marginTop: "15px", display: "flex", flexDirection: "row" }}>
                    <div style={{ marginLeft: "20px" }}>
                        <span>카테고리</span>
                        <CategoryFilter selectedCategories={selectedCategories} onCategoryChange={handleCategoryChange} />
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <span>성별</span>
                        <div style={{ display: "flex", marginTop: "10px", width: "100px", height: "100px", alignItems: "center", backgroundColor: "#eee" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                                    <input type='checkbox' className='checkbox' value="male" checked={selectedGenders.includes('male')} onChange={handleGenderChange} />
                                    <span>남</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <input type='checkbox' className='checkbox' value="female" checked={selectedGenders.includes('female')} onChange={handleGenderChange} />
                                    <span>여</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AgeFilter selectedAges={selectedAges} onAgeChange={handleAgeChange} />
                </div>
            </div>
            <hr></hr>
            <div className='surveyList'>
                {surveyList.map((survey, index) => (
                    <div className='survey-list' key={index}>
                        <Link to={`/survey/personal/list/${survey.surveyCode}/start`} style={{
                            textDecoration: "none", color: '#fefefe'
                        }}>
                            <div className='survey-title' style={{ display: "flex", justifyContent: "center" }}>
                                <span>{survey.surveyTitle}</span>
                            </div>
                            <div className='survey-list-content' style={{ cursor: 'pointer' }}>
                                <span>적립금 : {survey.surveyPerMoney}</span>
                                <span>기간 : {survey.surveyPeriodStart} ~ {survey.surveyPeriodStop}</span>
                            </div>
                        </Link>
                    </div>
                ))}
                {/* <div ref={ref} style={{ height: '1px' }} />
                {isLoading && <p>Loading...</p>} */}
            </div>
        </div>
    );
}

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
            <div style={{ marginRight: "20px" }}>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "8px" }}>
                    <div>
                        {categories.slice(0, 4).map(categoryName => (
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
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "8px" }}>
                    <div>
                        {categories.slice(4).map(categoryName => (
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
        <div style={{ marginLeft: "20px" }}>
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
                <div style={{ marginRight: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "row", marginBottom: "8px" }}>
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
                    <div style={{ display: "flex", flexDirection: "row" }}>
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

        
