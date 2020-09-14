import React from 'react';
import '.main.css';
import Postapost from '../Postapost/postapost.js';

function Main() {
    let title1 = "";
    let descript1 = "";
    return (
        <header>
            <div className="title">
                <ul>
                        Aktualności
                </ul>
                <div className="Shadow"></div>
            </div><br/><br/>
            <Postapost/>
        </header>
    );
}

export default Main;