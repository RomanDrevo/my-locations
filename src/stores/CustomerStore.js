import { action, observable, runInAction } from 'mobx';
import validatorjs from 'validatorjs';
import MobxReactForm from 'mobx-react-form';

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
    // {
    //     name: 'lastName',
    //     label: 'Last Name',
    //     // placeholder: 'Insert Last Name',
    //     rules: 'required|string|between:2,25',
    // },
    // {
    //     name: 'companyName',
    //     label: 'Company Name',
    //     rules: 'required|string|between:1,25',
    // },

    {
        name: 'phone',
        label: 'מספר טלפון',
        rules: ['required', 'regex:/^(\\()?0?(5[02-9])(\\))?-?\\d{7}$/']
    },
    {
        name: 'city',
        label: 'אזור',
        rules: 'required|string|between:1,25',
    },
    {
        name: 'description',
        label: 'פרטים על התקלה',
        rules: 'string'
    },
    {
        name: 'hidePhone',
        label: 'הסתר מספר טלפון',
        rules: 'boolean',
        type: 'checkbox'
    }
];

export default class CustomerStore {
    @observable isServiceCallFormOpen = false;


    constructor(apiGateway) {

        const hooks = {

            onSubmit(form) {
                // console.log('Form is submitted! YES! Values are: ', form.values());
                console.log('New Service Call has been sent to server :', form.values());

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

    plugins() {
        return {
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
                },
            }
        };
    }

    @action
    openServiceCallForm = () => {
            this.isServiceCallFormOpen = true
    }

    @action
    closeServiceCallForm = () => {
        this.isServiceCallFormOpen = false
    }
}
