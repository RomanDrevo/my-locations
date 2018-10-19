import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import './App.module.scss';
import {Link, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Categories from "./components/categories/Categories";
import {Col, Grid, Row} from "react-bootstrap";



@withRouter
@inject('categoriesStore')
@observer
class App extends Component {

    componentDidMount() {
        //Load everything from server
    }

    render() {

        return (
            <div className="app-wrapper">
                <Header {...this.props}/>


                <Grid className="">
                    <Row>
                        <Col sm={12}>
                            <Switch>
                                {/*<Route exact path="/" component={Home}/>*/}
                                <Route exact path="/" render={() => <Home {...this.props}/>}/>
                                <Route exact path="/categories" component={Categories} />


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
