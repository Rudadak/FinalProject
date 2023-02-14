import {useEffect, useState, useCallback, forceUpdate } from "react";
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";

export default function Images(props){

    const [images, setImages] = useState([])
    const data = images;
    // console.log(data)
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState([]);
    // Where we use item offset; we could also use page offsets
    // following the API or data you're working with.
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    // useEffect(() => {
    //   fetch("http://localhost:8000/test/datas").then(
    //     response => response.json().then(data=>{
    //       setImages(data);
    //       const endOffset = itemOffset + itemsPerPage;
    //       setCurrentItems(data.slice(itemOffset, endOffset));
    //     setPageCount(Math.ceil(data.length / itemsPerPage))  
    //     })
    //   )
    // }, [userInput])



 

    // useEffect( () => {
    //     //Fetch items from anoather resources.
    //     const endOffset = itemOffset + itemsPerPage;
    //     setCurrentItems(searched.slice(itemOffset, endOffset));
    //     setPageCount(Math.ceil(searched.length / itemsPerPage))
    // }, [itemOffset, itemsPerPage]);

    // // Invoke when user click to request another page.
    // const handlePageClick = (event) => {
    //     const newOffset = (event.selected * itemsPerPage) % searched.length;
    //     setItemOffset(newOffset);
    // };












const {state} = useLocation();
  const [userInput, setUserInput] = useState(state);
  
  function imsi1(){
    if(userInput == null){
      setUserInput('');
    }
  }
  useEffect(() => imsi1, []);



  useEffect(() => {
    fetch("http://localhost:8000/test/datas").then(
      response => response.json().then(data=>{
        setImages(data);
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage))  
      })
    )
  }, [])

  
  
  
  const getValue = (e) => {
    console.log(e)
    setUserInput(e.target.value.toLowerCase())};
  
  // 데이터 목록중, name에 사용자 입력값이 있는 데이터만 불러오기
  // 사용자 입력값을 소문자로 변경해주었기 때문에 데이터도 소문자로
    const searched =  data.filter((item) =>
     item.name.toLowerCase().includes(userInput)
   );
  
  //  const asdfe = new SpeechSynthesisUtterance()
  //  asdfe.text = `검색페이지로 이동했습니다. 검색에 사용된 검색어는 ${userInput}입니다.` 
  //  const [searchLength,setSearchLength] = useState('')
  
  // useEffect(()=>{return(window.speechSynthesis.speak(asdfe))}, [])

  const [switch1, setSwitch1] = useState(true)
  

  const [searched1, setSearched1] = useState([]);
  useCallback (()=> {
    setSearched1(searched);
    setSwitch1(!switch1);
  },[searched])

  useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(images.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(images.length / itemsPerPage))  
      
    
  }, [images])
  
  // const [, updateState] = useState();
  // const forceUpdate = useCallback(() => updateState({}), []);
  // useEffect(()=>{forceUpdate}, [])

  useEffect ( () => {
    
    //Fetch items from anoather resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(searched.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(searched.length / itemsPerPage))
}, [itemOffset, itemsPerPage, userInput]);

// Invoke when user click to request another page.
const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searched.length;
    setItemOffset(newOffset);
};











    return(
        <>
        {/* <div className="images">
            {currentItems && currentItems.map(image =>{
                return(
                    <div>
                        <div>
                        {image.name}<br/>
                        {image.price}<br/>
                        <p></p>
                        </div>

                    </div>
                )
            })}
        </div> */}
        <Items currentItems={currentItems} searched={searched} getValue ={getValue} userInput= {userInput}/>
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
        />

        </>
    )
}

function Items({ currentItems, getValue, userInput, searched }) {
  const navigate = useNavigate();
    const navigateToPurchase = () => {
      navigate(`${"./" + currentItems.id}`);
    };
  
    return (
      <>
            <h1>제품찾기</h1>
      <p >보고싶은 제품을 찾아보아요</p>
      <input onChange={getValue} value={userInput}/>
        {
          currentItems.map((item) => (
            <div className='new' onClick = {() => {navigate(`${"./" + item.id}`)}}>
{item.name}
{item.price}
{console.log(currentItems)}


            </div>
          ))}
      </>
    );
  }