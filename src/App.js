// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils2" aboutText="About TextUtils"/>
      <div className="container my-3">
      <TextFrom heading="Enter the text to analyze"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
