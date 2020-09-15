import React from 'react';
import './main.css';
import Postapost from '../Postapost/postapost.js';
import Right from '../Right/right.js';

function Main() {
    let title1 = "";
    let descript1 = "";
    return (
        <div className="centemain" >
            <Right />
            <ul className="titlemain">
                Aktualności
                </ul>
            <ul className="Shadowmain"></ul>
            
            <Postapost /><br /><br />
        </div>

    );
}

export default Main;