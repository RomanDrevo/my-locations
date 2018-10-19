import React, {Component} from 'react';
import ResponsiveComponent from "../../../framework/components/ResponsiveComponent";
import '../CategoryForm.scss'
import {inject, observer} from "mobx-react/index";
import {Button, FormControl, FormGroup} from "react-bootstrap";


@inject('editCategoryFormUiState', 'categoriesStore')

@observer
class EditCategoryForm extends ResponsiveComponent {

    componentDidMount(){
        const {editCategoryFormUiState, categoriesStore} = this.props
        const {form} = editCategoryFormUiState
        form.set({categoryName: categoriesStore.categoryToUpdate});
    }

    renderDesktop() {
        const {editCategoryFormUiState} = this.props
        const {form} = editCategoryFormUiState

        return (
            <form id="category-form" className="category-form" onSubmit={form.onSubmit}>
                <FormGroup>
                    <div className="flex flex-column">
                        <label className="mr2" htmlFor={form.$('categoryName').id}>
                            {form.$('categoryName').label}
                        </label>
                        <FormControl
                            {...form.$('categoryName').bind()}
                        />
                        {/*<input className="ml1"  />*/}
                        <p className="error">{form.$('categoryName').error}</p>
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
        const {} = this.props

        return (
            <div>
                mobile form
            </div>
        );
    }

}

export default EditCategoryForm;
