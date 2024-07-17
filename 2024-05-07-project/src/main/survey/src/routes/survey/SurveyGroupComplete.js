import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

//단체 설문조사 완료 시 뜨는 페이지
export default function SurveyGroupComplete() {

    

    const [isPressed, setIsPressed] = useState(false);

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
    
    return(
        <>
        {
            <div style={{display: "flex",
                justifyContent: "center",
                margin: "auto",
                marginTop : '150px'
                }}>
                <div style={{display: "flex",
                            justifyContent: "space-around",
                            alignContent: "center",
                            flexDirection: "column",
                            width: "400px",
                            height: "400px"
                            }}>
                    <FontAwesomeIcon icon={faCircleCheck} style={{color: "#198fc2",
                                                        fontSize: "60px",
                                                        transform: "scale(2, 2)"
                                                        }}/> 

                    <div style={{display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <span>소중한 의견 감사드립니다.</span>
                        <span>설문조사가 정상적으로 종료되었습니다.</span>
                    </div>     

                    <table className='survey-info-table'>
                        <tr>
                            <th style={{alignContent: "center",
                                        height: "35px",
                                        backgroundColor: "#e8e8e8",
                                        borderTop: "3px solid #79797c",
                                        borderBottom: "2px dotted #79797c"}}>조사명</th>
                            <th style={{display: "flex",
                                        justifyContent: "center",
                                        alignContent: "center",
                                        height: "35px",
                                        borderTop: "3px solid #79797c",
                                        borderBottom: "2px solid #79797c"}}>{}</th>
                        </tr>
                    </table>

                    <div style={{display: "flex",
                        justifyContent: "center"
                        }}>
                        {
                        <Link to={'/'}>
                            <input
                                type='button' 
                                value={"확인"}  
                                style={buttonStyle}
                                onMouseDown={() => setIsPressed(true)}
                                onMouseUp={() => setIsPressed(false)}
                                onMouseLeave={() => setIsPressed(false)}
                                onClick
                            />
                        </Link>
                        }
                    </div>
                </div>
            </div>
        }
        </>
    )
}