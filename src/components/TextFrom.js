import React, {useState} from 'react'
export default function TextFrom(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked"+ text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>{
        console.log("Uppercase was clicked"+ text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleclearClick = () =>{
        console.log("Uppercase was clicked"+ text)
        let newText = " ";
        setText(newText)
    }
    const handleOnChange = (event) =>{
        console.log("On change")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleclearClick}>Clear Text</button>
      </div>
    </div>

    <div className="container my-2">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
