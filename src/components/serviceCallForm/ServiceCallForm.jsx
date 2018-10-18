import React, {Component} from 'react';
import ResponsiveComponent from "../../framework/components/ResponsiveComponent";
import './ServiceCallForm.scss'
import {inject, observer} from "mobx-react/index";
import {Button} from "react-bootstrap";


@inject('customerStore')

@observer
class ServiceCallForm extends ResponsiveComponent {

    renderDesktop() {
        const {customerStore} = this.props
        const {form} = customerStore

        return (
            <form id="service-call-form" className="service-call-form" onSubmit={form.onSubmit}>
                <div className="flex flex-column">
                    <label className="mr2" htmlFor={form.$('firstName').id}>
                        {form.$('firstName').label}
                    </label>
                    <input className="ml1" {...form.$('firstName').bind()} />
                    <p className="error">{form.$('firstName').error}</p>
                </div>


                {/*<label className="mr2" htmlFor={form.$('lastName').id}>*/}
                {/*{form.$('lastName').label}*/}
                {/*</label>*/}
                {/*<input className="ml1" {...form.$('lastName').bind()} />*/}
                {/*<p className="error">{form.$('lastName').error}</p>*/}

                <div className="flex flex-column">
                    <label className="mr2" htmlFor={form.$('email').id}>
                        {form.$('email').label}
                    </label>
                    <input className="ml1" {...form.$('email').bind()} />
                    <p className="error">{form.$('email').error}</p>
                </div>


                <div className="flex flex-column">
                    <label className="mr2" htmlFor={form.$('phone').id}>
                        {form.$('phone').label}
                    </label>
                    <input className="ml1" {...form.$('phone').bind()} />
                    <p className="error">{form.$('phone').error}</p>
                </div>


                <input className="" {...form.$('hidePhone').bind()} />
                <label className="ml2" htmlFor={form.$('hidePhone').id}>
                    {form.$('hidePhone').label}
                </label>
                <p className="error">{form.$('hidePhone').error}</p>

                <div className="flex flex-column">
                    <label className="mr2" htmlFor={form.$('city').id}>
                        {form.$('city').label}
                    </label>
                    <input className="ml1" {...form.$('city').bind()} />
                    <p className="error">{form.$('city').error}</p>
                </div>

                <div className="flex flex-column">
                    <label className="mr2" htmlFor={form.$('description').id}>
                        {form.$('description').label}
                    </label>
                    <textarea rows={5} className="ml1" {...form.$('description').bind()} />
                    <p className="error">{form.$('description').error}</p>
                </div>


                <div className="flex justify-between items-center">
                    <Button color="primary" type="submit" disabled={!form.isValid}>פתח קריאת שרות</Button>
                    <Button color="" onClick={form.onClear}>נקה</Button>
                </div>

                <p className="error">{form.error}</p>
                <p className="error">{form.success}</p>
            </form>
        );
    }

    renderMobile() {
        const {} = this.props

        return (
            <div>
                mobile form
            </div>
        );
    }

}

export default ServiceCallForm;
