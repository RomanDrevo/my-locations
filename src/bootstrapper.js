// import ApiGateway from "./api/ApiGateway";
// import env from "./env";

import CategoriesStore from "./stores/CategoriesStore";
import LocationsStore from "./stores/LocationsStore";
import AddCategoryFormUiState from "./components/categoryForm/addCategory/AddCategoryFormUiState"
import EditCategoryFormUiState from "./components/categoryForm/editCategory/EditCategoryUiState"
import AddLocationFormUiState from "./components/locationForm/addLocation/AddLocationFormUiState"

const bootstrapper = () => {
    // const apiGateway = new ApiGateway('https://jsonplaceholder.typicode.com/');
    // const apiGateway = new ApiGateway(env.API_URL);

    // model stores
    const categoriesStore = new CategoriesStore();
    const locationsStore = new LocationsStore();
    const addCategoryFormUiState = new AddCategoryFormUiState(categoriesStore)
    const editCategoryFormUiState = new EditCategoryFormUiState(categoriesStore)
    const addLocationFormUiState = new AddLocationFormUiState(locationsStore)

    return {
        categoriesStore,
        locationsStore,
        addCategoryFormUiState,
        editCategoryFormUiState,
        addLocationFormUiState
    };
};

export default bootstrapper;
