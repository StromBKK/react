// import logo from './logo.svg';
// import React from "react";
import './App.css';


function App(){
  return(
    <div className="app">
      <header className="app-header">
        <img className="app-header-logo" src="/pic/1.jpeg" />
      </header>
      <div className="app-grid">
          <div className="tattoo-item">
            {/* <img src="/pic/3.jpeg" /> */}
            <img src="/pic/3.jpg" />
            <h4>rabbit 1</h4>
          </div>
          <div className="tattoo-item">
            <img src="/pic/3.jpg" />
            <h4>rabbit 2</h4>
          </div>
          <div className="tattoo-item">
            <img src="/pic/3.jpg" />
            <h4>rabbit 3</h4>
          </div>
          <div className="tattoo-item">
            <img src="/pic/3.jpg" />
            <h4>rabbit 4</h4>
          </div>
      </div>
    </div>
  ); 
}

// function clickme(){
//   alert('test');
//   }

// function App(){
//   return(
//     <div className="app">
//       <headers>
//         <h4>Just Do IT</h4>
//       </headers>
//       <button onClick={clickme}> Button </button>
//     </div>
//   );
// }

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
