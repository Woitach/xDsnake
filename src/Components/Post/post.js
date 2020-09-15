import React, { createElement, useState } from 'react';
import './post.css';
import Coms from './Coment/coms.js';

export const Post = ({ title, description, data }) => (
    <div className="tabb">
        <div>
            <ul className="posthead">{title}
                <div className="X">
                    {data}
                </div>
            </ul>
            <div className="opis">
                {description}
            </div>
        </div>
        <Coms />
    </div>
)
