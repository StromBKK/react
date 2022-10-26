// import logo from './logo.svg';
import React from "react";
import './App.css';

function clickme(){
  alert('test');
  }

function App(){
  return(
    <div className="App">
      <headers>
        <h4>Just Do IT</h4>
      </headers>
      <button onClick={clickme}> Button </button>
    </div>
  );
}
/*
function App() {
    const textInput = <input type ="text" />;
    // const okButton =<button>
    // สวัสดี
    // </button>
    const okButton = (
      <button> สวัสดี
      </button>
    )
      
  return (
    <div className="App">
      <h2>test</h2>
      <p>ggg</p>
      <p>
        {textInput}
      </p>
      <p>
        {okButton}
      </p>
      {<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> }
    </div>
  );
}
*/

export default App;
