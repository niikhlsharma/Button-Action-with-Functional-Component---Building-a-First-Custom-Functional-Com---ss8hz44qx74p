import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

 const [var1,set] = useState(false)
 function fun(){
  set(!var1)
 }
 
  return (
    <div id="main">

    <button id='click' onClick={fun}>Render</button>

    {var1 && <p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
   
    </div>
  );
}


  

export default App;
