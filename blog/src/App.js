import { HashRouter as Routes,  Route } from "react-router-dom";
import logo from './회전루피.gif';
import './App.css';
import First from "./pages/First";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href = "https://mk28.tistory.com/245"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>
          테스트 페이지
        </p>
        <a
          className="App-link"
          href="https://velog.io/@gym/React-React%EB%A1%9C-%ED%95%98%EB%8B%A8%ED%83%AD-%EB%A7%8C%EB%93%A4%EA%B8%B0"
          target="_blank"
          rel="noopener noreferrer"
        >
          하단 네비게이션 만들기

        </a>

      </header>
      <Routes>
        <Route path="/first" component={First} />
      </Routes>
    </div>

  );
}

export default App;
