/* eslint-disable */
import './App.css';
import {BrowserRouter, Routes, Route, Redirect, Link, useNavigate} from 'react-router-dom';
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
import SpeechRecognition from "react-speech-recognition";
// import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import { BsFileX, BsMicFill, BsTypeH1 } from "react-icons/bs";
import useLongPress from './use-long-press';
// import Test1 from './test1';
import axios from 'axios';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import blue from "@material-ui/core/colors/blue";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { dark } from '@material-ui/core/styles/createPalette';
// import CssBaseline from '@mui/material/CssBaseline';
import Info from './info';


// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// function MyApp() {
//   const theme = useTheme();
//   const colorMode = React.useContext(ColorModeContext);
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         width: '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         borderRadius: 1,
//         p: 3,
//       }}
//     >
//       {theme.palette.mode} mode
//       <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
//         {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//       </IconButton>
//     </Box>
//   );
// }

// export function ToggleColorMode() {
//   const [mode, setMode] = React.useState('light');
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     [],
//   );

//   const theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode],
//   );

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <MyApp />
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }


// import DarkModeToggle from "react-dark-mode-toggle";





// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

// import 'antd/dist/antd.css';
// import { useSpeechRecognition } from 'react-speech-kit';

function App() {


const [darkWhitek, setDarkWhite]= useState('on')
const [switch123, SetSwitch123]= useState(false)
function avsdf(){
  if (switch123 == false){
    SetSwitch123(!switch123)
    setDarkWhite('off')
    console.log(switch123)
    console.log(darkWhitek)
  }else{
    SetSwitch123(!switch123)
    setDarkWhite('on')
    console.log(switch123)
    console.log(darkWhitek)
  }
}





const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);


  return (

    <div className='App' >
      <Navs fuc={avsdf} col={darkWhitek}/>
      <Routes>
        <Route path = "/" element={<Home col={darkWhitek}/>} />
        <Route path = "/product" element={<Find fuc={avsdf} col={darkWhitek}/>} />
        {/* <Route path = "/store" element={<Store />} /> */}
        <Route path = "/camera" element={<Camera fuc={avsdf} col={darkWhitek}/>} />
        <Route path = "/product/:listId" element={< Products fuc={avsdf} col={darkWhitek}/>} />
        <Route path = "/camera/show" element={< Show fuc={avsdf} col={darkWhitek}/>} />
        <Route path = "/sifind" element={< Sifind fuc={avsdf} col={darkWhitek}/>} />
        {/* <Route path = "/test" element={< Test1 data={data} loading={loading}/>} /> */}
        <Route path = "/info" element={< Info/>} />
        
       </Routes>
      

   </div>
  );
}

