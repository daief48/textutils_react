import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";

let name = "Daief Sikder"
function App() {
  return (
    <>
      <Navbar title="TextUtils2" aboutText="About TextUtils"/>
      <div className="container my-3">
      <TextFrom heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
