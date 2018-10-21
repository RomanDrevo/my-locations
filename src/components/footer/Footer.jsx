import React from 'react';
import {Button, Glyphicon, Grid, Row} from "react-bootstrap";
import './Footer.module.scss'
import ResponsiveComponent from "../../framework/components/ResponsiveComponent";
import {withRouter} from "react-router-dom";


@withRouter
class Footer extends ResponsiveComponent {

    renderDesktop() {
        return (
            <Grid fluid className="footer" >
                <Row>
                    <div className="flex justify-center">Text</div>
                </Row>
            </Grid>
        );
    }

    renderMobile() {
        const {history} = this.props
        return (
            <Grid fluid className="footer" >
                <Row>
                    <div className="flex justify-around">
                        <Button onClick={()=> history.push('/locations')}>
                            <Glyphicon glyph="globe"/>
                            <span className="ml1">Locations</span>
                        </Button>
                        <Button onClick={()=> history.push('/')}>
                            <Glyphicon glyph="th-list"/>
                            <span className="ml1">Categories</span>
                        </Button>
                    </div>
                </Row>
            </Grid>
        );
    }
}

export default Footer;
