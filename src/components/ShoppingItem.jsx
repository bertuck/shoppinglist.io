import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from "../thunks/thunks.jsx";


class ShoppingItem extends React.Component {
    render() {
        return (
            <li className="shopping-item">
                <p className="text-center">{this.props.name}</p>
                <div className="btn-center">
                    <button onClick={() => this.props.delete(this.props.idx)} className="btn3">Delete</button>
                </div>
            </li>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    delete: (idx) => dispatch(deleteItem(idx))
});

export default connect(null, mapDispatchToProps)(ShoppingItem);
// Example usage: <ShoppingItem name="carrote" />
