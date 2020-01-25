import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import appReducer from "./reducers/app.jsx";
import modalReducer from "./reducers/modal.jsx";
import userReducer from "./reducers/user.jsx";
import thunk from "redux-thunk";
import * as firebase from "firebase";
import { init } from "../thunks/thunks.jsx";


const defaultStore = {
    'app': {
        'name': 'App1',
        'init': false
    },
    'user': {
        'email': null,
        'uid': null,
        'data': [
            { id: "7878", title: 'TODO 1' }
        ]
    },
    'modal': {
        'show': false,
        "title": '',
        "text": ''
    }
};

const rootReducer = combineReducers({
    app: appReducer,
    modal: modalReducer,
    user: userReducer
});

let composeEnhancers = compose;

export const store = createStore(
    rootReducer,
    defaultStore,
    composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(init(firebase));
