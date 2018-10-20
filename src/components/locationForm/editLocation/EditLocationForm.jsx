import React from 'react';
import ResponsiveComponent from "../../../framework/components/ResponsiveComponent";
import '../LocationForm.module.scss'
import {inject, observer} from "mobx-react/index";
import {Button, FormControl, FormGroup} from "react-bootstrap";
import Select from 'react-select';

@inject('editLocationFormUiState', 'categoriesStore', 'locationsStore')
@observer
class EditLocationForm extends ResponsiveComponent {

    componentDidMount(){
        const {editLocationFormUiState, locationsStore} = this.props
        const {form} = editLocationFormUiState
        form.set({locationName: locationsStore.locationToUpdate.locationName});
        form.set({address: locationsStore.locationToUpdate.address});
        form.set({latitude: locationsStore.locationToUpdate.latitude});
        form.set({longitude: locationsStore.locationToUpdate.longitude});
        form.set({category: locationsStore.locationToUpdate.category});
    }

    renderDesktop() {
        const {editLocationFormUiState, categoriesStore} = this.props
        const {form} = editLocationFormUiState

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

                    <div className="flex flex-column">
                        <label className="mr2" htmlFor={form.$('address').id}>
                            {form.$('address').label}
                        </label>
                        <FormControl
                            {...form.$('address').bind()}
                        />
                        <p className="error">{form.$('address').error}</p>
                    </div>

                    <div className="flex flex-column">
                        <label className="mr2" htmlFor={form.$('latitude').id}>
                            {form.$('latitude').label}
                        </label>
                        <FormControl
                            {...form.$('latitude').bind()}
                        />
                        <p className="error">{form.$('latitude').error}</p>
                    </div>

                    <div className="flex flex-column">
                        <label className="mr2" htmlFor={form.$('longitude').id}>
                            {form.$('longitude').label}
                        </label>
                        <FormControl
                            {...form.$('longitude').bind()}
                        />
                        <p className="error">{form.$('longitude').error}</p>
                    </div>

                    <div className="flex flex-column">
                        <label className="mr2" htmlFor={form.$('category').id}>
                            {form.$('category').label}
                        </label>

                        <Select
                            {...form.$('category').bind()}
                            options={categoriesStore.transformedCategories}
                            isMulti={false}
                        />
                        <p className="error">{form.$('category').error}</p>
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

export default EditLocationForm;
