import React, { Component } from 'react';

import { connect } from 'react-redux';
import {saveData} from "../thunks/user";

import Task from './Task.jsx';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            data: this.props.data
        };
        this.handleText = this.handleText.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    handleText(e) {
        this.setState({text: e.target.value })
    };

    add(e, i) {
        let notEmpty = this.state.text.trim().length > 0;
        if (e.keyCode == 13 && notEmpty) {
            this.props.saveData(this.state.data.concat({id: i, title: this.state.text}));
            this.setState({text: '', data: this.state.data.concat({id: i, title: this.state.text})});
        }
    };

    remove(i) {
        const results = this.state.data.slice();
        results.splice(i, 1);
        this.props.saveData(results);
        this.setState({
            data: results
        });
    };

    render() {
        if (this.props.uid && this.props.ready)
            return (
            <div className="container-todo">
                <div className="notcomp">
                    <h2 className="text-center">TODO LIST</h2>
                    {this.state.data.map((data, index) => {
                        return (
                            <Task remove={this.remove} idx={index} key={data.id} name={data.title}/>);
                    })}
                    <div>
                        <div className="add">
                            <input type="text" value={this.state.text} className="txtb" onKeyUp={(e) => this.add(e, Math.random())} onChange={this.handleText}/>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <div></div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    saveData: (data) => dispatch(saveData(data))
});


const mapStateToProps = state => ({
    data: state.user.data,
    ready: state.app.system.ready,
    uid: state.user.uid
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// Example usage: <ShoppingList name="Mark" />
