import React, { useState } from "react";

import './App.css';
import BoxForm from './components/BoxForm';
import Display from "./components/Display"

function App() {
  
  const [colorArray,setColorArray] = useState([])


  return (
    <div className="App">
      <BoxForm colorArray = {colorArray} setColorArray = {setColorArray} />
      <Display colorArray ={colorArray} />
    </div>
  );
}

export default App;
