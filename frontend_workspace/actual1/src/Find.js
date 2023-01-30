/* eslint-disable */

import React, {useState, useEffect, useCallback} from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Navs} from './App';
import './Find.css';
import { useNavigate} from 'react-router-dom';
// import sample1 from './sample1.mp3'
// import sample2 from './sample2.mp3'
// import sample3 from './sample3.mp3'
// import sample4 from './sample4.mp3'

// const handleClick = (e) => {
//   const navigate = useNavigate();
//   navigate('/App.js', {state: e.target.value});
// }


const Find = () => {
  const [data, setData] = useState(null);
  const [num12, num12change] = useState(3)
  // const searchData = data.filter((data) => 
  //   {data.name.toLowerCase().includes(userInput.toLowerCase());
  // );


  // const location = useLocation.state
  // 여기 고쳐야됨
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
    
    



  const url = "http://192.168.0.59:8000/test/datas"
//   axios
//     .get(url)
//     .then((res)=> {
//         setData(res.data);
//         console.log("성공");
//     })
//     .catch(error => {
//         console.log("에러");
//     })



//   function GetPost() {
//     axios.get("http://127.0.0.1:8000/test/datas")
//       .then(response => {
//         setData(response.data);
//         console.log(response);
//       })
//       .catch(error => {
//         console.error(error);
//       })
//   }


  const onClicks = async () => {
    try{
      const response = await axios.get(
        'http://192.168.0.59:8000/test/datas',
      );
      setData(response.data);
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  };
  useEffect(() => onClicks, []);




  function Compare() {
      return (
        <div>
          {
            {userInput} != null
            ? <p>{userInput}</p>
            : <p>{setUserInput('개쩌는')}</p>
          }
        </div>
      )
    } 
  //   if ( userInput != null ) {
  //     return userInput;
  //   } else {
  //     return '';
  //   }
  // } 
  




  console.log(state)
  

  return(
    <div className='search-box'>
      <Navs />
      <h1>제품찾기</h1>
      <p>보고싶은 제품을 찾아보아요</p>
      {/* {onClicks} */}
    {/* {onClicks} */}     
      {/* <button onClick={onClicks}>예쁘게 불러오기</button>
        {console.log(data)}
      <input></input>

      <br /><br /> */}
      {/* {data && <li>{JSON.stringify(data, ['id', 'name'], 2)}</li>}
      {data && <li>{JSON.stringify(data, ['id'], 2)}</li>}
      {data && <li>{JSON.stringify(data, ['name'], 2)}</li>} */}
      {/* {data && <li>id: {data[1].id}</li>}
      {data && <li>name: {data.name}</li>} */}

{/* 링크 클릭 가능하게 넘어가는 기능 */}
      {/* {data && data.map(function(a){
          return(
            <div>
              <h4>
                <Link to={"./" + a.id}>토너 이름: {a.name}</Link>
              </h4>
              <p></p>

            </div>
          )
        })} */}

        {/* {console.log(userInput)} */}



        <input onChange={getValue} value={userInput} />


        {/* {data && searched.map((item) => (
          <Card key={item.name} {...item} />
        ))}
        {console.log(searched)} */}

        {data &&
          searched.map((a, i) => {
            return(
              <Card data={searched[i]} i={i+1}> </Card>
            )
          })
        }
{/* 
        <Card data={data && data[0]} />
        <Card data={data && data[1]} />
        <Card data={data && data[2]} /> */}

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
    <div className='new' onClick = {navigateToPurchase}>
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
      console.log(response1)
    } catch (e) {
      console.log(e)
    }
  };
  useEffect(() => onClicks1, []);
  return(
    <>
      <Navs />
      <div className='new1'>

        {listId}<br/>
      {data1 && data1.name}<br/>

      {data1 && data1.price}<br/>
  
      {data1 && data1.categoriy}<br/>
      {data1 && data1.manufacturer}<br/>
      {data1 && data1.period}<br/>
      {data1 && data1.etc}<br/>

      </div>
      <div>
        <br></br>
      <AudioExample />
      </div>
      <div className='new1'>
        추천 내용<br></br>
        {data1 && data1.keyword}
      </div>
    </>
  )
}

const Search = () => {
  const [data2, setData] = useState({
    id: ''
  });
}




function AudioExample() {
  let audio = new Audio('../sample1.mp3')
  const start = () => { audio.play() }
  return ( <div> <button onClick={start} >play</button> </div> )}




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