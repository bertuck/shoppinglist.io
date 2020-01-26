import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logout from "./Logout";

class Account extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.uid && this.props.ready)
            return (
            <div className="account">
                <p>{this.props.email}</p>
                <Logout />
            </div>
        );
        return (<div></div>);
    }
}

const mapStateToProps = state => ({
    uid: state.user.uid,
    email: state.user.email,
    ready: state.app.system.ready
});

export default connect(mapStateToProps)(Account);
// Example usage: <Page />
