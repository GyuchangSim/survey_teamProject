import Axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
export default function IndexSurveyPaymentResult() {

    const location = useLocation();
    //현재 로케이션값을 통해 어떤 값을 가져와야하는지 알 수 있다.
    console.log(location);
    //search르 통해서 ?뒤에 붙은 값을 가져온다
    const url = location.search;
    //=뒤에 붙은 pg_token값을 가져온다.
    const pgToken = url.split('=')[1];
    //최종 token값이 완성된다.
    console.log(pgToken);

    const [data, setData] = useState(); 
      
    const handleApprove = () => {
      Axios.get('/payment/success', {
        params: {"pg_token" : pgToken}
      })
      .then((response) => {
        setData(response.data);
        window.location.href = 'http://localhost:3000'
      })
      .catch((err) => {
        console.log(err);
      })
    }

  return (
    <>  
      <div style={{
        display: 'flex',
        width: '400px',
        height: '600px',
        margin: 'auto'
      }}>
        <button onClick={handleApprove} style={{
          cursor : 'pointer',
          backgroundColor: '#0f3360',
          color: 'white',
          width: '400px',
          height: '50px',
          borderRadius: '5px',
          margin: 'auto',
          fontSize: '20px'
        }}>
          버튼을 누르면 결제가 완료됩니다.
        </button>
      </div>
    </>
  )
}
