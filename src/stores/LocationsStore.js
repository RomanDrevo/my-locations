import {action, observable, runInAction} from 'mobx';


export default class LocationsStore {
    @observable locations = []
    @observable isCreateLocationModalOpen = false
    @observable isLoadingLocations = false
    @observable loadCategoriesError = null
    @observable selectedLocation = null
    @observable isUpdateLocationModalOpen = false
    @observable locationToUpdate = null
    @observable isDeleteSwalOpen = false

    @action openCreateLocationModal = () => {
        this.isCreateLocationModalOpen = true
    }

    @action closeCreateLocationModal = () => {
        this.isCreateLocationModalOpen = false
    }

    @action
    async loadLocations() {
        this.isLoadingLocations = true

        try {
            const locations = JSON.parse(localStorage.getItem('locations'))
            runInAction(() => this.locations = locations)
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

    _updateLocation = (newLocation) => {
            newLocation.category = newLocation.category.label
        this.locations[this.selectedLocation] = newLocation
        localStorage.setItem('locations', JSON.stringify(this.locations));
        this.closeUpdateLocationModal()
    }

    @action
    deleteLocation = () => {
        this.locations.splice(this.selectedLocation, 1)
        localStorage.setItem('locations', JSON.stringify(this.locations));
        this.closeDeleteSwal()
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
    openUpdateLocationModal = (index) => {
        this.selectedLocation = index
        this.isUpdateLocationModalOpen = true
        this.locationToUpdate = this.locations[index]
    }

    @action
    closeUpdateLocationModal = () => {
        this.isUpdateLocationModalOpen = false
    }

}
