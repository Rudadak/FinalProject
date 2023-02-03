/* eslint-disable */
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import {Button, Navbar, Container, Nav, ToggleButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Find from './Find';
import Datasheet from './Find';
import {Products} from './Find';
import React, { useState, useEffect, useCallback } from 'react';
import Camera from './Camera';
import Show from './Show';
import Sifind from './Sifind';
import { useSpeechRecognition } from 'react-speech-kit';
import {Navs} from './App';
// import 'antd/dist/antd.css';


const SiFind = () => {
    const [text, setText] = useState('');

    const onSubmit = () => {
      navigate('/product', {state: text})
    }
  
    const navigate = useNavigate();
    

    const { listen, listening, stop } = useSpeechRecognition({
      onResult: (result) => {
        setText(result);
      },
    });
  
  
  
    const asdfe = new SpeechSynthesisUtterance()  
  asdfe.text = "안녕하세요. 고글에 오신것을 환영합니다. 저희 사이트는 상품 검색을 통해 tts기능을 제공해 줍니다."
  useEffect(() => window.speechSynthesis.speak(asdfe), [])
  

    return(
        <div>
            <div>
            <Navs />
            </div>
            
            <div>
            <font size='15'><input style =  {{height: "130px",width: '80%'}} 
     onChange = {(e) =>{
     setText(e.target.value);
     console.log(text);}} placeholder='입력해 주세요!!' value={text} ></input>
     <button onMouseDown={listen} onMouseUp={stop} style={{marginleft:'20%', height: "130px",width: '20%'}}>
     🎤
   </button>{listening && <div>음성인식 활성화 중</div>}</font>

      {console.log({text})}
      <Button variant="primary" size="lg" state={text}  onClick={() => {
    onSubmit();
     }} style={{width: '100%'}}>
        <p></p>
        <p></p>
        <p></p>
        <br></br>
      <font size='20'>유사도 검색</font>
      <p></p>
      <p></p>
      <p></p>
      <br></br>
      </Button>
            </div>
        </div>
        )
 

  };



export default SiFind;