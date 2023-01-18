import{BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from'./pages/home';


function App() {
  return (
    <BrowserRouter>
    <header>루다닥</header>
      <nav>
        <Link to={''}>Home </Link><br/>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <footer>프로젝트 입니다.</footer>
    </BrowserRouter>
  );
}

export default App;
