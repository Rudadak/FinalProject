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



const Find = () => {
  const [data, setData] = useState([]);


  // const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

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

  console.log(data);



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
    const searched =  data && data.filter((item) =>
     item.name.toLowerCase().includes(userInput)
   );
  
   console.log(data)

   const indexOfLast = currentPage * postsPerPage;
   const indexOfFirst = indexOfLast - postsPerPage;
   const currentPosts = (posts) => {
     let currentPosts = 0;
     currentPosts = posts.slice(indexOfFirst, indexOfLast);
     return currentPosts;
   };

  return(
    <div className='search-box'>
      {loading && <div> loading... </div>}
      <Navs />
      <h1>제품찾기</h1>
      <p>보고싶은 제품을 찾아보아요</p>
      <input onChange={getValue}/>


      <Posts data={currentPosts(searched)} loading={loading}></Posts>

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



      {data && console.log(data.length)}
      
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
    <div className='heading-1'>
    <div className='new' onClick = {navigateToPurchase}>
      {/* <Link to={props.data && "./" + props.data.id}>
        <button> */}

      {props.data && props.data.name}<br/>
      {props.data && props.data.price}<br/>
      {/* </button>
      </Link> */}
    </div>
    </div>
    // </div>
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
      console.log(response1)
    } catch (e) {
      console.log(e)
    }
  };
  useEffect(() => onClicks1, []);
  





// const playing



  return(
      <div >
      <Navs />
      <div className= 'heading-1'>
      <div className='new1'>

        {listId}<br/>
      제품명 : {data1 && data1.name}<br/>

      가격 : {data1 && data1.price}<br/>
  
      카테고리 : {data1 && data1.categoriy}<br/>
      제조사 : {data1 && data1.manufacturer}<br/>
      용량 : {data1 && data1.period}<br/>
      👍 {data1 && data1.etc}<br/>

      </div>
      <div>
        <br></br>
      <AudioExample />
      {/* <button onClick={start}>dd</button>
      <button onClick={stop}>dd</button> */}
      </div>
      <div className='new1'>
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