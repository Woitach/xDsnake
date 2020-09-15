import React, { createElement, useState } from 'react';
import './post.css';



export const Post = ({ title, description, data }) => (
    <div className="titletable">
        <ul className="descriptionx">
            <li>
                {title}
                <div className="X">
                    {data}
                </div>

            </li>

        </ul>
        <ul>
            <li className="descript">
                {description}
            </li>
        </ul>
    </div>
)
