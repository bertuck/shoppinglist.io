import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../src/assets/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

import App from "../src/components/App.jsx";

import { store } from "../src/store/configureStore";

/*if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js');
}*/

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
