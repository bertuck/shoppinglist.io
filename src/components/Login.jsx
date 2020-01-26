import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from "../thunks/auth.jsx";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password : '' };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.submitLoginForm = this.submitLoginForm.bind(this);
    }

    handleEmail(e) {
        this.setState({email: e.target.value })
    };

    handlePassword(e) {
        this.setState({password: e.target.value })
    };

    formPreventDefault(e) {
        e.preventDefault();
    }

    submitLoginForm(e) {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
    }

    render() {
        if (!this.props.uid && this.props.ready)
            return (
                <div className="login-page">
                    <div className="form">
                        <form onSubmit={this.formPreventDefault}>
                            <label htmlFor="email"><b>Email</b></label>
                            <input id="email" type="text" placeholder="Enter Email" name="email" required  onChange={this.handleEmail}/><br/>
                            <label htmlFor="psw"><b>Password</b></label>
                            <input id="password" type="password" placeholder="Enter Password" name="psw" required  onChange={this.handlePassword}/><br/>
                            <button onClick={this.submitLoginForm}>Login</button>
                        </form>
                    </div>
                </div>
            );
        return (
            <div></div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: (name, password) => dispatch(login(name, password))
});

const mapStateToProps = state => ({
    ready: state.app.system.ready,
    uid: state.user.uid
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// Example usage: <LoginForm />
