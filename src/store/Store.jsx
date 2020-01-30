import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import appSystemReducer from "./reducers/appSystem.jsx";
import appNavigationReducer from "./reducers/appNavigation.jsx";

import modalReducer from "./reducers/modal.jsx";
import userReducer from "./reducers/user.jsx";
import thunk from "redux-thunk";

const defaultStore = {
    'app': {
        'system' : {
            'name': 'App2',
            'ready': false,
        },
        'navigation' : [
            { id: "1", title: 'Home', path: "/" },
            { id: "2", title: 'About', path: "/about" },
            { id: "3", title: 'Logout', path: "/logout" },
        ]
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


const appReducer = combineReducers({
    system : appSystemReducer,
    navigation: appNavigationReducer
});


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
