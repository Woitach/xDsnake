import React, { createElement, useState } from 'react';

import './coms.css';

function Coms() {
    const [Likes,SetLikes] = useState([0]);
    return (
        <div className="Social" >
            <button onClick={() => SetLikes(Likes + 1),console.log(Likes)}>like </button>
        </div>
    )
}

export default Coms;