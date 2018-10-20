import React, {Component} from 'react';
import './Locations.module.scss'
import {Button, Col, Glyphicon, Modal, Table} from "react-bootstrap";
import {inject, observer} from "mobx-react/index";
import AddLocationForm from "../locationForm/addLocation/AddLocationForm";
import loader from '../../assets/images/loading.svg'

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
        console.log('locations: ', locationsStore.locations)
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

                {
                    locationsStore.isLoadingLocations ?
                        <img src={loader} className="loader" alt="loading-spinner"/>
                        :
                        <Col xs={12}>
                            <Table responsive className="mt2">
                                <thead>
                                <tr>
                                    <th>Location Name</th>
                                    <th>Address</th>
                                    <th>Longitude</th>
                                    <th>Latitude</th>
                                    <th>Category</th>
                                    <th>Edit/Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    locationsStore.locations.map((location, index)=>(
                                        <tr key={index}>
                                            <td>{location.locationName}</td>
                                            <td>{location.address}</td>
                                            <td>{location.longitude}</td>
                                            <td>{location.latitude}</td>
                                            {
                                                location.category.map((category, index)=> (
                                                    <td key={index}>{category.label}</td>
                                                ))
                                            }
                                            <td>
                                                <Button bsStyle="success" className="mr2" bsSize="xsmall">
                                                    <Glyphicon glyph="edit"/>
                                                </Button>
                                                <Button bsStyle="danger" bsSize="xsmall">
                                                    <Glyphicon glyph="trash"/>
                                                </Button>
                                            </td>

                                        </tr>
                                    ))
                                }

                                </tbody>
                            </Table>
                        </Col>
                }



                <AddLocationModal
                    show={locationsStore.isCreateLocationModalOpen}
                    onHide={locationsStore.closeCreateLocationModal}
                />
            </div>
        );
    }
}

export default Locations;
