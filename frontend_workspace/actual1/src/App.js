import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Find from './Find';
import Datasheet from './Find';
import {Products} from './Find';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/product" element={<Find />} />
        <Route path = "/store" element={<Store />} />
        <Route path = "/camera" element={<Camera />} />
        <Route path = "/product/:listId" element={< Products/>} />
      </Routes>

    </div>
  );
}

function Home(){
  return(
    <div>
      <div>
        <Navs />
      </div>
      <div>
        <font size= '30'>Title</font>
      </div>


      <div className="d-grid gap-2">
      <Button variant="primary" size="lg"  href="/product">
        <p></p>
        <p></p>
        <p></p>
        <br></br>
      <font size='6'>검색</font>
      <p></p>
      <p></p>
      <p></p>
      <br></br>
      </Button>
      <Button variant="secondary" size="lg" href="/camera">
      <p></p>
      <p></p>
      <p></p>
      <br />
      <font size='6'>카메라</font>
      <p></p>
      <p></p>
      <p></p>
      <br />
      </Button>
      {/* <Button variant="dark" size="lg" href="/mypage">
      <font size='6'>마이페이지</font>
      </Button> */}
      </div>
    </div>
  )
}

function Product(){
return(
  <div>
    <div>
    <Navs />
    </div>
    <div>
      <p>제품명</p>
      <p>제조사</p>
      <p>카테고리</p>
      <p>가격</p>
      <p>용량</p>
      <p>비고</p>
    </div>
    <div>
      긍정/촉촉한
    </div>
    <div>
      음성ttsㄴㄷㅇ
    </div>
  </div>
) 
}

export function Navs(){
return(
  <Navbar bg="dark" variant="dark">
  <Container>
    {/* <h4><font color= 'white'><Link to ='/'>Rudadak &nbsp;&nbsp;&nbsp; </Link></font></h4> */}
    <Nav className="me-auto">
    <Nav.Link href="/"><h4><font color= 'white'>Rudadak &nbsp;&nbsp;&nbsp;</font></h4></Nav.Link>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/store">Store</Nav.Link>
      <Nav.Link href="/camera">Camera</Nav.Link>
    </Nav>
  </Container>
</Navbar>
)
}

function Store(){
  return(
    <div>
      <div>
      <Navs /> 
      </div>
      <div>
        안내사항
      </div>
      <div>
        내부위치
      </div>
      <div>
        기타
      </div>
    </div>
  )
}

function Camera(){
  return(
    <div>
      <div>
        <Navs />
      </div>
      <div>
        카메라 어플
      </div>
    </div>
  )
}


export default App;
