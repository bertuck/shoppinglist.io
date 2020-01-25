import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./Home.jsx";
import LoginForm from "./LoginForm.jsx";
import CustomModal from "./CustomModal.jsx";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.init)
            return (
                <div>
                    <Router>
                        <div>
                            <h1>{this.props.appName}</h1>
                            <nav>
                                <ul className="topnav">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Users</Link>
                                    </li>
                                </ul>
                            </nav>

                            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                            <Switch>
                                <Route path="/login">
                                    <LoginForm />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            );
        return (
            <div id="spinner" className="container-loading">
                <div className="loading"></div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    init: state.app.init,
    appName: state.app.name
});

export default connect(mapStateToProps)(App);
// Example usage: <App />
