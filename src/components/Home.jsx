import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from "./LoginForm.jsx";
import ShoppingList from "./ShoppingList.jsx";


class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.isLogin && this.props.init) return (<LoginForm  />);
        else if (this.props.isLogin && this.props.init) return (<ShoppingList />);
        else return (<div></div>)
    }
}

const mapStateToProps = state => ({
    init: state.init,
    isLogin: state.isLogin
});

export default connect(mapStateToProps)(Accueil);
// Example usage: <Page />
