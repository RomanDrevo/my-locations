import React, {Component} from 'react';
import './Locations.module.scss'
import {Button, Col, Glyphicon, Modal, Table} from "react-bootstrap";
import {inject, observer} from "mobx-react/index";
import AddLocationForm from "../locationForm/addLocation/AddLocationForm";

class AddLocationModal extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Add New Location</Modal.Title>
                </Modal.Header>
                <Modal.Body className="flex justify-center">
                    <AddLocationForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

@inject('locationsStore')
@observer
class Locations extends Component {

    render() {
        const {locationsStore} = this.props

        return (
            <div className="locations-wrapper">
                <Col xs={12}>
                    <h1 className="">Locations</h1>
                    <Button
                        className="flex flex-column"
                        bsStyle="primary"
                        onClick={locationsStore.openCreateLocationModal}
                    >
                        <Glyphicon glyph="plus"/>
                        <span className="ml1">ADD LOCATION</span>
                    </Button>
                </Col>

                <Col xs={12}>
                    <Table responsive className="mt2">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        </tbody>
                    </Table>;
                </Col>
                <AddLocationModal
                    show={locationsStore.isCreateLocationModalOpen}
                    onHide={locationsStore.closeCreateLocationModal}
                />
            </div>
        );
    }
}

export default Locations;
