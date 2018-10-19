import React, {Component} from 'react';
import {Button, Col, Grid, Modal, Row} from 'react-bootstrap';
import './Home.module.scss'
import Footer from "../../components/footer/Footer"
import {inject, observer} from "mobx-react/index";
import loader from '../../assets/images/loading.svg'
import Category from "../category/Category";
import CategoryForm from "../categoryForm/CategoryForm";
import ProfessionalForm from "../professionalForm/ProfessionalForm";


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
class Home extends Component {


    componentDidMount() {
        const {categoriesStore} = this.props
    }

    render() {
        const {categoriesStore} = this.props
        console.log('Home props: ', this.props)

        // if(categoriesStore.isLoadingCategories){
        //     return <img src={loader} className="loader" alt="loading-spinner" />
        // }

        return (
            <div className="home-wrapper">

                        <Grid className="home-content">
                            <Row>

                                <Col xs={10}>
                                    <Col className="mb3" xs={12}>
                                        <div className="categories-title">Categories</div>
                                    </Col>



                                    <Col className="flex justify-end" xs={12}>
                                        <button onClick={categoriesStore.openCreateNewCategoryModal}>Add Category</button>
                                    </Col>
                                </Col>

                            </Row>
                        </Grid>

                <AddCategoryModal show={categoriesStore.isCreateNewCategoryModalOpen} onHide={categoriesStore.closeCreateNewCategoryModal}/>


                {/*<Footer/>*/}
            </div>

        );
    }
}

export default Home;
