import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { toggleModal } from "../thunks/general";

class CustomModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.ready)
            return (
                <Modal show={this.props.show} onHide={() => this.props.toggleModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.titleModal}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{this.props.textModal}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={() => this.props.toggleModal(false)} variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal>
            );
        return (<div></div>);
    }

}

const mapDispatchToProps = dispatch => ({
    toggleModal: (show) => dispatch(toggleModal(show))
});


const mapStateToProps = state => ({
    ready: state.app.system.ready,
    show: state.modal.show,
    titleModal: state.modal.title,
    textModal: state.modal.text
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);
// Example usage: <Page />
