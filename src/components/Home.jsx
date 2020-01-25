import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from "./LoginForm.jsx";
import TodoList from "./TodoList.jsx";
import CustomModal from "./CustomModal";
import Account from "./Account";


class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.uid && this.props.init) return (<div><LoginForm  /><CustomModal /></div>);
        else if (this.props.uid && this.props.init) return (<div><Account /><TodoList /><CustomModal /></div>);
    }
}

const mapStateToProps = state => ({
    init: state.app.init,
    uid: state.user.uid
});

export default connect(mapStateToProps)(Home);
// Example usage: <Page />
