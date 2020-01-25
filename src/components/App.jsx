import React from 'react';
import { connect } from 'react-redux';
import LogoutForm from "./LogoutForm";

class Account extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="account">
                <p>{this.props.email}</p>
                <LogoutForm />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    email: state.email,
});

export default connect(mapStateToProps)(Account);
// Example usage: <Page />
