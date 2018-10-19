import React from 'react';
import ResponsiveComponent from "../../framework/components/ResponsiveComponent";
import {Grid, Row} from "react-bootstrap";
import './Footer.module.scss'

class Footer extends ResponsiveComponent {

    renderDesktop() {
        const {} = this.props

        return (
            <Grid fluid className="footer" >
                <Row>
                    <div className="flex justify-center">Text</div>
                </Row>
            </Grid>
        );
    }

    renderMobile() {
        return <div>Mobile Footer</div>
    }
}

export default Footer;
