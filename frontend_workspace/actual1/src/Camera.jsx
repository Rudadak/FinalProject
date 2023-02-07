/* eslint-disable */
import React, {useRef} from "react";
import axios from "axios"; // axios 모듈 추가
import {Navs} from './App';
import Show from './Show';
import {Routes, Route, useNavigate} from 'react-router-dom';
 
function Camera() {
   
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
        const URL = "http://192.168.0.42:8000/test/camera/"

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
 

    const imageInput = useRef();

    const onCickImageUpload = () => {
        imageInput.current.click();
      };


    return (
        <>
        {/* <Routes>        
            <Route path = "/camera/show" element={< Show/>} />
        </Routes> */}
         <Navs />
            <h1>File Upload Test</h1>
            <form onSubmit={uploadModule}>
                <br />
                <input type="file" style={{ display: "none" }} ref={imageInput} />
                <button onClick={onCickImageUpload}>이미지업로드</button>
 
                <input type="submit" value="SUBMIT" />
            </form>
            
 
        </>
    );
 
}
 
export default Camera;