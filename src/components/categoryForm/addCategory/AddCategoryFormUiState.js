import validatorjs from 'validatorjs';
import MobxReactForm from 'mobx-react-form';

const plugins = {
    dvr: {
        package: validatorjs
    }
}

const fields = [
    {
        name: 'categoryName',
        label: 'Category Name',
        rules: 'required|string|between:2,25',
        options: {
            validateOnChange: true
        }
    }
];

export default class AddCategoryFormUiState {

    constructor(categoriesStore) {

        const hooks = {
            onSubmit(form) {

            },
            onSuccess(form) {
                // get field values
                console.log('here!')
                categoriesStore._createCategory(form.values().categoryName)
            },
            onError(form) {
                alert('Form has errors!');
                // get all form errors
                console.log('All form errors', form.errors());
            }
        }

        this.form = new MobxReactForm({fields}, {plugins, hooks});
    }
}
