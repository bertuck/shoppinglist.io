import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "../src/store/Store.jsx";
import history from "../src/store/History.jsx";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';

import App from "../src/App.jsx";

/*if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js');
}*/

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <div>
                <App />
            </div>
        </Router>
    </Provider>
), document.getElementById('root'));
