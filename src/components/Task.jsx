import React, { Component } from 'react';
import { connect } from 'react-redux';
import {saveData} from "../thunks/thunks";


class Task extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let remove = this.props.remove;
        return (
            <div className="task">{this.props.name}<i className="fas fa-trash-alt" onClick={() => remove(this.props.idx)}></i><i className="fas fa-check"></i></div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    saveData: (data) => dispatch(saveData(data))
});


const mapStateToProps = state => ({
    data: state.user.data
});


export default connect(mapStateToProps, mapDispatchToProps)(Task);
// Example usage: <ShoppingItem name="carrote" />
