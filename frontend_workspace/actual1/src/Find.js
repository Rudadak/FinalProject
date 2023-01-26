import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Find(){
  const [data, setData] = useState(null);
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
    <>
      <div>
        <Find33 data={data}/>
      </div>
    </>
  )
}


const Find33 = (props) => {
  // const [data, setData] = useState(null);
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


  // const onClicks = async () => {
  //   try{
  //     const response = await axios.get(
  //       'http://127.0.0.1:8000/test/datas',
  //     );
  //     setData(response.data);
  //     console.log(response)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };
  // useEffect(() => onClicks, []);

  // async function postData(url='http://127.0.0.1:8000/test/datas',){
  //   const response = await fetch(url,{
  //     method: 'POST'
  //   })
  // }
  // postData();


  // const response = axios.get('http://127.0.0.1:8000/test/datas',);
  // setData()

  return(
    <div>
      <h1>제품찾기</h1>
      <p>보고싶은 제품을 찾아보아요</p>
      {/* {onClicks} */}
    {/* {onClicks} */}     
      {/* <button onClick={onClicks}>예쁘게 불러오기</button> */}
        {console.log(props.data)}
      <input></input>

      <br /><br />
      {/* {data && <li>{JSON.stringify(data, ['id', 'name'], 2)}</li>}
      {data && <li>{JSON.stringify(data, ['id'], 2)}</li>}
      {data && <li>{JSON.stringify(data, ['name'], 2)}</li>} */}
      {props.data && <li>id: {props.data[1].id}</li>}
      {props.data && <li>name: {props.data.name}</li>}
      {props.data[1].name}
      {/* {
        data.map(function(a){
          return(
            <div>
              <h4>{data[a].name}</h4>
            </div>
          )
        })
      } */}
      {/* {console.log(props.data[1].name)} */}


    </div>
    
  );
};

export default Find;