import React from 'react';
import './post.css';

function Postscript(title, descript) {
    var title = "siema";
    var descript = "siema";
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
                        W tym poscie ma byc cos fajnego
                    </td>
                </tr>
            </table>
        </header>
    );
}

export default Postscript