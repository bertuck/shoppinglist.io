import React, { Component } from 'react';
import { Router, Switch, Route, withRouter } from 'react-router-dom'

import * as firebase from "firebase";

import Navigation from "./components/Navigation";
import CustomModal from "./components/CustomModal.jsx";
import Loading from "./components/Loading";

import Login from "./components/Login.jsx";
import Account from "./components/Account";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

import { connect } from 'react-redux';
import {init} from "./thunks/general";

const firebaseConfig = {
    apiKey: "AIzaSyCz1NbfDQj2PvND0ZjnKRqMsxuEEI8V6w0",
    authDomain: "shoppinglist-99e30.firebaseapp.com",
    databaseURL: "https://shoppinglist-99e30.firebaseio.com",
    projectId: "shoppinglist-99e30",
    storageBucket: "shoppinglist-99e30.appspot.com",
    messagingSenderId: "992764033088",
    appId: "1:992764033088:web:8d144503b5061e8af747a5"
};



class App extends Component {
    constructor(props) {
        super(props);
        this.props.init();
    }

    render() {
        return (
            <div>
                <Loading />
                <Navigation />
                <h1 className="text-center">{this.props.appName}</h1>
                <Login />
                <Account />
                <CustomModal />
                <Switch>
                    <Route exact component={Home} path="/" />
                    <Route component={About} path="/about" />
                    <Route component={NotFound}  />
                </Switch>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    init: (firebase) => dispatch(init(firebase))
});


const mapStateToProps = (state, history) => ({
    ready: state.app.system.ready,
    appName: state.app.system.name
});

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const persistenceLocal = firebase.auth.Auth.Persistence.LOCAL;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
