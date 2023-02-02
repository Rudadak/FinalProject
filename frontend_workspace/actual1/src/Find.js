/* eslint-disable */

import React, {useState, useEffect, useCallback} from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Navs} from './App';
import './Find.css';
import { useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Posts from './Posts';
import Pagination from "./Pagination";
import {usePageLeave, usePrevious} from 'react-use';


// import { Pagination } from 'antd';

// const findnv = () => (
//   <>
//     <Pagination simple defaultCurrent={2} total={50} />
//     <br />
//     <Pagination disabled simple defaultCurrent={2} total={50} />
//   </>
// );

const Find = () => {
  const [data, setData] = useState([]);


  // const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://192.168.0.59:8000/test/datas"
      );
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // console.log('awerawef' +data);



  const {state} = useLocation();


  const [userInput, setUserInput] = useState(state);

  function imsi1(){
    if(userInput == null){
      setUserInput('');
    }
  }
  useEffect(() => imsi1, []);



  const getValue = (e) => {
    console.log(e)
    setUserInput(e.target.value.toLowerCase())};

  // <input onChange={getValue}/>


 // 데이터 목록중, name에 사용자 입력값이 있는 데이터만 불러오기
 // 사용자 입력값을 소문자로 변경해주었기 때문에 데이터도 소문자로
    const searched =  data.filter((item) =>
     item.name.toLowerCase().includes(userInput)
   );


   const indexOfLast = currentPage * postsPerPage;
   const indexOfFirst = indexOfLast - postsPerPage;
   const currentPosts = (posts) => {
     let currentPosts = 0;
     currentPosts = posts.slice(indexOfFirst, indexOfLast);
     return currentPosts;
   };

   const asdfe = new SpeechSynthesisUtterance()
   asdfe.text = `검색페이지로 이동했습니다. 검색에 사용된 검색어는 ${userInput}, 검색결과는 ${searched} 건입니다.`  
   useEffect(() =>  window.speechSynthesis.speak(asdfe), [])

  
  return(
    // {{background: `url('https://source.unsplash.com/random/1920x1080')`}}
    <div className='search-box'>
      
      <div className='test1'>
      {loading && <div> loading... </div>}
      <Navs />
      <h1>제품찾기</h1>
      <p>보고싶은 제품을 찾아보아요</p>
      <input onChange={getValue} value={userInput}/>
      </div>
      
      <div style={{backgroundImage: `url('https://source.unsplash.com/random/1920x1080')`,
      // backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <Posts data={currentPosts(searched)} loading={loading}></Posts>
      </div>
      {/* {console.log('이거임' +searched.length)} */}
      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={searched.length}
        paginate={setCurrentPage}
      ></Pagination>
      

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

  );
};




function Card(props){
  const navigate = useNavigate();
  const navigateToPurchase = () => {
    navigate(`${props.data && "./" + props.data.id}`);
  };

  return(
    // <div className='si'>
    <div onClick = {navigateToPurchase}>
      {/* <Link to={props.data && "./" + props.data.id}>
        <button> */}
      
      {props.data && props.data.name}<br/>
      {props.data && props.data.price}<br/>
      {/* </button>
      </Link> */}
    </div>
  )
}




// function CardList({data}) {
//   console.log(data);
//   return(
//     <div>
//       {data.map((data) =>{
//         const {name, price} = data;
//         return <Card key={name} price={price}/>;
//       })}
//     </div>
//   );
// }



export function Products(){
  const params = useParams();
  const listId = params.listId;
  const [data1, setData1] = useState(null);

  const onClicks1 = async () => {
    try{
      const response1 = await axios.get(
        `http://192.168.0.59:8000/test/data/${listId}`,
      );
      setData1(response1.data);
      // console.log(response1)
    } catch (e) {
      // console.log(e)
    }
  };
  useEffect(() => onClicks1, []);
  





// const playing
const [ourText, setOurText] = useState("")
const msg = new SpeechSynthesisUtterance()
const speechHandler = (e) => {
  const msg = new SpeechSynthesisUtterance()
  setOurText(e)
  msg.text = ourText
  window.speechSynthesis.speak(msg)}
  const Demo = () => {
    usePageLeave(() => window.speechSynthesis.cancel());}

    const usePreventLeave = () => {
      const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
      };
      const enablePrevent = () => {
        window.speechSynthesis.cancel()
      };

      return { enablePrevent };
    };

      const {enablePrevent} = usePreventLeave();
// const asdfe = new SpeechSynthesisUtterance()  
// asdfe.text = "제품명은 " + data1.name + "," +
// "가격은 " + data1.price + "원" + "," +
// "카테고리는 " + data1.categoriy + "," +
// "제조사는 " + data1.manufacturer + "," +
// "용량은 " + data1.period +"밀리리터" + "," +
// "기타 사항으로는 " + data1.etc + "입니다."
// useEffect(() => window.speechSynthesis.speak(asdfe), [])


  return(
      <div >
      <Navs /> 

      <div style={{backgroundImage: `url('https://source.unsplash.com/random/1920x1080')`,
      // backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div className='new' onClick={() => speechHandler(
        "제품명은 " + data1.name + "," +
        "가격은 " + data1.price + "원" + "," +
        "카테고리는 " + data1.categoriy + "," +
        "제조사는 " + data1.manufacturer + "," +
        "용량은 " + data1.period +"밀리리터" + "," +
        "기타 사항으로는 " + data1.etc + "입니다."
      )}>

        {listId}<br/>
      제품명 : {data1 && data1.name}<br/>

      가격 : {data1 && data1.price}<br/>
  
      카테고리 : {data1 && data1.categoriy}<br/>
      제조사 : {data1 && data1.manufacturer}<br/>
      용량 : {data1 && data1.period}<br/>
      👍 {data1 && data1.etc}<br/>
      <button onClick={enablePrevent}>Protect</button>
      </div>
      <div>
        <br></br>
      {/* <AudioExample /> */}
      {/* <button onClick={start}>dd</button>
      <button onClick={stop}>dd</button> */}
      {/* <button onClick={() => speechHandler(
        "제품명은 " + data1.name + "," +
        "가격은 " + data1.price + "원" + "," +
        "카테고리는 " + data1.categoriy + "," +
        "제조사는 " + data1.manufacturer + "," +
        "용량은 " + data1.period +"밀리리터" + "," +
        "기타 사항으로는 " + data1.etc + "입니다."
      )}>SPEAK</button> */}
      </div>
      <button onClick={() => window.speechSynthesis.cancel()}>dd</button>
      <div className='new'>
        추천 내용<br></br>
        {data1 && data1.keyword}
      </div>
      </div>
    </div>

  )
};
  


const Search = () => {
  const [data2, setData] = useState({
    id: ''
  });
}




function AudioExample() {
  let audio = new Audio('../audio/tts.mp3') 
  const start = () => { audio.play() }
  const stop = () => { audio.pause()} 
  return (<div> <div> <Button onClick={start} >play</Button> 
  <div><Button onClick={stop}>stop</Button></div></div></div>)}



/* <ReactAudioPlayer
   let audio = new ('../audio/tts.mp3') 
   const start = () => { audio.play() }
   return ( <div> <button onClick={start} >play</button> </div> )}
/> */

  //*function AudioExample1() {
  //   let [audioPlay, setAudioPlay] = useState(True);
  //   let audio = new Audio('../audio/tts.mp3') 
  //   const start = () => {if(audioPlay == false){
  //     setAudioPlay(!audioPlay);
  //     audio.play();}else{
  //       setAudioPlay(!audioPlay);
  //       audio.pause();
  //     }
  //   start();}





// const useAudio = url => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(false);

//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//       playing ? audio.play() : audio.pause();
//     },
//     [playing]
//   );

//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, []);

//   return [playing, toggle];
// };

// const Player = ({ url }) => {
//   const [playing, toggle] = useAudio(url);

//   return (
//     <div>
//       <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
//     </div>
//   );
// };





export default Find;