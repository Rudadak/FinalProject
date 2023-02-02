/* eslint-disable */
import React from "react";
import axios from "axios"; // axios 모듈 추가
import {Navs} from './App';
import Show from './Show';
import {Routes, Route, useNavigate} from 'react-router-dom';
 
function Camera() {
   
    /* 추가된 코드 */
    const uploadModule = async (e) => {
        e.preventDefault();
        const desc = e.target[0].value;
        
        // # event로 file 객체 얻기
        const upload_file = e.target[1].files[0];   
        
		// # 폼 데이터 생성
        // const navigate = useNavigate();
        const formData = new FormData();
        formData.append("description", desc);
        formData.append("files", upload_file);
        formData.append("enctype", "multipart/form-data")
		
        // # 파일을 업로드 시킬 Server 주소
        const URL = "http://localhost:8000/test/camera/"
 
        axios({
            method: "post",
            url: URL,
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
 
            }
        }).then(function (response) {
            console.log(response);
            // window.location.replace("/camera/show"); 
        })
    } 
 
    return (
        <>
        {/* <Routes>        
            <Route path = "/camera/show" element={< Show/>} />
        </Routes> */}
         <Navs />
            <h1>File Upload Test</h1>
            <form onSubmit={uploadModule}>
                description<input type="text" name="description" />
                <br />
            files<input type="file" name="files" />
 
                <input type="submit" value="SUBMIT" />
            </form>
 
        </>
    );
 
}
 
export default Camera;