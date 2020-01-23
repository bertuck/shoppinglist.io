import React from 'react';
import { connect } from 'react-redux';
import LoginForm from "./LoginForm.jsx";
import ShoppingList from "./ShoppingList.jsx";
import CustomModal from "./CustomModal";


class Accueil extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.isLogin && this.props.init) return (<div><LoginForm  /><CustomModal /></div>);
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
