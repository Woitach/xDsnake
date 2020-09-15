import React from 'react';
import './head.css';
import logo from '../../mater/Logo.jpg';

function Header() {
    return (
        <nav>
            <div className="head">
                <a className="blog">WW Blog</a>
                <a href="/Contact"><button className="Buttons">Kontakt</button></a>
                <a href="/About"><button className="Buttons">O mnie</button></a>
                <a href="/home"><button className="Buttons">Aktualności</button></a>
            </div>
            <div className="LRlist">
                <img className="zdjecie" src={logo} alt="logo.jpg " />
            </div>
        </nav>
    );
}

export default Header