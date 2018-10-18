import React, {Component} from 'react';
import './CustomerServiceCalls.module.scss'
import Header from "../header/Header";
import {Grid} from "react-bootstrap";
import categoryYoga from "../../assets/images/category-yoga.jpg"
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class CustomerServiceCalls extends Component {

    render() {
        const {} = this.props

        return (
            <div className="customer-service-calls-wrapper">
                <div className="strip-separator"/>
                <Grid>
                    <div className="my-calls-title">
                        קריאות שלי
                    </div>
                    <div className="my-calls-list">
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemTitle className="service-call-item flex">
                                    <div className="category-logo-wrapper">
                                        <img alt="category-logo" src={categoryYoga} className="category-logo" />
                                    </div>
                                    <div className="service-call-details">
                                        <div className="sub-category">יוגה</div>
                                        <div className="category-name">בריאות וספורט</div>
                                        <div className="flex items-center">
                                            <i className="fa fa-2x fa-calendar ml2" aria-hidden="true" />
                                            <div className="call-date-time">16.08.18</div>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fa fa-2x fa-clock-o ml2" aria-hidden="true" />
                                            <div className="call-date-time">16.02</div>
                                        </div>
                                    </div>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <p>
                                        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
                                    </p>
                                </AccordionItemBody>
                            </AccordionItem>
                            {/*<AccordionItem>*/}
                                {/*<AccordionItemTitle>*/}
                                    {/*<h3>Complex title</h3>*/}
                                    {/*<div>With a bit of description</div>*/}
                                {/*</AccordionItemTitle>*/}
                                {/*<AccordionItemBody>*/}
                                    {/*<p>Body content</p>*/}
                                {/*</AccordionItemBody>*/}
                            {/*</AccordionItem>*/}
                        </Accordion>
                        {/*<div className="service-call-item flex">*/}
                            {/*<div className="category-logo-wrapper">*/}
                                {/*<img alt="category-logo" src={categoryYoga} className="category-logo" />*/}
                            {/*</div>*/}
                            {/*<div className="service-call-details">*/}
                                {/*<div className="sub-category">יוגה</div>*/}
                                {/*<div className="category">בריאות וספורט</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>

                </Grid>
            </div>
        );
    }
}

export default CustomerServiceCalls
