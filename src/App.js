// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = '#0c146b'
    }else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="TextUtils2" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextFrom heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
