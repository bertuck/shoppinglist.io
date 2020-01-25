import React, { Component } from 'react';

import ShoppingItem from './ShoppingItem.jsx';
import ShoppingForm from './ShoppingForm.jsx';
import { connect } from 'react-redux';
import Account from "./Account";
import {saveData} from "../thunks/thunks";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            data: this.props.data
        };
    }
    render() {
        console.log(this.props.data);
        return (
            <div className="shopping-list">
                <Account />
                <div className="shopping-list-group">
                    <ul>
                        {Object.entries(this.props.data)
                            .map(([key, v]) =>
                                <ShoppingItem idx={key} key={key} name={v} />)}
                    </ul>
                    <ShoppingForm />
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    saveData: (data) => dispatch(saveData(data))
});


const mapStateToProps = state => ({
    data: state.user.data
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// Example usage: <ShoppingList name="Mark" />
