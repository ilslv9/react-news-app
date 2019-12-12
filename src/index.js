import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NewsList from './components/NewsList';

fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9fda98e80e7c43bb9f8c20540c95a971')
    .then(response => {
        response.json().then(data => renderData(Array.from(data.articles)))
    })
    .catch(error => console.log(error))

function renderData(data) {
    console.log(data)
    ReactDOM.render(<NewsList data={data}/>, document.getElementById('root'));
}

serviceWorker.unregister();
