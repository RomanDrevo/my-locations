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
    @observable transformedCategories = []


    _transformCategories = () =>{
        if (this.categories.length){
            this.categories.map((x, index) => {
                this.transformedCategories.push({
                    value: index,
                    label: x
                })
            })
        }
    }

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
        this.isLoadingCategories = true

        try{
            const categories = JSON.parse(localStorage.getItem('categories'))
            runInAction(()=> this.categories = categories)
            this._transformCategories()
        }
        catch (error) {
            console.error(`Failed to load categories. error: ${error}`, error);
            runInAction(() => this.loadCategoriesError = error);
        }
        finally {
            this.isLoadingCategories = false
            console.log('trans cat: ', this.transformedCategories)
        }

    }


    _createCategory = (category) => {
        this.transformedCategories.unshift({label: category, value: 0});
        this.categories.unshift(category)
        localStorage.setItem('categories', JSON.stringify(this.categories));
        // this.closeCreateNewCategoryModal()
    }


    _updateCategory = (category) =>{
        this.categories[this.selectedCategory] = category
        this.transformedCategories[this.selectedCategory].label = category
        localStorage.setItem('categories', JSON.stringify(this.categories));
        this.closeUpdateCategoryModal()
    }

    @action
    deleteCategory = () =>{
        this.transformedCategories.splice(this.selectedCategory, 1)
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
