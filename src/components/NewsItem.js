//9fda98e80e7c43bb9f8c20540c95a971
import React from 'react';

function NewsItem(props) {
    return (
        <div>
            <img src={props.urlToImage} alt={props.urlToImage} />
            <h1>{props.title}</h1>
            <h2>{props.text}</h2>
            <div>
                <h6>{props.author}</h6>
            </div>
        </div>
    );
}

export default NewsItem;