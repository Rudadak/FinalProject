import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";

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
    const itemsPerPage = 6;

    useEffect(() => {
      fetch("http://192.168.0.42:8000/test/datas").then(
        response => response.json().then(data=>{
          setImages(data);
          const endOffset = itemOffset + itemsPerPage;
          setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage))  
        })
      )
    }, [])



 

    useEffect( () => {
        //Fetch items from anoather resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage))
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };












// const {state} = useLocation();
  // const [userInput, setUserInput] = useState(state);
  
  // function imsi1(){
  //   if(userInput == null){
  //     setUserInput('');
  //   }
  // }
  // useEffect(() => imsi1, []);
  
  
  
  // const getValue = (e) => {
  //   console.log(e)
  //   setUserInput(e.target.value.toLowerCase())};
  
  // // 데이터 목록중, name에 사용자 입력값이 있는 데이터만 불러오기
  // // 사용자 입력값을 소문자로 변경해주었기 때문에 데이터도 소문자로
  //   const searched =  data.filter((item) =>
  //    item.name.toLowerCase().includes(userInput)
  //  );
  
  //  const asdfe = new SpeechSynthesisUtterance()
  //  asdfe.text = `검색페이지로 이동했습니다. 검색에 사용된 검색어는 ${userInput}입니다.` 
  //  const [searchLength,setSearchLength] = useState('')
  
  // useEffect(()=>{return(window.speechSynthesis.speak(asdfe))}, [])












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
        <Items currentItems={currentItems} />
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
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

function Items({ currentItems }) {
    return (
      <>
        {
          currentItems.map((item) => (
            <div>
{item.name}
{item.price}


            </div>
          ))}
      </>
    );
  }