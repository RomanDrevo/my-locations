import React, {Component} from 'react';
import './Locations.module.scss'
import {Button, Col, Glyphicon, Modal, Table} from "react-bootstrap";
import {inject, observer} from "mobx-react/index";
import AddLocationForm from "../locationForm/addLocation/AddLocationForm";
import loader from '../../assets/images/loading.svg'
import ReactTable from "react-table";


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

    state = {
        data: null
    }

    // componentDidMount(){
    //     const {locationsStore} = this.props
    //     Promise.resolve(locationsStore.loadLocations())
    //         .then(()=> this.setState({data: locationsStore.locations}))
    //
    // }

    renderEditable = (cellInfo) => {
        // console.log('cellInfo: ', cellInfo)
        const {locationsStore} = this.props
        const data = [...locationsStore.locations]
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    console.log('data: ', data)
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    locationsStore.updateLocation(cellInfo.index, data[cellInfo.index])
                }}
                dangerouslySetInnerHTML={{
                    __html: data[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }

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

                            <ReactTable
                                data={locationsStore.locations}
                                columns={[
                                    {
                                        Header: "Location Name",
                                        accessor: "locationName",
                                        Cell: this.renderEditable
                                    },
                                    {
                                        Header: "Address",
                                        accessor: "address",
                                        Cell: this.renderEditable
                                    },
                                    {
                                        Header: "Longitude",
                                        accessor: "longitude",
                                        Cell: this.renderEditable
                                    },
                                    {
                                        Header: "Latitude",
                                        accessor: "latitude",
                                        Cell: this.renderEditable
                                    },
                                    {
                                        Header: "Category",
                                        accessor: "category",
                                        Cell: this.renderEditable
                                    }
                                ]}
                                defaultPageSize={10}
                                className="-striped -highlight"
                            />




                            {/*<Table responsive className="mt2">*/}
                                {/*<thead>*/}
                                {/*<tr>*/}
                                    {/*<th>Location Name</th>*/}
                                    {/*<th>Address</th>*/}
                                    {/*<th>Longitude</th>*/}
                                    {/*<th>Latitude</th>*/}
                                    {/*<th>Category</th>*/}
                                    {/*<th>Edit/Delete</th>*/}
                                {/*</tr>*/}
                                {/*</thead>*/}
                                {/*<tbody>*/}
                                {/*{*/}
                                    {/*locationsStore.locations.map((location, index)=>(*/}
                                        {/*<tr key={index}>*/}
                                            {/*<td>{location.locationName}</td>*/}
                                            {/*<td>{location.address}</td>*/}
                                            {/*<td>{location.longitude}</td>*/}
                                            {/*<td>{location.latitude}</td>*/}
                                            {/*{*/}
                                                {/*location.category.map((category, index)=> (*/}
                                                    {/*<td key={index}>{category.label}</td>*/}
                                                {/*))*/}
                                            {/*}*/}
                                            {/*<td>*/}
                                                {/*<Button bsStyle="success" className="mr2" bsSize="xsmall">*/}
                                                    {/*<Glyphicon glyph="edit"/>*/}
                                                {/*</Button>*/}
                                                {/*<Button bsStyle="danger" bsSize="xsmall">*/}
                                                    {/*<Glyphicon glyph="trash"/>*/}
                                                {/*</Button>*/}
                                            {/*</td>*/}

                                        {/*</tr>*/}
                                    {/*))*/}
                                {/*}*/}

                                {/*</tbody>*/}
                            {/*</Table>*/}
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
