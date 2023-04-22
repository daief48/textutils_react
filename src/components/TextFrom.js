import React, { useState } from 'react'
export default function TextFrom(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleclearClick = () => {
    console.log("Uppercase was clicked" + text)
    let newText = " ";
    setText(newText)
  }

  const handlecopyClick = () => {
    console.log("I am Copy");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleremovspaceClick = () => {
    console.log("Remove extra spaces.");
    let newtext = text.trim();
    setText(newtext);
  }
  const handleOnChange = (event) => {
    console.log("On change")
    setText(event.target.value)
  }
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className={`container text-${props.mode === 'dark'?'white':'dark'}`} text- style={{backgroundColor: props.mode === 'dark'?'#0c146b':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#0c146b':'white',
        color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleclearClick}>Clear Text</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handlecopyClick}>Copy Text</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleremovspaceClick}>Remove Extra Space</button>
        </div>
      </div>

      <div className={`container text-${props.mode === 'dark'?'white':'dark'} my-2`} style={{backgroundColor: props.mode === 'dark'?'#0c146b':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  )
}
