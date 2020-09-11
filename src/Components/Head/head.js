import React from 'react';
import './style.css';
import logo from '../../mater/Logo.jpg';

function Header() {
    return (
        <header>
            <nav>
            <div className="head">
                    <a href="/home"><button className="Buttons">Aktualności</button></a>
                    <a href="/About"><button className="Buttons">O mnie</button></a>
                    <a href="/Contact"><button className="Buttons">Kontakt</button></a>
            </div>
            </nav>
                <div className="LRlist">
                    <img width="300" height="300" src={logo} alt="logo.jpg "/>
                </div> 
        </header>
    );
}

export default Header