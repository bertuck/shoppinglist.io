import React from 'react';
import { connect } from 'react-redux';
import {addItem, save} from "../thunks/thunks.jsx";
import LogoutForm from "./LogoutForm";


class ShoppingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product : '' };
    }
    componentDidMount() {
        this.state.product = document.querySelector('#add-product');
    }
    render() {
        return (
            <div>
                <input type="text" id="add-product"/>
                <button onClick={() => this.props.add(Math.random(), this.state.product.value)}>ADD</button><br/>
                <button onClick={() => this.props.save()}>SAVE</button>
                <LogoutForm />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
   add: (idx, product) => dispatch(addItem(idx, product)),
   save: () => dispatch(save())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingForm);
// Example usage: <ShoppingForm idx=1 name="carrote" />
