import React from 'react';
import './post.css';

function Postscript({title, descript}) {
    return (
        <header>
            <table className="titletable">
                <tr>
                    <td className="description">
                        {title}<br/><br/>
                    </td>
                </tr>
                <tr>
                    <td className="title2">
                        {descript}
                    </td>
                </tr>
            </table><br/><br/>
        </header>
    );
}

export default Postscript