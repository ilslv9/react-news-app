import React from 'react'
import NewsItem from './NewsItem';

function NewsList(props) {
    const rendered = props.data.map((item) =>
        <NewsItem title={item.title} text={item.content} author={item.author} urlToImage={item.urlToImage} />
    )
    return (
        <div>
            {rendered}
        </div>
    );
}

export default NewsList;