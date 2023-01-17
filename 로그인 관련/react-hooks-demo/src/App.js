import { useState } from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Login from './Login';
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect';

function App() {
  let [logo, setLogo] = useState('ReactBlog');
  return (
    <BrowserRouter>
    <div className="App">
      <div className = "black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'} }><Link to = "/">{ logo }</Link></h4>
      </div>
      <BrowserView>
        <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/list/:listId" element={<Login />} />

        </Routes>
      </BrowserView>
      <MobileView>
        <h4>모바일 뷰는 아직 준비 중입니다.</h4>
      </MobileView>
    </div>
  </BrowserRouter> 
  );
}

function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

function Home(){
  let post = '강남 우동 맛집2';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', 'https://react.tips/updating-javascript-object-property/', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [따봉1, 따봉변경1] = useState(0);
  let [따봉2, 따봉변경2] = useState(0);


  function 따봉개별(data) {
    let newArray = [...따봉];
    newArray[data] = newArray[data] + 1;
    따봉변경(newArray);
  }

  return(
    <div className="home">
      <div className='list'>
        <h4><Link to="/list/1">{ 글제목[0] }</Link> <span onClick={() => 따봉변경(따봉+1)}>❤️</span> { 따봉 } </h4>
        <p>1월 13일 발행</p>
      </div>
      <div className='list'>
        <h4><Link to="/list/2">{ 글제목[1] }</Link> <span onClick={() => 따봉변경1(따봉1+1) }>👍</span> { 따봉1 } </h4>
        <p>1월 13일 발행</p>
      </div>
      <div className='list'>
        <h4><Link to="/list/3">{ 글제목[2] }</Link> <span onClick={() => 따봉변경2(따봉2+1) }>💕</span> { 따봉2 } </h4>
        <p>1월 13일 발행</p>
      </div>
      <div className='list'>
        <h4><Link to="/list/1">{ 글제목[0] }</Link> <span onClick={() => 따봉변경(따봉+1)}>❤️</span> { 따봉 } </h4>
        <p>1월 13일 발행</p>
      </div>
      <div className='list'>
        <h4><Link to="/list/2">{ 글제목[1] }</Link> <span onClick={() => 따봉변경1(따봉1+1) }>👍</span> { 따봉1 } </h4>
        <p>1월 13일 발행</p>
      </div>
      <div className='list'>
        <h4><Link to="/list/3">{ 글제목[2] }</Link> <span onClick={() => 따봉변경2(따봉2+1) }>💕</span> { 따봉2 } </h4>
        <p>1월 13일 발행</p>
      </div>
      <div className='list'>ㅇㅇ
        <h4><Link to="/list/1">{ 글제목[0] }</Link> <span onClick={() => 따봉변경(따봉+1)}>❤️</span> { 따봉 } </h4>
        <p>1월 13일 발행</p>
      </div>
      <div className='list'>
        <h4><Link to="/list/2">{ 글제목[1] }</Link> <span onClick={() => 따봉변경1(따봉1+1) }>👍</span> { 따봉1 } </h4>
        <p>1월 13일 발행</p>
      </div>
      <div className='list'>
        <h4><Link to="/list/3">{ 글제목[2] }</Link> <span onClick={() => 따봉변경2(따봉2+1) }>💕</span> { 따봉2 } </h4>
        <p>1월 13일 발행</p>
      </div>
      <div className='list'>
        <h4><Link to="/list/1">{ 글제목[0] }</Link> <span onClick={() => 따봉변경(따봉+1)}>❤️</span> { 따봉 } </h4>
        <p>1월 13일 발행</p>
      </div>
      <div className='list'>
        <h4><Link to="/list/2">{ 글제목[1] }</Link> <span onClick={() => 따봉변경1(따봉1+1) }>👍</span> { 따봉1 } </h4>
        <p>1월 13일 발행</p>
      </div>
      <div className='list'>
        <h4><Link to="/list/3">{ 글제목[2] }</Link> <span onClick={() => 따봉변경2(따봉2+1) }>💕</span> { 따봉2 } </h4>
        <p>1월 13일 발행</p>
      </div>




      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글 수정</button>
      <button onClick={()=>{
        let copy1 = [...글제목];
        console.log(copy1)
        copy1 = copy1.sort();
        console.log(copy1)
        글제목변경(copy1);
      }}>글 정렬</button>

    <Modal></Modal>
    </div>
  )
}

export default App;