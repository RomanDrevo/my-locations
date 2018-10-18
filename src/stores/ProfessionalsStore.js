import { action, observable, runInAction } from 'mobx';
import validatorjs from 'validatorjs'
import MobxReactForm from 'mobx-react-form'

const plugins = {
    dvr: {
        package: validatorjs,
        extend: ($validator) => {
            let messages = $validator.getMessages('en');
            messages.required = '*יש להזין :attribute';
            messages.accepted = '*עליך לאשר :attribute';
            messages.email = '*כתובת מייל שגויה';
            messages.digits = '*יש להזין מספר תקין בעל 6 ספרות';
            messages.regex = '*מספר ה:attribute שגוי';
            messages.numeric = ':attribute חייבות להיות מספר*';
            messages.integer = ':attribute חייבות להיות מספר*';
            $validator.setMessages('en', messages);
        }
    }
}

const fields = [
    {
        name: 'email',
        label: 'דואר אלקטרוני',
        // placeholder: 'Insert Email',
        rules: 'required|email|string|between:5,25',
    },
    {
        name: 'firstName',
        label: 'שם',
        // placeholder: 'Insert First Name',
        rules: 'required|string|between:2,25',
    },
    {
        name: 'lastName',
        label: 'שם משפחה',
        // placeholder: 'Insert Last Name',
        rules: 'required|string|between:2,25',
    },
    {
        name: 'category',
        label: 'תחום',
        rules: 'required|between:1,25',
        type: 'select',
        options: {
            validateOnChange: true
        }
    },

    {
        name: 'phone',
        label: 'מספר טלפון',
        rules: ['required', 'regex:/^(\\()?0?(5[02-9])(\\))?-?\\d{7}$/']
    },
    {
        name: 'city',
        label: 'אזור',
        rules: 'required|string|between:1,25',
        options: {
            validateOnChange: true
        }
    }
];

export default class ProfessionalsStore {
    @observable professionals = [];
    @observable isLoadingProfessionals = false;
    @observable loadProfessionalsError = null;
    @observable isProfessionalFormOpen = false;



    constructor(apiGateway) {
        const hooks = {

            onSubmit(form) {
                // console.log('Form is submitted! YES! Values are: ', form.values());
                console.log('New Professional has been sent to server :', form.values());

                // if (form.values().po) {
                //     togglePoChecked()
                // }
                // axios.get('https://jsonplaceholder.typicode.com/users')
                //     .then((response) => {
                //         console.log('response: ', response)
                //         toggleRedirect()
                //     })


            },
            onSuccess(form) {
                // get field values
                console.log('Form Values!', form.values());
            },
            onError(form) {
                alert('Form has errors!');
                // get all form errors
                console.log('All form errors', form.errors());
            }
        }

        this.form = new MobxReactForm({fields}, {plugins, hooks});
        this._apiGateway = apiGateway;
    }

    @action
    openProfessionalForm = () => {
        this.isProfessionalFormOpen = true
        console.log('open')
    }

    @action
    closeProfessionalForm = () => {
        this.isProfessionalFormOpen = false
    }

    @action
    async loadProfessionals() {
        this.isLoadingProfessionals = true;

        try {
            const professionals = await this._apiGateway.fetchProfessionals();
            runInAction(() => this.professionals = professionals);
        }
        catch (error) {
            console.error(`Failed to load professionals. error: ${error}`, error);
            runInAction(() => this.loadProfessionalsError = error);
        }
        finally {
            runInAction(() => this.isLoadingProfessionals = false);
        }
    }
}
