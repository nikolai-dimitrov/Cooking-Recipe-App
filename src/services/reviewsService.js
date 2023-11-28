const baseUrl = "http://localhost:3030/data/reviews5";
import { requestFactory } from "../utils/requester";
export const reviewServiceFactory = () => {
    const request = requestFactory();
    const create = async (recipeId, userId) => {
        console.log(recipeId, "from service");
        const data = { recipeId, userId };
        const result = await request.post(`${baseUrl}`, data);
    };

    const getReviewsCount = async (recipeId) => {
        const searchQuery = encodeURIComponent(`recipeId="${recipeId}"`);
        const result = await request.get(`${baseUrl}?where=${searchQuery}`);
        return result.length;
    };

    const hasAlreadyReviewed = async (recipeId, userId) => {
        const searchQuery = encodeURIComponent(`userId="${userId}"`);
        const result = await request.get(`${baseUrl}?where=${searchQuery}`);
        let reviewedRecipe = result.find((x) => recipeId == x.recipeId);
        if (!reviewedRecipe) {
            return false;
        }
        return true;
    };
    return {
        create,
        getReviewsCount,
        hasAlreadyReviewed,
    };
};
