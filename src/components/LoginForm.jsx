import React from 'react';
import { connect } from 'react-redux';
import { login } from "../thunks/thunks.jsx";


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', password : '' };
    }
    componentDidMount() {
        this.state.name = document.querySelector('#name');
        this.state.password = document.querySelector('#password');
    }

    formPreventDefault(e) {
        e.preventDefault();
    }

    submitLoginForm(e) {
        e.preventDefault();
        this.props.login(this.state.name.value, this.state.password.value);
    }

    render() {
        return (
            <form onSubmit={this.formPreventDefault}>
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input id="name" type="text" placeholder="Enter Username" name="uname" required/><br/>
                    <label htmlFor="psw"><b>Password</b></label>
                    <input id="password" type="password" placeholder="Enter Password" name="psw" required/><br/>
                    <button onClick={this.submitLoginForm.bind(this)}>Login</button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    login: (name, password) => dispatch(login(name, password))
});

export default connect(null, mapDispatchToProps)(LoginForm);
// Example usage: <LoginForm />
