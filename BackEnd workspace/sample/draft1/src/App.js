import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import{BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import React, { useState } from 'react';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';



function App() {

  // let [로그인,로그인변경] = useState('로그인')

  return (
      <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
      </div>

    
  );
}

function Home() {
  return(
    <div>
      <Head/>
      <div>
      안녕하세요
      <LoginButton/>
      </div>
    </div>
  );
}

function Head(){
  return(
    <div>
    <header>위 페이지는 루다닥에서 제공합니다.</header>
    </div>
  );

}


function LoginButton(){
  return(
    <div>
    <nav>
        <Button variant="outlined">
          <Link to ={'/login'}>로그인</Link><br/>
        </Button>
    </nav> -
      <Routes>
        {/* <Route path='/' element={<Home />}/> */}
        <Route path='/login' element={<Login />}/>
      </Routes>
    <footer>프로젝트 입니다.</footer>
    </div>
  );

}

function Login() {
  return(
    <div>
      <div>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
     </ButtonGroup>
      </div>
    </div>
  );
}

export default App; 
