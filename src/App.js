import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="head">
      </div>
      <header className="LRlist">
          <div>
            <img width="200" height="200" src="Logo.jpg"></img>
          </div>
      </header>
      <main className="Leftsite">
        <form onSubmit={Postt()}>
          <input id="post" type="text" className="tekst" value="Co powiesz ciekawego?"></input>
          <input type="submit"></input>
        </form>
        
      </main>
      <aside className="Rightsite">
        xx
      </aside>
    </div>
  );
  function Postt() {
    var tekstt = document.getElementById("post");
    console.log(tekstt);
  }
}

export default App;
