import React from 'react';
import './right.css';
import fb from '../../mater/facebook.jpg';
import hg from '../../mater/hangout.jpg';
import ig from '../../mater/instagram.jpg';

function Right() {
  return (
    <aside className="Rightsite">
      <div className="top">
        <input type="text" placeholder="Czego Szukasz?" className="search"></input><button>Szukaj</button>
        <p>
          <a href="https://www.facebook.com/wojciech.wojtach.33" target="_blank">
            <img className="links" src={fb} alt="fbcon" />
          </a>
          <a href="https://hangouts.google.com/group/K8Zw269jh4JfWg9cA" target="_blank">
            <img className="links" src={hg} alt="hgcon" />
          </a>
          <a href="https://www.instagram.com/wojta68/?hl=pl" target="_blank">
            <img className="links" src={ig} alt="igcon" />
          </a>
        </p>
      </div>
    </aside>
  );
}

export default Right