import React from 'react';
import './Header.module.scss'
import ResponsiveComponent from "../../framework/components/ResponsiveComponent";
import {Dropdown, FormControl, MenuItem, Nav, Navbar, NavItem} from "react-bootstrap";
// import {Link} from "react-router-dom";
// import {DropdownItem, Dropdown, Button, Divider} from "muicss/react";
// import Auth from '../../Auth'

import {withRouter} from "react-router-dom";

@withRouter

class Header extends ResponsiveComponent {

    onToggle = () => {
        // console.log('toggle...')
    }
    componentDidMount(){
        // Promise.resolve(homeUiState.fetchUser()).then(()=>{
        //     this.setState({user: homeUiState.user})
        // })
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
                            <MenuItem eventKey="1" onClick={()=> history.push('/')}>דף הבית</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey="2">אודות</MenuItem>
                            <MenuItem divider/>
                            {/*<MenuItem eventKey="3" onClick={signupFormUiState.openSignUpModal}>הרשמה</MenuItem>*/}
                        </Dropdown.Menu>
                    </Dropdown>


                </div>

            </div>

        );
    }

}

export default Header;
