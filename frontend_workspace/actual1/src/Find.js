import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
      {data && <li>id: {data[1].id}</li>}
      {data && <li>name: {data.name}</li>}

    </div>
    
  );
};

export default Find;