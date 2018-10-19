import React, {Component} from 'react';
import {Button, Col, Glyphicon, ListGroup, ListGroupItem, Modal} from "react-bootstrap";
import {inject, observer} from "mobx-react/index";
import CategoryForm from "../categoryForm/CategoryForm";
import './Categories.module.scss'
import SweetAlert from 'sweetalert2-react';

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
                    <CategoryForm/>
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
        console.log('categories: ', categoriesStore.categories)

        return (
            <div className="categories-wrapper">

                <Col xs={12}>
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

                <SweetAlert
                    warning
                    showCancelButton={true}
                    show={categoriesStore.isDeleteSwalOpen}
                    title="Are you sure?"
                    text=""
                    onConfirm={categoriesStore.deleteCategory}
                    cancelButtonText="No, keep it"
                    onCancel={()=>console.log('canceled')}
                />

                {/*<SweetAlert*/}
                    {/*show={true}*/}
                    {/*warning*/}
                    {/*showCancel*/}
                    {/*cancelButtonText="Cancel!!!"*/}
                    {/*confirmBtnBsStyle="danger"*/}
                    {/*cancelBtnBsStyle="default"*/}
                    {/*title="Are you sure?11"*/}
                    {/*onConfirm={()=>console.log('canceled')}*/}
                    {/*onCancel={()=>console.log('canceled')}*/}
                {/*>*/}
                    {/*You will not be able to recover this imaginary file!*/}
                {/*</SweetAlert>*/}

                <Col xs={4}>
                    <ListGroup className="mt3">
                        {
                            categoriesStore.categories.map((category, index) =>
                                <ListGroupItem key={index} className="">
                                    <div className="category">{category}</div>
                                    <Button bsStyle="success" className="mr2">
                                        <Glyphicon glyph="edit"/>
                                        <span className="ml1">EDIT</span>
                                    </Button>
                                    <Button bsStyle="danger" onClick={() => categoriesStore.openDeleteSwal(index)}>
                                        <Glyphicon glyph="trash"/>
                                        <span className="ml1">REMOVE</span>
                                    </Button>
                                </ListGroupItem>
                            )
                        }
                    </ListGroup>;
                </Col>
            </div>
        );
    }
}

export default Categories;
