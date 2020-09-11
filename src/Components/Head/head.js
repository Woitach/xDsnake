import React from 'react';
import './style.css';
import logo from '../../mater/Logo.jpg';

function Header() {
    return (
        <header>
            <nav>
            <div className="head">
                <a></a>
                <ul>
                    <li><a href="/Main">Aktualności</a></li>
                    <li><a href="/About">O mnie</a></li>
                    <li><a href="/Contact">Kontakt</a></li>
                </ul>
            </div>
            </nav>
                <div className="LRlist">
                    <img width="300" height="300" src={logo} alt="logo.jpg "/>
                </div> 
        </header>
    );
}

export default Header