import {action, observable, runInAction} from 'mobx';
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


export default class CategoriesStore {
    @observable categories = JSON.parse(localStorage.getItem('categories'));
    @observable categoriesForDesktop = [];
    @observable isLoadingCategories = false;
    @observable loadCategoriesError = null;
    @observable isCreateNewCategoryModalOpen = false;


    constructor(apiGateway) {
        this._apiGateway = apiGateway;
        const createCategory = this._createCategory
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
                createCategory()
            },
            onError(form) {
                alert('Form has errors!');
                // get all form errors
                console.log('All form errors', form.errors());
            }
        }

        this.form = new MobxReactForm({fields}, {plugins, hooks});
    }

    @action
    async loadCategories() {
        this.isLoadingCategories = true;

        try {
            const categories = await this._apiGateway.fetchCategories();
            runInAction(() => this.categories = categories);
        }
        catch (error) {
            console.error(`Failed to load categories. error: ${error}`, error);
            runInAction(() => this.loadCategoriesError = error);
        }
        finally {
            runInAction(() => this.isLoadingCategories = false);
        }
    }

    @action
    _createCategory = () => {
        console.log('formValues: ', this.form.values())
        // this.categories = JSON.parse(localStorage.getItem('categories'));
        this.categories.push(this.form.values().categoryName);
        localStorage.setItem('categories', JSON.stringify(this.categories));
        this.closeCreateNewCategoryModal()
        this.form.clear()
    }

    @action
    openCreateNewCategoryModal = () => {
        this.isCreateNewCategoryModalOpen = true
    }

    @action
    closeCreateNewCategoryModal = () => {
        this.isCreateNewCategoryModalOpen = false
    }

}
