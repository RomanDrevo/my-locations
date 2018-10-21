import React, {Component} from 'react';
import {Button, Col, Glyphicon, Modal} from "react-bootstrap";
import {inject, observer} from "mobx-react/index";
import AddCategoryForm from "../categoryForm/addCategory/AddCategoryForm";
import './Categories.module.scss'
import SweetAlert from 'sweetalert2-react';
import EditCategoryForm from "../categoryForm/editCategory/EditCategoryForm";
import loader from '../../assets/images/loading.svg'
import ReactTable from "react-table";

class AddCategoryModal extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body className="flex justify-center">
                    <AddCategoryForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

class EditCategoryModal extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Edit Category</Modal.Title>
                </Modal.Header>
                <Modal.Body className="flex justify-center">
                    <EditCategoryForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

@inject('categoriesStore')
@observer
class Categories extends Component {

    render() {
        const {categoriesStore} = this.props
        console.log('trans categories: ', categoriesStore.transformedCategories)

        return (
            <div className="categories-wrapper">

                <Col sm={12}>
                    <h1 className="">Categories</h1>
                    <Button
                        className="flex flex-column"
                        bsStyle="primary" onClick={categoriesStore.openCreateNewCategoryModal}>
                        <Glyphicon glyph="plus"/>
                        <span className="ml1">ADD CATEGORY</span>
                    </Button>
                </Col>

                <AddCategoryModal
                    show={categoriesStore.isCreateNewCategoryModalOpen}
                    onHide={categoriesStore.closeCreateNewCategoryModal}
                />

                <EditCategoryModal
                    show={categoriesStore.isUpdateCategoryModalOpen}
                    onHide={categoriesStore.closeUpdateCategoryModal}
                />

                <SweetAlert
                    warning
                    showCancelButton={true}
                    show={categoriesStore.isDeleteSwalOpen}
                    title="Are you sure?"
                    text=""
                    onConfirm={categoriesStore.deleteCategory}
                    cancelButtonText="No, keep it"
                    onCancel={categoriesStore.closeDeleteSwal}
                />



                {
                    categoriesStore.isLoadingCategories ?
                        <img src={loader} className="loader" alt="loading-spinner"/>
                        :
                        <Col sm={4} className="mt2">
                            <ReactTable
                                data = { categoriesStore.transformedCategories}
                                columns={[
                                    {
                                        Header: "Category Name",
                                        accessor: "label",
                                        style: {textAlign: "center"}
                                    },
                                    {
                                        maxWidth: 40,
                                        Cell: row => (
                                            <Button
                                                bsStyle="warning"
                                                bsSize="xsmall"
                                                onClick={() => categoriesStore.openUpdateCategoryModal(row.index)}
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
                                                onClick={() => categoriesStore.openDeleteSwal(row.index)}
                                            >
                                                <Glyphicon glyph="trash"/>
                                            </Button>
                                        )
                                    }
                                ]}
                                defaultPageSize={10}
                                className="-striped -highlight"
                                sortable={true}
                            />
                            {
                                categoriesStore.transformedCategories.map((category, index) => <div key={index} />)
                            }
                        </Col>
                }
            </div>
        );
    }
}

export default Categories;
