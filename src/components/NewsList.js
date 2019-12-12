import React from 'react'
import NewsItem from './newsItem';

function NewsList(props) {
    return (
        <div>
            {props.data.map((item) =>
                <NewsItem title={item.title} text={item.content} author={item.author} urlToImage={item.urlToImage} />)}
        </div>
    );
}

export default NewsList;