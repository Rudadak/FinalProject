import React, {useEffect, useState, useLayoutEffect} from 'react';
import Images from "./components/Images";
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom';
import './Test1.css';


function Test1(){




  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const response = await axios.get(
  //       "http://192.168.0.42:8000/test/datas"
  //     );
  //     setData(response.data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);
  // console.log(data)
  
  // const {state} = useLocation();
  // const [userInput, setUserInput] = useState(state);
  
  // function imsi1(){
  //   if(userInput == null){
  //     setUserInput('');
  //   }
  // }
  // useEffect(() => imsi1, []);
  
  
  
  // const getValue = (e) => {
  //   console.log(e)
  //   setUserInput(e.target.value.toLowerCase())};
  
  // // 데이터 목록중, name에 사용자 입력값이 있는 데이터만 불러오기
  // // 사용자 입력값을 소문자로 변경해주었기 때문에 데이터도 소문자로
  //   const searched =  data.filter((item) =>
  //    item.name.toLowerCase().includes(userInput)
  //  );
  
  //  const asdfe = new SpeechSynthesisUtterance()
  //  asdfe.text = `검색페이지로 이동했습니다. 검색에 사용된 검색어는 ${userInput}입니다.` 
  //  const [searchLength,setSearchLength] = useState('')
  
  // useEffect(()=>{return(window.speechSynthesis.speak(asdfe))}, [])














  // const [images, setImages] = useState([])

  // useLayoutEffect(() => {
  //   fetch("http://192.168.0.42:8000/test/datas").then(
  //     response => response.json().then(data=>{
  //       setImages(data);  
  //     })
  //   )
  // }, [])
  // useEffect(() => { console.log(images); },[images]); 


  // useEffect(() => {
  //   const fetchData = async () => {

  //     const prdouct = await fetch('http://192.168.0.42:8000/test/datas/?format=json').then(
  //       response => response.json().then(data=>{
  //         setImages(data);}))
  //         console.log(images)
  //       setImages(prdouct);
  //       console.log(images)
  //   };
  //   fetchData();
  // }, [])





  return(
    <div>
      {/* {loading && <div> loading... </div>} */}
      <Images />
    </div>
  )

}

export default Test1;