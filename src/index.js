import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import NewsList from './components/NewsList';

const loadingStyle = {
    position: "absolute",
    top: "50%",
    marginLeft: "50%",
    transform: "translate(0, -50%)"
}

ReactDOM.render(<h1 style={loadingStyle}>Loading...</h1>, document.getElementById('root'))

fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9fda98e80e7c43bb9f8c20540c95a971')
    .then(response => {
        response.json().then(data => renderData(Array.from(data.articles)))
    })
    .catch(error => console.log(error))

function renderData(data) {
    console.log(data)
    ReactDOM.render(<NewsList data={data} />, document.getElementById('root'));
}

serviceWorker.unregister();
