import {action, observable, runInAction} from 'mobx';



export default class LocationsStore {
    @observable locations = []
    @observable isCreateLocationModalOpen = false
    @observable isLoadingLocations = false
    @observable loadCategoriesError = null

    @action openCreateLocationModal = () =>{
        this.isCreateLocationModalOpen = true
    }

    @action closeCreateLocationModal = () =>{
        this.isCreateLocationModalOpen = false
    }

    @action
    async loadLocations() {
        this.isLoadingLocations = true

        try{
            const locations = JSON.parse(localStorage.getItem('locations'))
            runInAction(()=> this.locations = locations)
        }
        catch (error) {
            console.error(`Failed to load locations. error: ${error}`, error);
            runInAction(() => this.loadCategoriesError = error);
        }
        finally {
            this.isLoadingLocations = false
        }

    }


    _createLocation = (location) => {
        location.category = location.category.label
        this.locations.unshift(location);
        localStorage.setItem('locations', JSON.stringify(this.locations));
        this.closeCreateLocationModal()
    }

    @action
    updateLocation = (locationIndex, newlocation) =>{
        console.log("location: ", locationIndex)

        this.locations[locationIndex] = newlocation
        localStorage.setItem('locations', JSON.stringify(this.locations));
    }

    // @action
    // openDeleteSwal = (index) => {
    //     this.selectedCategory = index
    //     this.isDeleteSwalOpen = true
    // }
    //
    // @action
    // closeDeleteSwal = () => {
    //     this.isDeleteSwalOpen = false
    // }






    // _updateCategory = (category) =>{
    //     this.categories[this.selectedCategory] = category
    //     localStorage.setItem('categories', JSON.stringify(this.categories));
    //     this.closeUpdateCategoryModal()
    // }
    //
    // @action
    // deleteCategory = () =>{
    //     this.categories.splice(this.selectedCategory, 1)
    //     localStorage.setItem('categories', JSON.stringify(this.categories));
    //     this.closeDeleteSwal()
    // }


    // @action
    // openUpdateCategoryModal = (index) => {
    //     this.selectedCategory = index
    //     this.isUpdateCategoryModalOpen = true
    //     this.categoryToUpdate = this.categories[index]
    //     console.log('categoryToUpdate: ', this.categoryToUpdate)
    // }

    // @action
    // closeUpdateCategoryModal = () => {
    //     this.isUpdateCategoryModalOpen = false
    // }

}
