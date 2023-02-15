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



// import {  useEffect, useRef } from "react";

// import "./info.css";
// import {Navs} from './App';


// function Info() {
//   const outerDivRef = useRef();
//   useEffect(() => {
//     const wheelHandler = (e) => {
//       e.preventDefault();
//       // 스크롤 행동 구현
//     };
//     // const outerDivRefCurrent = outerDivRef.current;
//     // outerDivRefCurrent.addEventListener("wheel", wheelHandler);
//     // return () => {
//     //   outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
//     // };
//   }, []);

//   return (
//     <div ref={outerDivRef} className="outer">
      
//       <div className="inner bg-yellow">안녕하세요 저희는 고글[GOGGLES]</div>
      
//       <div className="inner bg-blue">모두의 눈이 되어주는 <br/> 완전히 새로운 방법.</div>
      
//       <div className="inner bg-yellow">누구나 이용할 수 있도록 설계된 쉬운 화면. <br/> 당신의 눈을 대신해주는 음성기능.</div>
      
//       <div className="inner bg-blue"> 이 모든걸 가능케 하는 궁극의 웹</div>
      
//       <div className="inner bg-pink">(어쩌면)..구글 그 이상.</div>

//       <div className="inner bg-yellow">완전히 새롭게!</div>

//       <div className="inner bg-pink">모두를 위한 고글"😎"<br/> 상시 준비 완료.</div>

//       <div className="inner bg-pink">(히잉.... 사실은 절반이 거짓말이야..)</div>
     
//       <div className="inner bg-pink"><img src='./wallpapersden.com_galaxy-cluster-gravity-communication_7680x4320.jpg'/></div>
      
      
//     </div>
//   );
// }



// export default Info;


import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Info = (props) => {

    let boxStyle = {
        width: '100%',
        height: '200px',
        fontSize: '200%',
        lineHeight: '200px',
        background: 'black',
        color: 'white',
        textAlign: 'center'
    }

    let empty = {
      width: '100%',
      height: '500px',
      fontSize: '30px',
      lineHeight: '200px',
      background: 'black',
      color: 'white',
      textAlign: 'center'
  }

  let white = {
    width: '100%',
    height: '300px',
    fontSize: '30px',
    lineHeight: '200px',
    background: 'white',
    color: 'black',
    textAlign: 'center'
}

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    });

    return(

        <>
        <div className={props.col} >
          <div style={{ overflow: 'auto'}}>
          
            {/* <div>
                <p data-aos="fade-up">AOS 테스트1</p>
            </div> */}
            <div style={white}></div>
            <div style={white}>
                <p data-aos="fade-right"> 유저 검색량 통계</p>
            </div>
            <div style={white}>
            <img src='KakaoTalk_20230214_120235155.png' width='400px' height='auto' data-aos="fade-right"/>
            </div>
            <div style={white}></div>

            <div style={empty}></div>
            <div style={boxStyle}>
                <p data-aos="fade-up">안녕하세요 저희는 고글</p>
            </div>
            <div style={boxStyle}>
            <img src='/KakaoTalk_20230211_101829939.png' width='300px' height='200px' data-aos="fade-up"/>
            </div>
            <div style={empty}></div>
            <div style={boxStyle}>
                <p data-aos="fade-right">모두의 눈이 되어주는 </p>
            </div>
            <div style={empty}></div>
            <div style={boxStyle}>
                <p data-aos="fade-right"> 완전히 새로운 방법.</p>
            </div>
            <div style={empty}></div>
            
            <div style={boxStyle}>
                <p data-aos="fade-left">누구나 이용할 수 있도록 <br/>설계된 쉬운 화면. </p>
            </div>
            <div style={empty}></div>
            <div style={boxStyle}>
                <p data-aos="fade-right">당신의 눈을 <br/>대신해주는 음성기능.</p>
            </div>
            <div style={empty}></div>
            <div style={boxStyle}>
                <p data-aos="fade-down">이 모든걸 가능케 하는 <br/>궁극의 웹</p>
            </div>
            <div style={empty}></div>
            <div style={boxStyle}>
                <p data-aos="zoom-out">(어쩌면..) 구글 그 이상.</p>
            </div>
            <div style={empty}></div>
            <div style={boxStyle}>
                <p data-aos="flip-left">완전히 새롭게!</p>
            </div>
            <div style={empty}></div>
            <div style={boxStyle}>
                <p data-aos="zoom-in">모두를 위한 고글 "😎"</p>
            </div>
            <div style={boxStyle}>
                <p data-aos="zoom-in">상시 준비 완료.</p>
            </div>
            <div style={empty}>
            <br/>
            
            <img src='제목 없음1.png' width='200px' height='400px' data-aos="flip-down"/>
            
            <div>
            <br/>
            <img src='KakaoTalk_20230215_093714083_02.jpg' width='133px' height='400px' data-aos="fade-right"/>
            <img src='KakaoTalk_20230215_093714083_01.jpg' width='133px' height='400px' data-aos="fade-up"/>
            <img src='KakaoTalk_20230215_093714083.jpg' width='133px' height='400px' data-aos="fade-left"/>
            </div> 
               
            </div>
            <div style={empty}></div>
            <div style={empty}></div>
            <div style={empty}></div>
            <div style={empty}></div>
            {/* <div style={boxStyle}>
                <p data-aos="zoom-out">(히잉... 사실은 절반이 거짓말이야...)</p>
            </div> */}



          </div>
          </div>
        </>
    )
};

export default Info;