import { useState } from "react"


const KeyboardClipboard = (e) => {
  const [inputValue,setInputValue] = useState("");

const handleKeyDown = (e) => {
  // console.log(e.keyCode)
  e.target.value = e.target.value.toUpperCase()
  e.keyCode === 13 && alert('entered')

}

const handleAreaPaste = (e) => {
  e.target.value += e.clipboardData.getData('text').toLowerCase();
  e.target.style.border = "3px solid red";
  e.target.style.backgroundColor = "pink";

  e.preventdefault();
}

const handleAreaChange = (e) => {
  if(!e.target.value){
    e.target.style.border = "3px solid red";
  e.target.style.backgroundColor = "purple";
  }
}

  return (

    <div className="container text-center">
      <h2>Clipboard Events</h2>
      <input 
      type="text" 
      name="" 
      id="" 
      value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown ={handleKeyDown}/>

      <p>{inputValue}</p>

      <textarea 
      name="area" 
      id="area" 
      cols="50" 
      rows="10" 
      onPaste={handleAreaPaste} 
      onChange={handleAreaChange}></textarea>

    </div>
  )
}

export default KeyboardClipboard