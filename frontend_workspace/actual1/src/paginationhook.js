import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import Paginator from "./Paginator";

import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Navs} from './App';
import './Find.css';
import { useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Posts from './Posts';
import Pagination from "./Pagination";
import {usePageLeave, usePrevious} from 'react-use';
import { useSpeechRecognition } from 'react-speech-kit';

const displayItem = (currentPage: number, maxPerPage: number, index:number): boolean => {

    const currentPageStart = ((currentPage - 1) * maxPerPage) + 1;
    const currentPageEnd = currentPage * maxPerPage;

    if ((index + 1) >= currentPageStart && (index + 1) <= currentPageEnd ) {
        return true;
    }

    return false;
}

export const usePagination = (itemList: any[], maxItemsPerPage: number = 10, props) => {
    const [data, setData] = React.useState([]);


    // const [posts, setPosts] = useState([]);
    const [loading, setLoading] = React.useState(false);
  
    React.useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const response = await axios.get(
          "http://192.168.0.42:8000/test/datas"
        );
        setData(response.data);
        setLoading(false);
      };
      fetchData();
    }, []);
  
    // console.log('awerawef' +data);
  
  
  
    const {state} = useLocation();
  
  
    const [userInput, setUserInput] = useState(state);
  
    function imsi1(){
      if(userInput == null){
        setUserInput('');
      }
    }
    useEffect(() => imsi1, []);
  
  
  
    const getValue = (e) => {
      console.log(e)
      setUserInput(e.target.value.toLowerCase())};
  
    // <input onChange={getValue}/>
  
  
   // 데이터 목록중, name에 사용자 입력값이 있는 데이터만 불러오기
   // 사용자 입력값을 소문자로 변경해주었기 때문에 데이터도 소문자로
      const searched =  data.filter((item) =>
       item.name.toLowerCase().includes(userInput)
     );
  

    const [items, setItems] = React.useState(searched);
    console.log(items)
    const [currentPage, setCurrentPage] = React.useState(1);

    const isPaginating = items.length > maxItemsPerPage;
    const totalPages = Math.ceil(items.length / maxItemsPerPage);

    const pageItems: any[] = items.filter((val, index) => {

        if (!isPaginating) {            
            return true;
        }

        if (!displayItem(currentPage, maxItemsPerPage, index)) {
            return false;
        }

        return true;
    });

    const setItemList = (items: any[]) => {
        setCurrentPage(1);
        setItems(items);
    }

    return {
        setItemList,
        isPaginating,
        currentPage,
        setCurrentPage,
        pageItems,
        totalPages
    };

}