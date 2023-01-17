import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

function App() {
  let [logo, setLogo] = useState('시각장애인 서비스');
  return (
    <BrowserRouter>
    <div className="App">
      <div className = "black-nav">
        <h1 style={ {color : 'red', fontSize : '40px'} }>{ logo }</h1>
        <Link to="/test">
        <Button type= "button" color="secondary" variant="contained"><h4>로그인</h4></Button>
      </Link>
      </div>

        <div>
        <Routes>
          <Route path = "/" element={<Home />} />
        </Routes>
        </div>
    </div>
    
    </BrowserRouter>
  );
}

function Home(){
  return(
    <div className="home">
      <div calssName='abc'>
ㅁ
      </div>
    </div>
  )
}
export default App;
