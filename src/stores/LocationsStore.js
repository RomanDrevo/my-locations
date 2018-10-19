import {action, observable } from 'mobx';



export default class LocationsStore {
    @observable locations = []
    @observable isCreateLocationModalOpen = false


    @action openCreateLocationModal = () =>{
        this.isCreateLocationModalOpen = true
    }

    @action closeCreateLocationModal = () =>{
        this.isCreateLocationModalOpen = false
    }

    @action
    loadLocations = () => {

    }

    _createLocation = (location) => {
        this.locations.unshift(location);
        localStorage.setItem('locations', JSON.stringify(this.locations));
        this.closeCreateLocationModal()
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
