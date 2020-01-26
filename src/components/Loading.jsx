import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loading extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.ready)
            return (
                <div id="spinner" className="container-loading">
                    <div className="loading"/>
                </div>
            );
        return (<div></div>);
    }
}

const mapStateToProps = state => ({
    ready: state.app.system.ready,
});


export default connect(mapStateToProps)(Loading);
// Example usage: <Page />
