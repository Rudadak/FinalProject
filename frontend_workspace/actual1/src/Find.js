/* eslint-disable */

import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Navs} from './App';

const Find = () => {
  const [data, setData] = useState(null);
  const [num12, num12change] = useState(3)

  const url = "http://127.0.0.1:8000/test/datas"
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
        'http://127.0.0.1:8000/test/datas',
      );
      setData(response.data);
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  };
  useEffect(() => onClicks, []);

  

  return(
    <div>
      <Navs />
      <h1>제품찾기</h1>
      <p>보고싶은 제품을 찾아보아요</p>
      {/* {onClicks} */}
    {/* {onClicks} */}     
      <button onClick={onClicks}>예쁘게 불러오기</button>
        {console.log(data)}
      <input></input>

      <br /><br />
      {/* {data && <li>{JSON.stringify(data, ['id', 'name'], 2)}</li>}
      {data && <li>{JSON.stringify(data, ['id'], 2)}</li>}
      {data && <li>{JSON.stringify(data, ['name'], 2)}</li>} */}
      {/* {data && <li>id: {data[1].id}</li>}
      {data && <li>name: {data.name}</li>} */}


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


        {data &&
          data.map((a, i) => {
            return(
              <Card data={data && data[i]} i={i+1}> </Card>
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
  return(
    <div>
      {props.data && props.data.name}<br/>
      {props.data && props.data.price}<br/>
    </div>
  )
}


export function Products(){
  const params = useParams();
  const listId = params.listId;
  const [data1, setData1] = useState(null);

  const onClicks1 = async () => {
    try{
      const response1 = await axios.get(
        `http://127.0.0.1:8000/test/data/${listId}`,
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
      {listId}<br/>
      {data1 && data1.name}<br/>
      {data1 && data1.categoriy}<br/>
      {data1 && data1.manufacturer}<br/>
      {data1 && data1.price}<br/>
      {data1 && data1.period}<br/>
      {data1 && data1.etc}<br/>
    </>
  )
}

export default Find;