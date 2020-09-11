import React, { createElement } from 'react';
import './postapost.css';
import Post from '../Post/post.js';
import Main from '../Main/main.js';


function Postapost() {
    let title = "";
    let descript = "";
    
        
    function Send() {
        title = document.getElementById('titlee').value;
        descript = document.getElementById('descripti').value;  
        
    }
    return (
        <header>
            <table className="titletable">
                <tr>
                    <td className="description">
                        <input type="text" id="titlee"></input>
                        <button onClick={Send}>send</button>
                    </td>
                </tr>
                <tr>
                    <td className="title2">
                        <input type="text" id="descripti"></input>
                    </td>
                </tr>
            </table><br/><br/>
            
            <div id="Postt">
                <ul >
                    <li><Post title={title} descript={descript}/></li>
                </ul>
            </div>
            
        </header>
    );
    
}

export default Postapost