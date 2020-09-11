import React from 'react';
import './style.css';
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
            </table>
            <Post/>
        </header>
    );
}

export default Main