/* eslint-disable */
import {Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
import {Navs} from './App';
import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Show = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const {state} = useLocation();
  // console.log({state})
  useEffect(()=> setData(state), [])
  console.log(data)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const response = await axios.get(
  //       "http://192.168.0.59:8000/test/data/1"
  //     );
  //     setData(response.data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  // console.log(data);



  const [ourText, setOurText] = useState("")
  const msg = new SpeechSynthesisUtterance()

  const speechHandler = (msg) => {
    msg.text = ourText
    window.speechSynthesis.speak(msg)
  }


  return(
    <div>
        <Navs />
      <div>
        <Ocr data={data} loading={loading}/>

      {/* <Ocr data={state} loading={loading} /> */}


      </div>
   
    </div>
    
  );
};


const Ocr = ({ data, loading }) => {
    const [ourText, setOurText] = useState("")
    const msg = new SpeechSynthesisUtterance()
    
  const speechHandler = (e) => {
    const msg = new SpeechSynthesisUtterance()
    setOurText(e)
    msg.text = ourText
    window.speechSynthesis.speak(msg)
  }
    return (
      <div>
      <div className='new1' onClick={() => speechHandler(data.text)}>
        {loading && <div> loading... </div>}
        {console.log(data)}
        {data.text}<p/>
        </div>
        
        <div className='new1' onClick={() => speechHandler(data.title)}>
        
        {data.title}
        
        </div>
        </div>
    );
  };



export default Show;