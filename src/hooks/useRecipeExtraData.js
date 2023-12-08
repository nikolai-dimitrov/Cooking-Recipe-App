import { useState } from "react";
import { ratingServiceFactory } from "../services/ratingService";
import { reviewServiceFactory } from "../services/reviewsService";
export const useRecipeExtraData = (allRecipes) => {
    const [recipes, setRecipe] = useState(allRecipes);
    const ratingService = ratingServiceFactory();
    const reviewService = reviewServiceFactory();

    const addRatingsToRecipe = async (data) => {
        let recipesArray = [];
        for (const recipe of data) {
            const ratings = await ratingService.getRatings(recipe._id);
            const likesCount = ratings.filter((x) => x.like == true).length;
            const disLikesCount = ratings.filter((x) => x.like == false).length;

            recipesArray.push({
                ...recipe,
                ratings,
                likesCount,
                disLikesCount,
            });
        }
        setRecipe(recipesArray);
    };

    const addReviewsToRecipe = async (data) => {
        let recipesArray = [];
        for (const recipe of data) {
            const reviews = await reviewService.getReviewsCount(recipe._id);
            recipesArray.push({ ...recipe, reviews });
        }
        setRecipe(recipesArray);
    };

    return {
        recipes,
        setRecipe,
        addRatingsToRecipe,
        addReviewsToRecipe,
        addReviewsToRecipe,
    };
};
