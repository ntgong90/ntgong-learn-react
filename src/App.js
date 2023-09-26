import logo from './logo.svg';
import './App.css';
import { GithubLogo } from "./GithubLogo";
import {Component1, Counter, ChildComponent } from "./components";
//is it better to call useState here?
import { useState, useRef, useEffect} from "react";


function App() {
  return (
    //Components must be placed in the HTML
    <div className="App"> 
      <GithubLogo />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Component1/>
        <Counter/>
        <ChildComponent/>
      </header>
    </div>
  );
}





export default App;
