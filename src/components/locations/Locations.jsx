import React, {Component} from 'react';
import './Locations.module.scss'
import {Button, Col, Glyphicon, Modal, Row, Table} from "react-bootstrap";
import {inject, observer} from "mobx-react/index";
import AddLocationForm from "../locationForm/addLocation/AddLocationForm";
import loader from '../../assets/images/loading.svg'
import ReactTable from "react-table";
import EditLocationForm from "../locationForm/editLocation/EditLocationForm";
import SweetAlert from 'sweetalert2-react';
import MapContainer from "../map/MapContainer";
import Select from 'react-select';

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
                    <AddLocationForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

class EditLocationModal extends Component {

    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Edit Location</Modal.Title>
                </Modal.Header>
                <Modal.Body className="flex justify-center">
                    <EditLocationForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

@inject('locationsStore', 'categoriesStore')
@observer
class Locations extends Component {

    state = {
        lat: null,
        long: null
    }

    showLocation = (lat, lng) => {
        window.navigator.vibrate(400)
        console.log(lat, lng)
        this.setState({
            lat, lng
        })
    }

    handleChange = (selectedOption) => {
        const {locationsStore} = this.props
        locationsStore.filterByCategory(selectedOption.label)
    }

    render() {
        const {locationsStore, categoriesStore} = this.props
        const locations = locationsStore.filteredLocations.length ? locationsStore.filteredLocations : locationsStore.locations
        return (
            <div className="locations-wrapper">
                <Col sm={12}>
                    <h1 className="">Locations</h1>
                    <Button
                        className="flex flex-column"
                        bsStyle="primary"
                        onClick={locationsStore.openCreateLocationModal}
                    >
                        <Glyphicon glyph="plus"/>
                        <span className="ml1">ADD LOCATION</span>
                    </Button>
                    <div className="flex mt2">
                        <Select
                            className="category-filter"
                            options={categoriesStore.transformedCategories}
                            isMulti={false}
                            onChange={this.handleChange}
                            placeholder="Filter by category"
                        />
                        <Button onClick={locationsStore.clearFilter}>Clear Filter</Button>
                    </div>


                </Col>


                {
                    locationsStore.isLoadingLocations ?
                        <img src={loader} className="loader" alt="loading-spinner"/>
                        :
                        <Col sm={4} className="mt2">

                            <ReactTable
                                data={locations}
                                columns={[
                                    {
                                        Header: "Name",
                                        accessor: "locationName",
                                        style: {textAlign: "center"},
                                        maxWidth: 80,
                                        className: 'flex items-center'
                                    },
                                    {
                                        Header: "Address",
                                        accessor: "address",
                                        style: {textAlign: "center"},
                                        maxWidth: 65,
                                        className: 'flex items-center'
                                    },
                                    {
                                        Header: "Category",
                                        accessor: "category",
                                        style: {textAlign: "center"},
                                        maxWidth: 60,
                                        className: 'flex items-center'
                                    },
                                    {
                                        // Header: "Map",
                                        maxWidth: 50,
                                        Cell: row => (
                                            <div className="flex flex-column">
                                            <Button
                                                className=""
                                                bsStyle="info"
                                                bsSize="xsmall"
                                                onClick={() => (this.showLocation(row.original.latitude, row.original.longitude))}
                                            >
                                                Map
                                            </Button>
                                                <Button
                                                    className="mt1"
                                                    bsStyle="warning"
                                                    bsSize="xsmall"
                                                    onClick={() => locationsStore.openUpdateLocationModal(row.index)}
                                                >
                                                    <Glyphicon glyph="edit"/>
                                                </Button>
                                                <Button
                                                    className="mt1"
                                                    bsStyle="danger"
                                                    bsSize="xsmall"
                                                    onClick={() => locationsStore.openDeleteSwal(row.index)}
                                                >
                                                    <Glyphicon glyph="trash"/>
                                                </Button>
                                            </div>
                                        )
                                    },
                                    {
                                        expander: true,
                                        Header: () => <strong>More</strong>,
                                        width: 40,
                                        Expander: ({ isExpanded, ...rest }) =>
                                            <div>
                                                {isExpanded
                                                    ? <span>&#x2299;</span>
                                                    : <span>&#x2295;</span>}
                                            </div>,
                                        style: {
                                            cursor: "pointer",
                                            fontSize: 25,
                                            padding: "0",
                                            textAlign: "center",
                                            userSelect: "none",
                                            position: "relative",
                                            top: "24px"
                                        }
                                    },
                                    // {
                                    //     maxWidth: 30,
                                    //     Cell: row => (
                                    //         <Button
                                    //             bsStyle="warning"
                                    //             bsSize="xsmall"
                                    //             onClick={() => locationsStore.openUpdateLocationModal(row.index)}
                                    //         >
                                    //             <Glyphicon glyph="edit"/>
                                    //         </Button>
                                    //     )
                                    // },
                                    // {
                                    //     maxWidth: 30,
                                    //     Cell: row => (
                                    //         <Button
                                    //             bsStyle="danger"
                                    //             bsSize="xsmall"
                                    //             onClick={() => locationsStore.openDeleteSwal(row.index)}
                                    //         >
                                    //             <Glyphicon glyph="trash"/>
                                    //         </Button>
                                    //     )
                                    // }
                                ]}

                                defaultPageSize={5}
                                className="-striped -highlight"
                                sortable={true}
                                SubComponent={row => {
                                    console.log('row: ', row)
                                    return (
                                        <div style={{padding: "0 20px 20px 20px"}}>
                                            <br/>
                                            <h5>Latitude: {row.original.latitude}</h5>
                                            <h5>Longitude: {row.original.longitude}</h5>
                                            <h5>Category: {row.original.category}</h5>
                                        </div>
                                    );
                                }}
                            />

                            {
                                locationsStore.locations.length ? locationsStore.locations.map((location, i) => <div key={i}/>) : null
                            }
                        </Col>
                }

                <Col sm={6}>
                    <div className="map-wrapper">
                        <MapContainer position={{lat: this.state.lat, lng: this.state.lng}}/>
                    </div>
                </Col>

                <SweetAlert
                    warning
                    showCancelButton={true}
                    show={locationsStore.isDeleteSwalOpen}
                    title="Are you sure?"
                    text=""
                    onConfirm={locationsStore.deleteLocation}
                    cancelButtonText="No, keep it"
                    onCancel={locationsStore.closeDeleteSwal}
                />

                <EditLocationModal
                    show={locationsStore.isUpdateLocationModalOpen}
                    onHide={locationsStore.closeUpdateLocationModal}
                />

                <AddLocationModal
                    show={locationsStore.isCreateLocationModalOpen}
                    onHide={locationsStore.closeCreateLocationModal}
                />
            </div>
        );
    }
}


export default Locations