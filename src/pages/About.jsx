import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
       return (
           <div>
               <p>Learn about us !</p>
           </div>
       );
    }
}


export default connect(null)(About);
// Example usage: <Page />
