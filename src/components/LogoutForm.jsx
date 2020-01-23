import React from 'react';
import { connect } from 'react-redux';
import { logout } from "../thunks/thunks.jsx";


class LogoutForm extends React.Component {
    constructor(props) {
        super(props);
    }
    logout() {
        this.props.logout();
    }
    render() {
        return (
            <div className="btn-center">
                <button className="btn3 logout" onClick={this.logout.bind(this)}>Logout</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});


const mapStateToProps = state => ({
    isLogin: state.isLogin
});


export default connect(mapStateToProps, mapDispatchToProps)(LogoutForm);
// Example usage: <LoginForm />
