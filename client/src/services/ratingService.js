const baseUrl = "http://localhost:3030/data/rating5";
import { requestFactory } from "../utils/requester";
export const ratingServiceFactory = () => {
    const request = requestFactory();
    const rateRecipe = async (recipeId, userId, likeStatus) => {
        const data = {
            recipeId,
            userId,
            like: likeStatus,
        };
        const result = request.post(`${baseUrl}`, data);
        return result;
    };

    const getRatings = async (recipeId) => {
        const searchQuery = encodeURIComponent(`recipeId="${recipeId}"`);
        const result = await request.get(`${baseUrl}?where=${searchQuery}`);
        return result;
    };
    return {
        rateRecipe,
        getRatings,
    };
};
