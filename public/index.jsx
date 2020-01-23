import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore"

import thunk from 'redux-thunk';
import rootReducer from '../src/reducers/reducer.jsx';
import { init } from '../src/thunks/thunks.jsx';
import Accueil from "../src/components/Accueil.jsx";


const defaultStore = {
    'init': false,
    'isLogin': false,
    'name': 'Fruits',
    'items': {
        '0': 'banana',
        '1': 'apple',
        '2': 'carrot'
    }
};

const store = createStore(rootReducer, defaultStore, applyMiddleware(thunk));
store.dispatch(init(firebase));

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><Accueil /></Provider>, rootElement);
