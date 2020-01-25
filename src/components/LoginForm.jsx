import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from "../thunks/thunks.jsx";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password : '' };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
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
        return (
            <div className="login-page">
                <div className="form">
                    <form onSubmit={this.formPreventDefault}>
                        <label htmlFor="email"><b>Email</b></label>
                        <input id="email" type="text" placeholder="Enter Email" name="email" required  onChange={this.handleEmail}/><br/>
                        <label htmlFor="psw"><b>Password</b></label>
                        <input id="password" type="password" placeholder="Enter Password" name="psw" required  onChange={this.handlePassword}/><br/>
                        <button onClick={this.submitLoginForm.bind(this)}>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    login: (name, password) => dispatch(login(name, password))
});

export default connect(null, mapDispatchToProps)(LoginForm);
// Example usage: <LoginForm />
