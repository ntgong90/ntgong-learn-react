import logo from './logo.svg';
import './App.css';
import {GithubLogo} from "./GithubLogo";
import {Component1, Counter, listOfWords } from "./components";
//is it better to call useState here?
import { useState} from "react";


function App() {
let [text, handleClick] = useState('Component 3');
//const [var1, event1] = useState('tes1')
//let outputWords = listOfWords[1];

function click(){
  handleClick(text = text + ' test');
}

  return(
      //Components must be placed in the HTML
    <div className="App">
      <GithubLogo/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Component1/>

      
        <Counter/>
        {/* <ChildComponent/> */}

        <button onClick={click}>
        Button 4
      </button>
        <p>{text}</p>
      </header>
    </div>
  );
}





export default App;
