import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotFound extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>Not found !</p>
            </div>
        );
    }
}


export default connect(null)(NotFound);
// Example usage: <Page />
