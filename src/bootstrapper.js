import ApiGateway from "./api/ApiGateway";
// import env from "./env";
import env from "./env";
import CategoriesStore from "./stores/CategoriesStore";
import AddCategoryFormUiState from "./components/categoryForm/addCategory/AddCategoryFormUiState"
import EditCategoryFormUiState from "./components/categoryForm/editCategory/EditCategoryUiState"

const bootstrapper = () => {
    // const apiGateway = new ApiGateway('https://jsonplaceholder.typicode.com/');
    const apiGateway = new ApiGateway(env.API_URL);

    // model stores
    const categoriesStore = new CategoriesStore(apiGateway);
    const addCategoryFormUiState = new AddCategoryFormUiState(categoriesStore)
    const editCategoryFormUiState = new EditCategoryFormUiState(categoriesStore)


    return {
        categoriesStore,
        addCategoryFormUiState,
        editCategoryFormUiState
    };
};

export default bootstrapper;
