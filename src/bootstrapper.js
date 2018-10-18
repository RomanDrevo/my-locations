import ApiGateway from "./api/ApiGateway";
// import env from "./env";
import env from "./env";
import CategoriesStore from "./stores/CategoriesStore";


const bootstrapper = () => {
    // const apiGateway = new ApiGateway('https://jsonplaceholder.typicode.com/');
    const apiGateway = new ApiGateway(env.API_URL);

    // model stores
    const categoriesStore = new CategoriesStore(apiGateway);

    return {
        categoriesStore,
    };
};

export default bootstrapper;
