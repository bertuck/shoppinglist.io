import React from 'react';

import ShoppingItem from './ShoppingItem.jsx';
import ShoppingForm from './ShoppingForm.jsx';
import { connect } from 'react-redux';

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    {Object.entries(this.props.items)
                        .map(([key, v]) =>
                            <ShoppingItem idx={key} key={key} name={v} />)}
                </ul>
                <ShoppingForm />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    name: state.name,
    items: state.items
});

export default connect(mapStateToProps)(ShoppingList);
// Example usage: <ShoppingList name="Mark" />