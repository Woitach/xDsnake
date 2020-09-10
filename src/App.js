import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function SendPost(){
    console.log("sendt");
  }
  return (
    <div className="App">
      <div className="head">

      </div>
      <header className="LRlist">
          <div>
            <img src="Logo.jpg" className="logo"></img>
          </div>
      </header>
      <main className="Leftsite">
        <input if="post" type="text" className="tekst"></input>
        <input type="button" onclick="SendPost()"></input>
      </main>
      <aside className="Rightsite">
        xx
      </aside>
    </div>
  );
  
}

export default App;
