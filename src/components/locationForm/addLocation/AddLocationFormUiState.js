import validatorjs from 'validatorjs';
import MobxReactForm from 'mobx-react-form';

const plugins = {
    dvr: {
        package: validatorjs
    }
}

const fields = [
    {
        name: 'locationName',
        label: 'Location Name',
        rules: 'required|string|between:2,25',
        options: {
            validateOnChange: true
        }
    },
    {
        name: 'latitude',
        label: 'Latitude',
        rules: 'required|numeric|min:-90|max: 90',
        options: {
            validateOnChange: true
        }
    },
    {
        name: 'longitude',
        label: 'Longitude',
        rules: 'required|numeric|min:-180|max: 180',
        options: {
            validateOnChange: true
        }
    },
    {
        name: 'address',
        label: 'Address',
        rules: 'required|string',
        options: {
            validateOnChange: true
        }
    },
    {
        name: 'category',
        label: 'Category',
        rules: 'required',
        type: 'select',
        options: {
            validateOnChange: true
        }
    },
];

export default class AddLocationFormUiState {

    constructor(locationsStore) {

        const hooks = {
            onSubmit(form) {

            },
            onSuccess(form) {
                // get field values
                console.log('values: ', form.values())
                let newLocation = form.values()
                locationsStore._createLocation(newLocation)
                form.clear()
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
