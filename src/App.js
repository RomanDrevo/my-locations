import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import './App.module.scss';
import {Link, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";



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


                <Switch>
                    {/*<Route exact path="/" component={Home}/>*/}
                    <Route exact path="/" render={() => <Home {...this.props}/>}/>


                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
