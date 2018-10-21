import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import './App.module.scss';
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Categories from "./components/categories/Categories";
import {Col, Grid, Row} from "react-bootstrap";
import Locations from "./components/locations/Locations";


@withRouter
@inject('categoriesStore', 'locationsStore')
@observer
class App extends Component {

    componentDidMount() {
        const {categoriesStore, locationsStore} = this.props
        categoriesStore.loadCategories()
        locationsStore.loadLocations()
    }

    render() {

        return (
            <div className="app-wrapper">
                <Header {...this.props}/>

                <Grid className="">
                    <Row>
                        <Col sm={12}>
                            <Switch>
                                {/*<Route exact path="/" render={() => <Home {...this.props}/>}/>*/}
                                <Route exact path="/" component={Categories} />
                                <Route exact path="/locations" component={Locations} />
                            </Switch>
                        </Col>
                    </Row>
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default App;
