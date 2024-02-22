import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
 
  return (
    <div id="main">

    <button id='click' onClick={fun}>Render</button>

    <p>


    </p>
   
    </div>
  );
}

const para = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  function fun()
{
   const abc = document.getElementsByTagName("p")
   abc.innerHTML = para;
   abc.id = 'para';
}

export default App;
