import React from 'react';
import ResponsiveComponent from "../../../framework/components/ResponsiveComponent";
import '../LocationForm.module.scss'
import {inject, observer} from "mobx-react/index";
import {Button, FormControl, FormGroup} from "react-bootstrap";


@inject('addLocationFormUiState')

@observer
class AddLocationForm extends ResponsiveComponent {

    renderDesktop() {
        const {addLocationFormUiState} = this.props
        const {form} = addLocationFormUiState

        return (
            <form id="location-form" className="location-form" onSubmit={form.onSubmit}>
                <FormGroup>
                    <div className="flex flex-column">
                        <label className="mr2" htmlFor={form.$('locationName').id}>
                            {form.$('locationName').label}
                        </label>
                        <FormControl
                            {...form.$('locationName').bind()}
                        />
                        <p className="error">{form.$('locationName').error}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <Button color="primary" type="submit" disabled={!form.isValid}>Save</Button>
                        <Button color="" onClick={form.onClear}>Clear</Button>
                    </div>

                    <p className="error">{form.error}</p>
                    <p className="error">{form.success}</p>
                </FormGroup>
            </form>
        );
    }

    renderMobile() {
        return (
            <div>
                mobile form
            </div>
        );
    }

}

export default AddLocationForm;
