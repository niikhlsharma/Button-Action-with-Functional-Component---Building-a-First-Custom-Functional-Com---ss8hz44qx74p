import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [buttonValue,setbuttonValue] = useState(false);
  function toggle(){
    setbuttonValue(!buttonValue)
  }
  return (
    <div id="main">
      
    <button onClick={toggle}>click</button>
  {buttonValue && <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}


export default App;
