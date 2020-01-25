import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";

import generalReducer from "./reducers/general";
import modalReducer from "./reducers/modal";
import userReducer from "./reducers/user";
import thunk from "redux-thunk";


const defaultStore = {
    'general': {
        'name': 'App1',
        'init': false,
        'isLogin': false,
    },
    'user': {
        'email': null,
        'uid': null,
        'data': [
            { id: "7878", title: 'TODO 1' }
        ]
    },
    'modal': {
        'showModal': false,
        "title": '',
        "text": ''
    },
    'form': {
        'email': '',
        'password': ''
    }
};


const rootReducer = combineReducers({
    form: formReducer,
    general: generalReducer,
    modal: modalReducer,
    user: userReducer
    // app: appReducer,
    // categories: categoriesReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store = createStore(
    rootReducer,
    defaultStore,
    composeEnhancers(applyMiddleware(thunk))
);
