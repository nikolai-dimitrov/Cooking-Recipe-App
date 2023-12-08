const baseUrl = "http://localhost:3030/data/recipes";
import * as stringFormatter from "../utils/stringFormatter";
import { requestFactory } from "../utils/requester";
export const recipeServiceFactory = () => {
    const request = requestFactory();
    const getAll = async () => {
        let response = await request.get(`${baseUrl}`);
        return response;
    };

    const getRecipesPerPage = async (offSet) => {
        let response = await request.get(
            `${baseUrl}?offset=${offSet}&pageSize=15`
        );
        return response;
    };

    const getOne = async (recipeId) => {
        let response = await request.get(`${baseUrl}/${recipeId}`);
        return response;
    };
    const getUserRecipes = async (userId) => {
        const searchQuery = encodeURIComponent(`_ownerId="${userId}"`);

        const response = await request.get(`${baseUrl}?where=${searchQuery}`);
        return response;
    };

    //TODO: In form format data etc... here only send data to the server.
    const create = async (data) => {
        let ingredients = stringFormatter.fromStringToObject(data);
        data = { ...data, ingredients: ingredients };

        const response = await request.post(baseUrl, data);
        return response;
    };

    const edit = async (recipeId, data) => {
        let ingredients = stringFormatter.fromStringToObject(data);
        data = { ...data, ingredients: ingredients };

        const response = await request.put(`${baseUrl}/${recipeId}`, data);
        return response;
    };

    const remove = async (recipeId) => {
        let response = await request.remove(`${baseUrl}/${recipeId}`);
        return response;
    };

    return {
        getAll,
        getRecipesPerPage,
        getUserRecipes,
        getOne,
        create,
        edit,
        remove,
    };
};
