import React from 'react';
import './App.css';
import logo from './Logo.jpg';
import fb from './facebook.jpg';
import hg from './hangout.jpg';
import ig from './instagram.jpg';

function App() {
  return (
    <div className="App">
      <div className="head">
          <a href="App.js"><button className="HeadButtons">Aktualności</button></a>
          <a href="Kontakt.js"><button className="HeadButtons">Kontakt</button></a>
      </div>
      <header className="LRlist">
          <div>
            <img width="300" height="300" src={logo} alt="logo.jpg "/>
          </div>
      </header>
      <main className="Leftsite">
        <div className="al">
          <aside className="Rightsite">
            <br/><br/>
            <input type="text"></input><button>Szukaj</button><p/>
            <a href="https://www.facebook.com/wojciech.wojtach.33" target="_blank">
              <img className="links" src={fb} alt="fbcon"/>
            </a>
            <a href="https://hangouts.google.com/group/K8Zw269jh4JfWg9cA" target="_blank">
              <img className="links" src={hg} alt="hgcon"/>
            </a>
            <a href="https://www.instagram.com/wojta68/?hl=pl" target="_blank">
              <img className="links" src={ig} alt="igcon"/>
            </a>
          </aside><br/>
          <table className="title">
            <tr>
              <td>
                Kontakt<br/><br/>
              </td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
