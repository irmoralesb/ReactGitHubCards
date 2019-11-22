import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const defaultProfileList = []; //[{name: "Name here...", avatar_url: "https://placehold.it/75", company: "Company here..."}];

ReactDOM.render(
    <App title="The GitHub Cards App" profileList={defaultProfileList} />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
