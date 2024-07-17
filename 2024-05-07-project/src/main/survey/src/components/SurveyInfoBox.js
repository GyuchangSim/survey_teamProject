import { Link } from "react-router-dom";


import React from 'react'

export default function InfoBox() {
  return (
    <div style={{
          width : "280px", 
          height : "150px",
          border : "1px solid black",
          borderRadius : "8px"}}>
        <p style={{
          margin : "5px 20px",
          fontSize : "23px", 
          }}>안내</p>
        <hr style={{width : "260px" , margin : "auto"}}/>
        <div>
        {
            <Link to={'/webinfo'} style={{
              textDecoration : "none",
              color : "black"
            }}>
            <p style={{
              padding : "15px 20px",
              fontSize : "15px"
            }}>• 웹사이트 소개</p>
            </Link>
        }
        {
            <Link to={'/surveyinfo'} style={{
              textDecoration : "none",
              color : "black"
            }}>
            <p style={{
              padding : "15px 20px",
              fontSize : "15px"
            }}>• 설문조사 안내</p>
            </Link>
        }
        </div>
    </div>
  )
}