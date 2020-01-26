import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Task from "./Task";

class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        {this.props.navigation.map((data, index) => {
                            return (
                                <li key={data.id}><Link to={data.path} className="nav-link">{data.title}</Link></li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    navigation: state.app.navigation,
});

export default connect(mapStateToProps)(Navigation);
// Example usage: <Page />
