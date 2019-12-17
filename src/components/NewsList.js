import React from 'react'
import NewsItem from './NewsItem';

function NewsList(props) {
    const style = {
        width:"100%",
        marginTop: "120px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    }
    return (
        <div style={style}>
            {props.data.map((item) =>
                <NewsItem title={item.title} text={item.content} author={item.author} urlToImage={item.urlToImage} />)}
        </div>
    );
}

export default NewsList;