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
        let posttt = document.createElement("Post");
        posttt.setAttribute("title", title);
        posttt.setAttribute("descript", descript);
        let parent = document.getElementById("list");
        parent.append(posttt);
    }
    return (
        <div>
            <div className="titletable">
                <ul className="description">
                    <input type="text" id="titlee"></input>
                    <button onClick={Send}>send</button>
                </ul>
                <ul className="title2">
                    <input type="text" id="descripti"></input>
                </ul>
            </div><br /><br />

            <div id="list">
                <Post title={title} descript={descript} />
            </div>
        </div>
    );

}

export default Postapost;