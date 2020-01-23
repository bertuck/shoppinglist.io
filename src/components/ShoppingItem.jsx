import React from 'react';
import styles from '../assets/css/style.css';
import { connect } from 'react-redux';
import { deleteItem } from "../thunks/thunks.jsx";


class ShoppingItem extends React.Component {
    render() {
        return (
            <li>
                <input type="checkbox"/>
                <p>{this.props.name}</p>
                <button onClick={() => this.props.delete(this.props.idx)} className={styles.btn2}>Delete</button>
            </li>
        );
    }
}

const mapDispatchToProps = dispatch => ({
   delete: (idx) => dispatch(deleteItem(idx))
});

export default connect(null, mapDispatchToProps)(ShoppingItem);
// Example usage: <ShoppingItem name="carrote" />
