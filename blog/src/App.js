import logo from './회전루피.gif';
import './App.css';

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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
