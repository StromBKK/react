
import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';


function App(){
  return(
    <div className="app">
      <AppHeader />
      <div className="app-grid">
        <TattooItem title="แขน 1" thumbnailUrl="/images/tattoo-01-small.jpg" />
        <TattooItem title="มือ 1" thumbnailUrl="/images/tattoo-02-small.jpg" />
        <TattooItem title="คอ 1" thumbnailUrl="/images/tattoo-03-small.jpg" />
        <TattooItem title="หลัง 1" thumbnailUrl="/images/tattoo-04-small.jpg" />
      </div>
        {/* <TattooPost /> */}
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
