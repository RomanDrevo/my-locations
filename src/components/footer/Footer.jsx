import React, {Component} from 'react';
import {Grid, Row} from "react-bootstrap";
import './Footer.module.scss'

class Footer extends Component {

    render() {
        return (
            <Grid fluid className="footer" >
                <Row>
                    <div className="flex justify-center">Text</div>
                </Row>
            </Grid>
        );
    }
}

export default Footer;
