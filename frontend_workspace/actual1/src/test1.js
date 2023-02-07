import React, { useState, useEffect } from "react";
import { BsMicFill } from "react-icons/bs";
import Camera from "./Camera";
import SiFind from "./Sifind";
import { Products } from "./Find";
import Find from "./Find";
import { BrowserRouter, Route, Link} from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";


export default function App1() {
  // set up variables
  const commands = [
    {
      command: ["Go to * page", "Go to *", "Open * page", "Open *"],

    }
  ];

  const urlsMap = {
    home: "/",
    about: "/about",
    products: "/products",
    contact: "/contact"
  };

  // states
  const [redirectUrl, setRedirectUrl] = useState("home");
  const [error, setError] = useState(false);
  const { transcript, listening } = useSpeechRecognition({ commands });

  // useEffect(() => {
  //   urlsMap.hasOwnProperty(redirectUrl) ? setError(false) : setError(true);
  // }, [redirectUrl]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="App">
      {/* <BrowserRouter>
        <nav id="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Route path="/" exact component={SiFind} />
        <Route path="/products" exact component={Find} />
        <Route path="/about" component={Products} />
        <Route path="/contact" component={Camera} /> */}

        {/* {error ? (
          <p>Could not find page: {redirectUrl}</p>
        ) : (
          <Redirect to={urlsMap[redirectUrl]} />
        )} */}
      {/* </BrowserRouter> */}

      <p>Transcript: {transcript}</p>
      <button onClick={SpeechRecognition.startListening}>
        {/* <button
        onClick={() => SpeechRecognition.startListening({ continuous: true })}
      > */}
        <h3>
          <BsMicFill /> {listening ? "On" : "Off"}
        </h3>
      </button> 
    </div>
  );
}

