import React, { useEffect, useState } from 'react'
import arrow from '../../../images/arrow.png';
import search from '../../../images/search.png';
import logo2 from '../../../images/logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import IndexSurvey from '../../survey/IndexSurvey';



export default function Search() {
 

  
 let [text, setText] = useState('');
 const onChange = (e) =>{
  console.log(e.target.value)
  setText(e.target.value)

 }
const [data, setData] = useState([]);
const [searchDataList, setSearchDataList] = useState([]);
const [token,setToken] = useState(localStorage.getItem('token'));
const [categoryCode,setCategoryCode] = useState('');
const [catecoryList,setCategoryList] = useState([]);
// const [catecory,setCategory] = useEffect([]);





//검색창

const [query, setQuery] = useState('');
const navigate = useNavigate();

const handleChange = (e) => {
  setQuery(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  navigate('/survey/personal/list',
  {state: {query}});
}

const handleKeyPress = (e) => {
  if(e.key === 'Enter'){
    e.preventDefault();
    navigate('/survey/personal/list',
    {state: {query}});
    
  }
}

const getCategory = () => {
  axios.get('/api/v1/survey/category',{
    params : {page : 1,categoryCount : 4},
    headers:{
      'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
    }
  }).then((response) => {
    console.log(response.data.data);
    setCategoryList(response.data.data);
  }).catch((error) => {
    console.log(error);
  })
}

useEffect(() => {
  if(categoryCode !== ''){
    changeCategoryCount();
  }
  getCategory();
},[categoryCode]);


const changeCategory = (e) => {
  setCategoryCode(e.target.value);
  console.log(categoryCode);
}


const changeCategoryCount = () => {
  axios.put('/api/v1/survey/update',{
    categoryCode : categoryCode
  },{
    headers:{
      'Authorization' :`Bearer ${token}` //헤더에 토큰 추가
    }
  }).then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.log(error);
  })
}

const catecoryNames = catecoryList.map(category => category.categoryName).join();
  
  return (
    <>
  <div className='search-img-box'>
      <img className='search-img-url' src={logo2}></img> 
        <div className='search-search-container'>
            <select className='search-total-search' onChange={(e) => {changeCategory(e); changeCategoryCount();}}>
              <option value='통합검색'>통합검색</option>
              <option value='1'>교육</option>
              <option value='2'>사회</option>
              <option value='3'>경제</option>
              <option value='4'>기술</option>
              <option value='5'>건강</option>
              <option value='6'>미용</option>
              <option value='7'>취미</option>
              <option value='8'>기타</option>
            </select>

            <form className='search--search-form' onSubmit={handleSubmit}>
              <input className='search-search-input' type='text' value={query} onChange={handleChange} onKeyDown={handleKeyPress}></input>
              <button className='search-search-btn' type='submit'><img  className='search-search-img' src={search} ></img></button>               
            </form>
        </div>
        <div className='search-popular-search'>
          <span className='search-popular-search-word'>인기카테고리 : {catecoryNames}</span>
        </div>
    </div>
   
   
    

    </>
  )
}