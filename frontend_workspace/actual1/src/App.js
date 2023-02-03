/* eslint-disable */
import './App.css';
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

// import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/product" element={<Find />} />
        {/* <Route path = "/store" element={<Store />} /> */}
        <Route path = "/camera" element={<Camera />} />
        <Route path = "/product/:listId" element={< Products/>} />
        <Route path = "/camera/show" element={< Show/>} />
        <Route path = "/sifind" element={< Sifind/>} />
        
       </Routes>

    </div>
  );
}

function Home(){
  const [text, setText] = useState('');

  const onSubmit = () => {
    navigate('./product', {state: text})
  }

  const navigate = useNavigate();
  
  const [value12, setValue12] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      // 음성인식 결과가 value 상태값으로 할당됩니다.
      // setValue12(result);
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
        {/* <font size= '30'>오늘 할 일: 쉬엄쉬엄 하기, 쉬기, 집에 가기</font> */}
        
      </div>


      <div className="d-grid gap
      -2">

     <font size='15'><input style =  {{height: "130px",width: '80%'}} 
     onChange = {(e) =>{
     setText(e.target.value);
     console.log(text);}} placeholder='입력해 주세요!!' value={text} ></input>
     <button onMouseDown={listen} onMouseUp={stop} style={{marginleft:'20%', height: "130px",width: '20%'}}>
     🎤
   </button>{listening && <div>음성인식 활성화 중</div>}</font>

      {console.log({text})}
      <Button variant="primary" size="lg"  state={text}  onClick={() => {
    onSubmit();
     }}>
        <p></p>
        <p></p>
        <p></p>
        <br></br>
      <font size='20'>검색</font>
      <p></p>
      <p></p>
      <p></p>
      <br></br>
      </Button>
      <Button variant="secondary" size="lg" href="/camera">
      <p></p>
      <p></p>
      <p></p>
      <br />
      <font size='20'>카메라</font>
      <p></p>
      <p></p>
      <p></p>
      <br />
      </Button>
      <Button variant="success" size="lg" href="/sifind">
      <p></p>
      <p></p>
      <p></p>
      <br />
      <font size='20'>유사도 검색</font>
      <p></p>
      <p></p>
      <p></p>
      <br />
      </Button>
      {/* <Button variant="dark" size="lg" href="/mypage">
      <font size='6'>마이페이지</font>
      </Button> */}
      </div>
    </div>
  )
}

function Product(){
return(
  <div>
    <div>
    <Navs />
    </div>
    <div>
      <p>제품명</p>
      <p>제조사</p>
      <p>카테고리</p>
      <p>가격</p>
      <p>용량</p>
      <p>비고</p>
    </div>
    <div>
      긍정/촉촉한
    </div>
    <div>
      음성ttsㄴㄷㅇ
    </div>
  </div>
) 
}

export function Navs(){
  useEffect(()=>{window.speechSynthesis.cancel()}, []);
return(
  
  <Navbar bg="white" variant="white"  className='heading-1'>
  <Container>
    {/* <h4><font color= 'white'><Link to ='/'>Rudadak &nbsp;&nbsp;&nbsp; </Link></font></h4> */}
    <Nav className="me-auto">
    <Nav.Link href="/" className='App-go'><h4>
      
      <font color='#4285f4' size = '10' weight="bolder">G</font>
      <font color='#ea4335' size ='6' weight="bolder">o</font>
      <font color='#fbbc05' size = '6' weight="bolder">g</font>
      <font color='#4285f4' size = '6' weight="bolder" >g</font>
      <font color='#34a853' size = '6' weight="bolder">l</font>
      <font color='#fbbc05' size = '6' weight="bolder">e</font>
      <font color='#ea4335' size = '6' weight="bolder">s</font>

      {/* <font color= 'white'>Rudadak &nbsp;&nbsp;&nbsp;</font> */}
      </h4></Nav.Link>
      <Nav.Link href="/"  >Home</Nav.Link>
      {/* <Nav.Link href="/store">Store</Nav.Link> */}
      <Nav.Link href="/camera">Camera</Nav.Link>

    </Nav>
  </Container>
</Navbar>

)
};

// function Store(){
//   return(
//     <div>
//       <div>
//       <Navs /> 
//       </div>
//       <div>
//         안내사항
//       </div>
//       <div>
//         내부위치
//       </div>
//       <div>
//         기타
//       </div>
//     </div>
//   )
// }

// function Camera(){
//   return(
//     <div>
//       <div>
//         <Navs />
//       </div>
//       <div>
//         카메라 어플
//       </div>
//     </div>
//   )
// }





export default App;
