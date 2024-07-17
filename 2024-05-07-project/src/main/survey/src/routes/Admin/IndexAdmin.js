import React, { useEffect, useState } from 'react'
import './AdminPage.css'
import Axios from 'axios';
import { useInView } from 'react-intersection-observer';

export default function IndexAdmin() {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [CompanyList, setCompanyList] = useState([]);
  const [page, setPage] = useState(1);
  const [ref,inView] = useInView();

  const load = () => {
    Axios.get(`/api/v1/adminpage/company/${page}/${17}`, {
      headers:{
        'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
      }
    })
    .then((response) => {
      setCompanyList(response.data.data);
      setPage(page + 1);
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if(inView) {
      console.log("스크롤 요청");
      load();
    }
    },[inView]);

  return (
    <>
      <div style={{
        width: '1348px',
        height: '600px',
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <div className='listBoxAdmin'>
          <h1>회사 회원가입 관리</h1>
          <ul id='AdminList'>
            {
              CompanyList.map(company => (
                <ol>
                  {company.companyName}
                  <div className='AdminBoxes'>
                    <button onClick={() => {
                      Axios.put(`/api/v1/adminpage/company/${company.companyCode}`, {
                        headers:{
                          'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
                        }
                      })
                      .then((response) => {
                        load();
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                    }}>승인</button>
                    <button onClick={() => {
                      Axios.delete(`/api/v1/adminpage/company/${company.companyCode}`, {
                        headers:{
                          'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
                        }
                      })
                      .then((response) => {
                        load();
                      })
                      .catch((err) => {
                        console.log(err);
                      })
                    }}>삭제</button>
                  </div>
                </ol>
              ))
            }
          </ul>
          <div ref={ref}></div>
        </div>
      </div>
    </>
  )
}