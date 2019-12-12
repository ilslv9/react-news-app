import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NewsItem from './components/NewsItem'

fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9fda98e80e7c43bb9f8c20540c95a971')
    .then(response => {
        response.json().then(data => console.log(data))
    })
    .catch(error => console.log(error))

ReactDOM.render(<NewsItem title="Test" text="Another test" />, document.getElementById('root'));

function renderData(data) {
    
}

serviceWorker.unregister();
