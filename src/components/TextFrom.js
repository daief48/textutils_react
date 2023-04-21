import React, {useState} from 'react'
export default function TextFrom(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked")
    }
    const [text, setText] = useState("Enter text here");
  return (
    <div>
        <h1>{props.heading} - {text}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      </div>
    </div>
  )
}
