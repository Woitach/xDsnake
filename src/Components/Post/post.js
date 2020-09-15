import React from 'react';
import './post.css';

function Postscript({ title, descript }) {
    return (
        <div className="titletable">
            <ul className="description">
                {title}<br /><br />
            </ul>
            <ul className="title2">
                {descript}
            </ul><br />
        </div>
    );
}

export default Postscript;