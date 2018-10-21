import React, {Component} from 'react';
import './Locations.module.scss'
import {Button, Col, Glyphicon, Modal, Table} from "react-bootstrap";
import {inject, observer} from "mobx-react/index";
import AddLocationForm from "../locationForm/addLocation/AddLocationForm";
import loader from '../../assets/images/loading.svg'
import ReactTable from "react-table";
import EditLocationForm from "../locationForm/editLocation/EditLocationForm";
import SweetAlert from 'sweetalert2-react';

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

@inject('locationsStore')
@observer
class Locations extends Component {

    // renderEditable = (cellInfo) => {
    //     // console.log('cellInfo: ', cellInfo)
    //     const {locationsStore} = this.props
    //     const data = locationsStore.locations
    //     return (
    //         <div
    //             style={{backgroundColor: "#fafafa"}}
    //             contentEditable
    //             suppressContentEditableWarning
    //             onBlur={e => {
    //                 console.log('e: ', e.target.innerHTML)
    //                 data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
    //                 locationsStore.updateLocation(cellInfo.index, data[cellInfo.index])
    //             }}
    //             dangerouslySetInnerHTML={{
    //                 __html: data[cellInfo.index][cellInfo.column.id]
    //             }}
    //         />
    //     );
    // }
    //
    // renderEditBtn = (cellInfo) => {
    //     const {locationsStore} = this.props
    //     return (
    //         <Button
    //             bsStyle="danger"
    //             bsSize="xsmall"
    //             onClick={() => locationsStore.deleteLocation(cellInfo.index)}
    //             // onClick={() => console.log(cellInfo.index)}
    //         >
    //             <Glyphicon glyph="trash"/>
    //         </Button>
    //     )
    // }

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

                {
                    locationsStore.isLoadingLocations ?
                        <img src={loader} className="loader" alt="loading-spinner"/>
                        :
                        <Col sm={5} className="mt2">

                            <ReactTable
                                data={locationsStore.locations}
                                columns={[
                                    {
                                        Header: "Name",
                                        accessor: "locationName",
                                        style: {textAlign: "center"},
                                        maxWidth: 100
                                    },
                                    {
                                        Header: "Address",
                                        accessor: "address",
                                        style: {textAlign: "center"},
                                        maxWidth: 140
                                        // Cell: this.renderEditable
                                    },
                                    {
                                        maxWidth: 40,
                                        Cell: row => (
                                            <Button
                                                bsStyle="success"
                                                bsSize="xsmall"
                                                onClick={() => locationsStore.openUpdateLocationModal(row.index)}
                                            >
                                                <Glyphicon glyph="edit"/>
                                            </Button>
                                        )
                                    },
                                    {
                                        maxWidth: 40,
                                        Cell: row => (
                                            <Button
                                                bsStyle="danger"
                                                bsSize="xsmall"
                                                onClick={() => locationsStore.openDeleteSwal(row.index)}
                                            >
                                                <Glyphicon glyph="trash"/>
                                            </Button>
                                        )
                                    }
                                ]}

                                defaultPageSize={5}
                                className="-striped -highlight"
                                sortable={true}
                                SubComponent={row => {
                                    console.log('row: ', row )
                                    return (
                                        <div style={{ padding: "0 20px 20px 20px" }}>
                                            <br />
                                            <h5>Longitude: {row.original.longitude}</h5>
                                            <h5>Latitude: {row.original.latitude}</h5>
                                            <h5>Category: {row.original.category}</h5>
                                        </div>
                                    );
                                }}
                            />

                            {
                                locationsStore.locations.map((location, i)=><div key={i} />)
                            }
                            {/*<Table responsive className="mt2">*/}
                                {/*/!*<thead>*!/*/}
                                {/*/!*<tr>*!/*/}
                                    {/*/!*<th>Location Name</th>*!/*/}
                                    {/*/!*<th>Address</th>*!/*/}
                                    {/*/!*<th>Longitude</th>*!/*/}
                                    {/*/!*<th>Latitude</th>*!/*/}
                                    {/*/!*<th>Category</th>*!/*/}
                                    {/*/!*<th>Edit/Delete</th>*!/*/}
                                {/*/!*</tr>*!/*/}
                                {/*/!*</thead>*!/*/}
                                {/*<tbody>*/}
                                {/*{*/}
                                    {/*locationsStore.locations.map((location, index) => (*/}
                                        {/*<tr key={index}>*/}
                                            {/*/!*<td>{location.locationName}</td>*!/*/}
                                            {/*/!*<td>{location.address}</td>*!/*/}
                                            {/*/!*<td>{location.longitude}</td>*!/*/}
                                            {/*/!*<td>{location.latitude}</td>*!/*/}
                                            {/*/!*<td>{location.category}</td>*!/*/}
                                            {/*/!*<td>*!/*/}
                                            {/*/!*<Button bsStyle="success" className="mr2" bsSize="xsmall">*!/*/}
                                            {/*/!*<Glyphicon glyph="edit"/>*!/*/}
                                            {/*/!*</Button>*!/*/}
                                            {/*/!*<Button*!/*/}
                                            {/*/!*onClick={()=> locationsStore.deleteLocation(index)}*!/*/}
                                            {/*/!*bsStyle="danger" bsSize="xsmall">*!/*/}
                                            {/*/!*<Glyphicon glyph="trash"/>*!/*/}
                                            {/*/!*</Button>*!/*/}
                                            {/*/!*</td>*!/*/}

                                        {/*</tr>*/}
                                    {/*))*/}
                                {/*}*/}

                                {/*</tbody>*/}
                            {/*</Table>*/}
                        </Col>
                }

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

export default Locations;
