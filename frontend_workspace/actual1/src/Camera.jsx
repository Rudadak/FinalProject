/* eslint-disable */
import React, {useEffect} from "react";
import axios from "axios"; // axios 모듈 추가
import {Navs} from './App';
import Show from './Show';
import {Routes, Route, useNavigate} from 'react-router-dom';
 
function Camera(props) {
   
    /* 추가된 코드 */
    const navigate = useNavigate();
    const uploadModule = async (e) => {
        e.preventDefault();
        
        // # event로 file 객체 얻기
        
        const upload_file = e.target[0].files[0]; 
        
		// # 폼 데이터 생성
        // const navigate = useNavigate();
        const formData = new FormData();
        formData.append("files", upload_file);
        formData.append("enctype", "multipart/form-data")
		
        // # 파일을 업로드 시킬 Server 주소
        const URL = "http://192.168.0.23:8000/test/camera/"

        // const navigate = useNavigate();
        // function move(){
        //     navigate('/')
        // }


 
        axios({
            method: "post",
            url: URL,
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
 
            }
        }).then(function (response) {
            console.log(response);

            if(response.data.status == 'Success'){
                navigate('./show', {state: response.data})();}
            // window.location.replace("/camera/show"); 
        })
    } 
 


    // const imageInput = useRef();

    // const onCickImageUpload = () => {
    //     imageInput.current.click();
    //   };

    const [url, setUrl] = React.useState("");

    useEffect(()=> {window.speechSynthesis.cancel()})


    return (
        <div className={props.col}>
        <>
        {/* <Routes>        
            <Route path = "/camera/show" element={< Show/>} />
        </Routes> */}
         {/* <Navs /> */}
            <h1>Image OCR</h1>
            <form onSubmit={uploadModule}>
                <br />
            <Input updateUrl={setUrl} />
            </form>
            
            
            <Img url={url} />
 
        </>
        </div>
    );
}

const Input = ({ updateUrl }) => {
    const handleUpload = (event) => {
      const url = URL.createObjectURL(event.target.files[0]);
      console.log(event.target.files[0]);
      updateUrl(url);
    };
  
    return (
      <div style={{ marginBottom: "30px" }}>
        <input type="file" onChange={handleUpload} />
        <input type="submit" value="SUBMIT" />
      </div>
    );
  };
  
  const Img = ({ url }) => {
    return <img src={url}  style={{textAlign:"center"}} height="200" width="200"   />;
  };
 
export default Camera;