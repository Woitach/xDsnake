import React from 'react';
import './main.css';
import Postapost from '../Postapost/postapost.js';
import Right from '../Right/right.js';

function Main() {
    return (
        <div className="centemain" >
            <Right />
            <p className="titlemain">
                Aktualności
                <p className="Shadowmain"></p>
            </p>
            <Postapost />
        </div>

    );
}

export default Main;