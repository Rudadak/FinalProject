import React, {useEffect} from 'react';

export default function Tts1({userInput}){
    const asdfe = new SpeechSynthesisUtterance()
    asdfe.text = `검색페이지로 이동했습니다. 검색에 사용된 검색어는 ${userInput}입니다.` 
    useEffect(()=>{return(window.speechSynthesis.speak(asdfe))}, [])

};
