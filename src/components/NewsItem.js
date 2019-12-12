//9fda98e80e7c43bb9f8c20540c95a971
import React from 'react';

function NewsItem(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.text}</h2>
        </div>
    );
}

export default NewsItem;