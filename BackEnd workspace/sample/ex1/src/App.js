import{BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from'./pages/home';
import Login from'./pages/login';
import Button from '@mui/material/Button';
import Bottomnav from './bottomnav';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';


function App() {
  return (
    <BrowserRouter>
    <header>위 페이지는 루다닥에서 제공합니다.</header>
      

      <footer>프로젝트 입니다.</footer>
    </BrowserRouter>
  );
}

export default App;


