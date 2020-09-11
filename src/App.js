import React from 'react';
import './App.css';
import Header from './Components/Head/head.js';
import Main from './Components/Main/main.js';
import Right from './Components/Right/right.js';



function App() {
  return (
    <div className="App">
      <Header />
      <main className="Leftsite">
        <Right /> 
        <Main/>
      </main>
    </div>
  );
}

export default App;
