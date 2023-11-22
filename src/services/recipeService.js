const baseUrl = "http://localhost:3030/data/recipes";
import * as stringFormatter from "../utils/stringFormatter";
import { requestFactory } from "../utils/requester";
export const recipeServiceFactory = () => {
    const request = requestFactory();
    const getAll = async () => {
        let response = await request.get(baseUrl);
        return response;
    };

    const create = async (data) => {
        //TODO: In form format data etc... here only send data to the server.
        let ingredients = stringFormatter.fromStringToObject(data);
        data = { ...data, ingredients: ingredients };

        const response = await request.post(baseUrl, data);
        return response;
    };

    return {
        getAll,
        create,
    };
};
