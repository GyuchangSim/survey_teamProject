import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerSurviceBox() {
  return (
    <div style={{
        width : "280px",
        height : "150px",
        border : "1px solid black",
        borderRadius : "8px"}}>
        <p style={{
            margin : "5px 20px",
            fontSize : "23px",
           }}>고객센터</p>
        <hr style={{width : "260px" , margin : "auto"}}/>
        <div className='left-box-under'>
        {
            <Link to={'/notice'} style={{
            textDecoration : "none",
            color : "black"
            }}>
            <p style={{
                padding : "15px 20px",
                fontSize  : "15px"
            }}>• 공지사항</p>
            </Link>
        }
        {
            <Link to={'/question'} style={{
            textDecoration : "none",
            color : "black"
            }}>
            <p style={{
                padding : "15px 20px",
                fontSize : "15px"
            }}>• 자주 묻는 질문</p>
            </Link>
        }
        </div>
        </div>
  )
}
