import { action, observable, runInAction } from 'mobx';

export default class CategoriesStore {
    @observable categories = [];
    @observable categoriesForDesktop = [];
    @observable isLoadingCategories = false;
    @observable loadCategoriesError = null;
    @observable isCreateNewCategoryModalOpen = false;




    constructor(apiGateway) {
        this._apiGateway = apiGateway;
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
    openCreateNewCategoryModal = () =>{
        this.isCreateNewCategoryModalOpen = true
    }

    @action
    closeCreateNewCategoryModal = () =>{
        this.isCreateNewCategoryModalOpen = false
    }

    @action
    async loadCategoriesForDesktop() {
        this.isLoadingCategories = true;

        try {
            const categories = await this._apiGateway.fetchCategories();
            runInAction(() => this.categoriesForDesktop = categories.slice(0, 6));

        }
        catch (error) {
            console.error(`Failed to load companies. error: ${error}`, error);
            runInAction(() => this.loadCategoriesError = error);
        }
        finally {
            runInAction(() => this.isLoadingCategories = false);
        }
    }
}
