import{BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from'./pages/home';
import Login from'./pages/login';
import Button from '@mui/material/Button';


function App() {
  return (
    <BrowserRouter>
    <header>위 페이지는 루다닥에서 제공합니다.</header>
      <nav>
        <Link to={''}>Home </Link><br/>
        <Button variant="outlined">
              <Link to ={'/login'}>로그인</Link><br/>
              </Button>
      </nav> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      <footer>프로젝트 입니다.</footer>
    </BrowserRouter>
  );
}

export default App;
