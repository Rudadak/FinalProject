/* eslint-disable */

import React, {useState, useEffect, useCallback} from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Navs} from './App';
import './Find.css';
import { useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import Posts from './Posts';
import Pagination from "react-js-pagination";
import {usePageLeave, usePrevious} from 'react-use';
import { useSpeechRecognition } from 'react-speech-kit';
import Tts1 from './components/tts1';








const Find = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const {state} = useLocation();
  const [userInput, setUserInput] = useState(state ? state : '');
  const [ttsExecuted, setTtsExecuted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://192.168.0.23:8000/test/datas/"
      );
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const getValue = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const searched = data.filter((item) =>
    item.name.toLowerCase().includes(userInput)
  );

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  
  const [searchLenght, setSearchLength] = useState(searched && searched.length)

  const asdfe = new SpeechSynthesisUtterance();
  asdfe.text = `검색페이지로 이동했습니다.  ${userInput ? '검색에 사용된 검색어는' + userInput + '입니다.' : ''}`;

  useEffect(() => {
    if (!ttsExecuted) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(asdfe);
    }
  }, [userInput]);


  asdfe.addEventListener("end", () => {
    setTtsExecuted(true);
  });
  
  return (
    <div className={props.col}>
      <div>
        <div className="box01">
          {loading && <div> loading... </div>}
          <font size='200%'>
            <h1>제품찾기</h1>
            <input onChange={getValue} value={userInput} style={{textAlign:'center'}}/>
          </font>

          <Posts
            data={searched}
            loading={loading}
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};



const Posts = ({ data, loading, currentPage, postsPerPage, setCurrentPage }) => {
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentData = data.slice(indexOfFirst, indexOfLast);

  return (
    <>
      {loading && <div> loading... </div>}
      {currentData.map((a, i) => {
        return (
          <Card data={currentData[i]} key={i} />
        );
      })}
      <Paging
        page={currentPage}
        count={data.length}
        setPage={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </>
  );
};



const Paging = ({page, count, setPage}) => {

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={3}
      totalItemsCount={count}
      pageRangeDisplayed={4}
      onChange={handlePageChange}
      linkClass="page-link"
      itemClass="page-item"
    />
  );
};

function Card(props){
    const navigate = useNavigate();
    const navigateToPurchase = () => {
      navigate(`${props.data && "./" + props.data.id}`);
    };
  
    return(

      <div className='new' onClick = {navigateToPurchase}>

        <h1>{props.data && props.data.name }<br/></h1>
        {props.data && props.data.price}

      </div>

    )
  }

  
export function Products(props){
  
  const params = useParams();
  const listId = params.listId;
  const [data1, setData1] = useState(null);




  

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      const response = await axios.get(
        `http://192.168.0.23:8000/test/data/${listId}`
      );
      setData1(response.data);
      // setLoading(false);
    };
    fetchData();
  }, []);



  useEffect(() => {
    if (data1 == null) {
      setData1('');
    }
  }, []);
  










  // const onClicks1 = async () => {
  //   try{
  //     const response1 = await axios.get(
  //       `http://192.168.0.42:8000/test/data/${listId}`,
  //     );
  //     setData1(response1.data);
  //     console.log(response1)
  //   } catch (e) {
  //     // console.log(e)
  //   }
  // };
  // useEffect(() => onClicks1, []);






// const playing
const [ourText, setOurText] = useState("")
const msg = new SpeechSynthesisUtterance()

const speechHandler = (e) => {
  window.speechSynthesis.cancel()
  setOurText(e)
  msg.text = e
  window.speechSynthesis.speak(msg)
}

const Demo = () => {
  usePageLeave(() => window.speechSynthesis.cancel());
}

useEffect(()=> {window.speechSynthesis.cancel()})

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


  return(
    <div className={props.col}>
      {/* <Navs />  */}

      <div className='box01'>
      <div className='new1' onClick={() => speechHandler(
        "제품명은 " + data1.name + "," +
        "가격은 " + data1.price + "원" + "," +
        "카테고리는 " + data1.categoriy + "," +
        "제조사는 " + data1.manufacturer + "," +
        "용량은 " + data1.period +"밀리리터" + "," +
        "기타 사항으로는 " + data1.etc + "입니다."
      )}>

        {/* {listId}<br/> */}
      제품명 : {data1 && data1.name}<br/>

      가격 : {data1 && data1.price}<br/>
  
      카테고리 : {data1 && data1.categoriy}<br/>
      제조사 : {data1 && data1.manufacturer}<br/>
      용량 : {data1 && data1.period}<br/>
      👍 {data1 && data1.etc}<br/>

      {/* <button onClick={enablePrevent}>Protect</button> */}
      
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

      {/* <button onClick={() => window.speechSynthesis.cancel()}>dd</button> */}
      
      <div className='new1' onClick={() => speechHandler(
        "# 리뷰키워드, " + data1.keyword 
      )}>
        # 리뷰키워드<br/>
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