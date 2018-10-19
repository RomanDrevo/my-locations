import {action, observable, runInAction} from 'mobx';



export default class CategoriesStore {
    @observable categories = JSON.parse(localStorage.getItem('categories')) || [];
    @observable isDeleteSwalOpen = false;
    @observable isLoadingCategories = false;
    @observable loadCategoriesError = null;
    @observable isCreateNewCategoryModalOpen = false;
    @observable selectedCategory = null;
    @observable categoryToUpdate = null;
    @observable isUpdateCategoryModalOpen = false;


    // constructor(apiGateway) {
    //     this._apiGateway = apiGateway;
    // }

    @action
    openDeleteSwal = (index) => {
        this.selectedCategory = index
        this.isDeleteSwalOpen = true
    }

    @action
    closeDeleteSwal = () => {
        this.isDeleteSwalOpen = false
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


    _createCategory = (category) => {
        this.categories.unshift(category);
        localStorage.setItem('categories', JSON.stringify(this.categories));
        this.closeCreateNewCategoryModal()
    }


    _updateCategory = (category) =>{
        this.categories[this.selectedCategory] = category
        localStorage.setItem('categories', JSON.stringify(this.categories));
        this.closeUpdateCategoryModal()
    }

    @action
    deleteCategory = () =>{
        this.categories.splice(this.selectedCategory, 1)
        localStorage.setItem('categories', JSON.stringify(this.categories));
        this.closeDeleteSwal()
    }

    @action
    openCreateNewCategoryModal = () => {
        this.isCreateNewCategoryModalOpen = true
    }

    @action
    closeCreateNewCategoryModal = () => {
        this.isCreateNewCategoryModalOpen = false
    }

    @action
    openUpdateCategoryModal = (index) => {
        this.selectedCategory = index
        this.isUpdateCategoryModalOpen = true
        this.categoryToUpdate = this.categories[index]
        console.log('categoryToUpdate: ', this.categoryToUpdate)
    }

    @action
    closeUpdateCategoryModal = () => {
        this.isUpdateCategoryModalOpen = false
    }

}
