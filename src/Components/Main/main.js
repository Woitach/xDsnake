import React from 'react';
import './main.css';
import Post from '../Post/post.js';

function Main() {
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
            <Post/>
        </header>
    );
}

export default Main