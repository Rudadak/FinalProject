/* eslint-disable */
import {Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
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

import Posts1 from './Posts1';

// import 'antd/dist/antd.css';








const SiFind = (props) => {
  const {state} = useLocation();
  const [data, setData] = useState(state.responseData);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [userInput, setUserInput] = useState('');

  function imsi1(){
    if(userInput == null){
      setUserInput('');
    }
  }
  useEffect(() => imsi1, []);

  const getValue = (e) => {
    console.log(e)
    setUserInput(e.target.value)};

  const searched =  data.filter((item) =>
    item.name
  );

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  function playTts(){
        const currentData = currentPosts(searched);
    for(let i=0; i< currentData.length; i++){
      const asdfe = new SpeechSynthesisUtterance();
      asdfe.text = `${i+1}번 ${currentData[i].name}. ${currentData[i].rv}`; 
      window.speechSynthesis.speak(asdfe);
    }
    const asdfe = new SpeechSynthesisUtterance();
    asdfe.text = '입니다.';
    window.speechSynthesis.speak(asdfe);
  }

  useEffect(() => {
    window.speechSynthesis.cancel();
    playTts();
  }, [currentPage, searched]);




  
  return(
    <div className={props.col}>
    <div className='box01'>
      
      <div className='test1'>

      {/* <Navs /> */}
      <h1>리뷰 찾기</h1>
<font size='5.5'>『{state.textState}』</font>
      {/* <input onChange={getValue} value={userInput}/> */}
      
      {/* <Posts data={currentPosts(searched)} loading={loading}></Posts> */}
      <Posts1 data={searched} loading={loading}></Posts1>

      </div>
      {/* {console.log('이거임' +searched.length)} */}
      {/* <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={searched.length}
        paginate={setCurrentPage}
      ></Pagination> */}



      {/* {window.speechSynthesis.speak(asdfe)} */}
      

{/* 
        <input onChange={getValue} value={userInput} />


        {
          searched.map((a, i) => {
            return(
              <Card data={searched[i]} i={i+1}> </Card>
            )
          })
        } */}


      {/* {console.log('ddd' +searched)} */}
    </div>
    </div>
  );
};
































// const SiFind1 = () => {
//     const [text, setText] = useState('');

//     const onSubmit = () => {
//       navigate('./result', {state: text})
//     }
  
//     const navigate = useNavigate();
    

//     const { listen, listening, stop } = useSpeechRecognition({
//       onResult: (result) => {
//         setText(result);
//       },
//     });
  
  
  
//     const asdfe = new SpeechSynthesisUtterance()  
//   asdfe.text = "안녕하세요. 고글에 오신것을 환영합니다. 저희 사이트는 상품 검색을 통해 tts기능을 제공해 줍니다."
//   useEffect(() => window.speechSynthesis.speak(asdfe), [])
  

//     return(
//         <div>
//             <div>
//             <Navs />
//             <h1 >리뷰 찾기</h1>
//             <p>관련리뷰를 찾아보았어요</p>
//             </div>
            
//             <div>
//             <font size='15'><input style =  {{height: "130px",width: '80%'}} 
//      onChange = {(e) =>{
//      setText(e.target.value);
//      console.log(text);}} placeholder='입력해 주세요!!' value={text} ></input>
//      <button onMouseDown={listen} onMouseUp={stop} style={{marginleft:'20%', height: "130px",width: '20%'}}>
//      🎤
//    </button>{listening && <div>음성인식 활성화 중</div>}</font>
      
//       {console.log({text})}
//       <Button variant="primary" size="lg" state={text}  onClick={() => {
//     onSubmit();
//      }} style={{width: '100%'}}>
//         <p></p>
//         <p></p>
//         <p></p>
//         <br></br>
//       <font size='20'>유사도 검색</font>
//       <p></p>
//       <p></p>
//       <p></p>
//       <br></br>
//       </Button>
//             </div>
//         </div>
//         )
 

//   };




//   return(
//     <div className='search-box'>
      
//       <div className='test1'>
//       {loading && <div> loading... </div>}
//       <Navs />
//       <h1>제품찾기</h1>
//       <p>보고싶은 제품을 찾아보아요</p>
//       <input onChange={getValue} value={userInput}/>
//       </div>
      
//       <div style={{backgroundImage: `url('https://source.unsplash.com/random/1920x1080')`,
//       // backgroundRepeat: 'no-repeat',
//       backgroundSize: 'cover'
//     }}>
//       {/* <Posts data={currentPosts(searched)} loading={loading}></Posts> */}
//       <Posts data={searched} loading={loading}></Posts>

//       </div>
//       {/* {console.log('이거임' +searched.length)} */}
//       {/* <Pagination 
//         postsPerPage={postsPerPage}
//         totalPosts={searched.length}
//         paginate={setCurrentPage}
//       ></Pagination> */}



//       {/* {window.speechSynthesis.speak(asdfe)} */}
      

// {/* 
//         <input onChange={getValue} value={userInput} />


//         {
//           searched.map((a, i) => {
//             return(
//               <Card data={searched[i]} i={i+1}> </Card>
//             )
//           })
//         } */}


//       {/* {console.log('ddd' +searched)} */}
//     </div>

//   );
// };





function Card(props){
  const navigate = useNavigate();
  const navigateToPurchase = () => {
    navigate(`${props.data && "./" + props.data.id}`);
  };

  return(
    // <div className='si'>
    <div onClick = {navigateToPurchase}>0
      {/* <Link to={props.data && "./" + props.data.id}>
        <button> */}
      
      {props.data && props.data.name}<br/>
      {props.data && props.data.price}<br/>
      {/* </button>
      </Link> */}
    </div>
  )
}

export default SiFind;