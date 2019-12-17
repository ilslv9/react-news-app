//9fda98e80e7c43bb9f8c20540c95a971
import React from 'react';

function NewsItem(props) {

    const style = {
        /* Add shadows to create the "card" effect */
        margin: "20px",
        padding: "20px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        flex: "1 0 30%",
        flexDirection: "column",
        width: "50%"
    }

    const imageStyle = {
        width: "100%",
        heigth: "auto",
        maxWidht: "400px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    }

    function listener() {
        alert('Test')
    }

    return (<div style={style} onClick={listener}>
        <img style={imageStyle} src={props.urlToImage} alt={props.urlToImage} />
        <h1> {props.title}</h1>
        <h2>{props.text}</h2>
        <div>
            <h6> {props.author} </h6>
        </div>
    </div>
    );
}

export default NewsItem;