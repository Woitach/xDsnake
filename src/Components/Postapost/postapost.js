import React, { createElement, useState } from 'react';
import './postapost.css';
import Main from '../Main/main.js';
import { Post } from '../Post/post.js';


function Postapost() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const miesiace = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
    const date = new Date();
    const data = ""+ date.getDay() + "/" + miesiace[date.getMonth()] + "  " + date.getHours() + ":" + date.getMinutes();
    const [description, setDescription] = useState("");
    const addPost = (post) => {
        setPosts([post, ...posts]);
    }
    const onbutton = () => {
        const post = { title, description };
        addPost(post);
    }
    return (
        <div>
            <div className="titletablep">
                <ul className="description">
                    <li>
                        <input type="text"
                            placeholder="Tytuł"
                            value={title} onChange={(e) => setTitle(e.target.value)}>
                        </input>
                        <button className="sbutton" onClick={onbutton}>Wstaw Post</button>
                    </li>
                    <li>
                        <textarea
                            className="title2"
                            placeholder="Opis"
                            rows="3"
                            value={description} onChange={(e) => setDescription(e.target.value)}>
                        </textarea>
                    </li>
                    <li>
                        <br/><br/>{posts.length === 0 && <p>Brak</p>}
                        {posts.map((post) => (
                            <Post title={post.title} description={post.description} data={data}/>
                        ))}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Postapost;