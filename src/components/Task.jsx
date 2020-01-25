import React, { Component } from 'react';
import { connect } from 'react-redux';
import {saveData} from "../thunks/thunks";


class ShoppingItem extends Component {
    remove(i) {
        const results = this.props.data.slice();
        results.splice(i, 1);
        this.props.saveData(results);
        this.setState({data: results })
    };

    render() {
        return (
            <li className="shopping-item">
                <p className="text-center">{this.props.name}</p>
                <div className="btn-center">
                    <button onClick={() => this.remove(this.props.idx)} className="btn3">Delete</button>
                </div>
            </li>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    saveData: (data) => dispatch(saveData(data))
});


const mapStateToProps = state => ({
    data: state.user.data
});


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingItem);
// Example usage: <ShoppingItem name="carrote" />
