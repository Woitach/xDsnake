import React from 'react';
import './App.css';
import Header from './Components/Head/head.js';
import Main from './Components/Main/main.js';
import Contact from './Components/Contact/contact.js';
import About from './Components/About/about.js';
import Right from './Components/Right/right.js';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="Leftsite">
          
          <Route path='/home' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
