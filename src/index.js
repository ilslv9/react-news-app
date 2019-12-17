import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import NewsList from './components/NewsList';
import Header from './components/Header';
import styles from './index.css';
import {BrowserRouter} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'

const loadingStyle = {
    position: "absolute",
    top: "50%",
    marginLeft: "50%",
    transform: "translate(0, -50%)"
}

ReactDOM.render(<div>
    <Header />
    <div id="content">
        <Spinner animation="border"/>
    </div>
</div>, document.getElementById('root'))

fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9fda98e80e7c43bb9f8c20540c95a971')
    .then(response => {
        response.json().then(data => renderData(Array.from(data.articles)))
    })
    .catch(error => console.log(error))

function renderData(data) {
    console.log(data)
    var timeout = 1000;
    setTimeout(() => {
        ReactDOM.render(<div>
            <NewsList data={data} />
        </div>, document.getElementById('content'));
    }, timeout)   
}

serviceWorker.unregister();
