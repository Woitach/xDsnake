import React from 'react';
import './main.css';
import Post from '../Post/post.js';

function Main() {
    var title1 = "tytul";
    var descript1 = "opis";
    function fill() {
        Post.Main(title1,descript1);
    }
    return (
        <header>
            <table className="title">
                <tr>
                    <td >
                        Aktualności<br/><br/>
                    </td>
                </tr>
                <tr className="Shadow"><td>.</td></tr>
            </table><br/><br/>

            <Post>
                
            </Post>
        </header>
    );
}

export default Main