// import ApiGateway from "./api/ApiGateway";
// import env from "./env";

import CategoriesStore from "./stores/CategoriesStore";
import LocationsStore from "./stores/LocationsStore";
import AddCategoryFormUiState from "./components/categoryForm/addCategory/AddCategoryFormUiState"
import EditCategoryFormUiState from "./components/categoryForm/editCategory/EditCategoryUiState"
import AddLocationFormUiState from "./components/locationForm/addLocation/AddLocationFormUiState"
import EditLocationFormUiState from "./components/locationForm/editLocation/EditLocationFormUiState";

const bootstrapper = () => {
    // const apiGateway = new ApiGateway('https://jsonplaceholder.typicode.com/');
    // const apiGateway = new ApiGateway(env.API_URL);

    // model stores
    const categoriesStore = new CategoriesStore();
    const locationsStore = new LocationsStore();
    const addCategoryFormUiState = new AddCategoryFormUiState(categoriesStore)
    const editCategoryFormUiState = new EditCategoryFormUiState(categoriesStore)
    const addLocationFormUiState = new AddLocationFormUiState(locationsStore)
    const editLocationFormUiState = new EditLocationFormUiState(locationsStore)

    return {
        categoriesStore,
        locationsStore,
        addCategoryFormUiState,
        editCategoryFormUiState,
        addLocationFormUiState,
        editLocationFormUiState
    };
};

export default bootstrapper;
