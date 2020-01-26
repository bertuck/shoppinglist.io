import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from "../components/TodoList.jsx";

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<TodoList />);
    }
}

export default connect(null)(Home);
// Example usage: <Page />
