import React from 'react';
import './Header.module.scss'
import ResponsiveComponent from "../../framework/components/ResponsiveComponent";
import {Dropdown, MenuItem} from "react-bootstrap";
import {withRouter} from "react-router-dom";


@withRouter
class Header extends ResponsiveComponent {

    componentDidMount(){

    }

    renderDesktop() {
        const {history} = this.props

        return (
            <div className="header pt2 pb2">
                <div className="container">
                    <Dropdown id="main-menu" className="main-menu mt2">
                        <Dropdown.Toggle noCaret>
                            <div className="icon-bar"/>
                            <div className="icon-bar"/>
                            <div className="icon-bar"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors">
                            <MenuItem eventKey="1" onClick={()=> history.push('/')}>Home</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey="2" onClick={()=> history.push('/categories')}>Categories</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey="3" onClick={()=> history.push('/locations')}>Locations</MenuItem>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        );
    }

}

export default Header;
