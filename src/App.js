import logo from './logo.svg';
import './App.css';
import {GithubLogo} from "./GithubLogo";
import {Component1, Counter, listOfWords } from "./components";
//is it better to call useState here?
import { useState} from "react";


function App() {
//let [text, handleClick] = Component1();
//const [var1, event1] = useState('tes1')

  return(
      //Components must be placed in the HTML
    <div className="App">
      <GithubLogo />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Component1/>

      
        <Counter/>
        {/* <ChildComponent/> */}
        <listOfWords/>
      </header>
    </div>
  );
}





export default App;