function Home(props) {
  const [text, setText] = useState('');

  const onSubmit = () => {
    navigate('./product', {state: text})
  }
  const onSubmit1 = () => {
    navigate('./sifind', {state: text})
  }

  const navigate = useNavigate();

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setText(result);
    }
  });

  const [ttsExecuted, setTtsExecuted] = useState(false);

  const asdfe = new SpeechSynthesisUtterance();
  asdfe.text = "안녕하세요. 고글에 오신것을 환영합니다. 저희 사이트는 상품 검색을 통해 tts 기능을 제공합니다."

  useEffect(() => {
    if (!ttsExecuted) {
      setTtsExecuted(true);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(asdfe);
    }
  }, []);

  const [switch124, SetSwitch124] = useState(false);
  function sdf() {
    SetSwitch124(!switch124);
  }
  useEffect(() => {
    sdf();
  }, []);

  const { action, handlers } = useLongPress();

  const submitHandler = (e) => {
    axios.post('http://192.168.0.42:8000/test/sentence/', {query:text}).then(function (response) {
      if (response.status == '200' & text != '') {
        navigate('./Sifind', { state: { responseData: response.data, textState: text } })();
      }
    });
  };

  const onChangeText = e => {
    if (e.target.checked == false) {
      setDarkWhite("off");
    } else if (e.target.checked == true) {
      setDarkWhite("on");
    }
  };

  return (
    <div className={props.col}>
      <div>
        {/* <Navs /> */}
      </div>
      {/* style="display:inline-block; height:20px; width:100px;" */}
      {/* <span  >블랙테마
      <input type="checkbox" style={{width:'70px' , height:'50px' }} onClick={avsdf} />
      </span><p /> */}

      {/* <div>
        <font size= '5'>오늘 할 일: 쉬엄쉬엄 하기, 쉬기, 집에 가기</font>
        
      </div>  */}
      



 

     <font size='15'><input style =  {{width: '80%'}} 
     onChange = {(e) =>{
     setText(e.target.value);
     console.log(text);}} placeholder='입력해 주세요!!' value={text} ></input>
     <button onMouseDown={listen} onMouseUp={stop} onTouchStart={listen} onTouchEnd={stop} style={{width: '20%'}}>
     🎤
   </button>
   {listening && <div>음성인식 활성화 중</div>}
    
    
  
 
 {/* <button onClick={SpeechRecognition.startListening}> */}
        {/* <button
        onClick={() => SpeechRecognition.startListening({ continuous: true })}
      >
        <h3>
          <BsMicFill /> {listening ? "On" : "Off"}
        </h3>
      </button> */}
   </font>


      <div style={{height: '60vh'}} >
      {console.log({text})}
      <Button variant="primary" size="lg"  state={text} style={{width: '100%', height: '20vh'}} onClick={() => {
    onSubmit();
     }}>

      <font size='20' >검색</font>

      </Button>
      <br></br>
     <Link to="/camera">
      <button className='button2color' state={text}>

      <font color='white' size='20' > 카메라</font>

      </button>
      </Link>
    
      <Button style={{width: '100%', height: '20vh'}} variant="success" size="lg"  state={text}  type='submit' onClick={submitHandler}>
 
 
      <font size='20'>리뷰 찾기</font>

      </Button>

      </div>

      {/* <Button variant="dark" size="lg" href="/mypage">
      <font size='6'>마이페이지</font>
      </Button> */}

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

export function Navs(props){
  useEffect(()=>{window.speechSynthesis.cancel()}, []);
return(
  
  
  <Navbar bg="white" variant="white"  style={{height: '20vh'}}>
  <Container className={props.col}>
    <Link to="/" style={{ textDecoration: "none" }} className='me-auto'>
    {/* <h4><font color= 'white'><Link to ='/'>Rudadak &nbsp;&nbsp;&nbsp; </Link></font></h4> */}
    {/* <Nav className="me-auto">
    <Nav.Link href="/" className='App-go'> */}
      <h1 >
      
      <font color='#4285f4' size = '10' weight="bolder">G</font>
      <font color='#ea4335' size = '6' weight="bolder">o</font>
      <font color='#fbbc05' size = '6' weight="bolder">g</font>
      <font color='#4285f4' size = '6' weight="bolder">g</font>
      <font color='#34a853' size = '6' weight="bolder">l</font>
      <font color='#fbbc05' size = '6' weight="bolder">e</font>
      <font color='#ea4335' size = '6' weight="bolder">s</font>

      {/* <font color= 'white'>Rudadak &nbsp;&nbsp;&nbsp;</font> */}
      </h1>
      {/* </Nav.Link>
      <Nav.Link href="/"  >Home</Nav.Link>
      <Nav.Link href="/store">Store</Nav.Link>
      <Nav.Link href="/camera">Camera</Nav.Link>
    </Nav> */}
    </Link>
    
    
       <Link to="/info"  style={{ marginRight: 'auto' ,textDecoration: "none" }} ><h4>info</h4></Link>
       <Button onClick={()=>{window.speechSynthesis.cancel()}}>조용히</Button>
       {/* <Link to="/camera" style={{ marginRight: 'auto' , display:'grid', 
       gridAutoFlow:'column', gridTemplateColumns:'1fr', textDecoration: "none" }} ><h4>Camera</h4></Link> */}
      <h1 style={{textAlign:'right'}}><font size = '50pt'>🌜
      <input type="checkbox" style={{width:'70px' , height:'50px' }} onClick={()=>{props.fuc();}} />
      </font></h1>

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


