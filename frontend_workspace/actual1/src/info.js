/* eslint-disable */
// import{BrowserRouter, Routes, Route, Link} from 'react-router-dom';
// import Home from'./pages/home';






// let observer = new IntersectionObserver((e)=>{
//   e.forEach((박스)=>{
//     if (박스.isIntersecting){
//     박스.target.style.opacity = 1;
//     박스.target.style.transform = 'rotate(0deg)';
//     } 
//     else{
//       박스.intersectionRatio
//     }
//   })
// })

// let observer = new IntersectionObserver(()=>{})
// let div = document.querySelectorAll('div')
// observer.observe(div[0])
// observer.observe(div[1])
// observer.observe(div[2])
// observer.observe(div[3])



import {  useEffect, useRef } from "react";

import "./info.css";

const DIVIDER_HEIGHT = 5;

function Info() {
  const outerDivRef = useRef();
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      // 스크롤 행동 구현
    };
    // const outerDivRefCurrent = outerDivRef.current;
    // outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    // return () => {
    //   outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    // };
  }, []);

  return (
    <div ref={outerDivRef} className="outer">
      <div className="inner bg-yellow">안녕하세요 저희는 루다닥</div>
      
      <div className="inner bg-blue">이었지만 고글로 돌아온 팀입니다.</div>
      
      <div className="inner bg-pink">잘 부탁드립니다.</div>
     
      <div className="inner bg-yellow"><img src='./wallpapersden.com_galaxy-cluster-gravity-communication_7680x4320.jpg'/></div>
     
    </div>
  );
}



export default Info;