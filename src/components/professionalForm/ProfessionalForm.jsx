import React from 'react';
import ResponsiveComponent from "../../framework/components/ResponsiveComponent";
import './ProfessionalForm.module.scss'
import {inject, observer} from "mobx-react/index";
import {Button} from "react-bootstrap";
// import Select from 'react-select';


@inject('professionalsStore')
@observer
class ProfessionalForm extends ResponsiveComponent {
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    renderDesktop() {
        const { selectedOption } = this.state;
        const {professionalsStore} = this.props
        const {form} = professionalsStore

        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ];

        return (
            <form id="professional-form" className="professional-form" onSubmit={form.onSubmit}>
                <div className="flex flex-column">
                    <label className="mr2" htmlFor={form.$('firstName').id}>
                        {form.$('firstName').label}
                    </label>
                    <input className="ml1" {...form.$('firstName').bind()} />
                    <p className="error">{form.$('firstName').error}</p>
                </div>

                <div className="flex flex-column">
                    <label className="mr2" htmlFor={form.$('lastName').id}>
                        {form.$('lastName').label}
                    </label>
                    <input className="ml1" {...form.$('lastName').bind()} />
                    <p className="error">{form.$('lastName').error}</p>
                </div>

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

                <div className="flex flex-column">
                    <label className="mr2" htmlFor={form.$('category').id}>
                        {form.$('category').label}
                    </label>
                    {/*<input className="ml1" {...form.$('category').bind()} />*/}


                    <select  {...form.$('category').bind()}>
                        <option>בחר תחום--</option>
                        <option value="1">רכב</option>
                        <option value="2">מיזוג אוויר</option>
                        <option value="3">מחשבים</option>
                    </select>

                    {/*<Select*/}
                        {/*{...form.$('category').bind()}*/}
                        {/*value={selectedOption}*/}
                        {/*onChange={this.handleChange}*/}
                        {/*options={options}*/}
                    {/*/>*/}

                    <p className="error">{form.$('category').error}</p>
                </div>


                <div className="flex flex-column">
                    <label className="mr2" htmlFor={form.$('city').id}>
                        {form.$('city').label}
                    </label>
                    <input className="ml1" {...form.$('city').bind()} />
                    <p className="error">{form.$('city').error}</p>
                </div>



                <div className="flex justify-between items-center">
                    <Button color="primary" type="submit" disabled={!form.isValid}>הרשם</Button>
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

export default ProfessionalForm;
