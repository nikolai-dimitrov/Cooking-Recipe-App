import { useState } from "react";
import { ratingServiceFactory } from "../services/ratingService";
export const useRecipeExtraData = (allRecipes) => {
    const [recipe, setRecipe] = useState(allRecipes);
    const ratingService = ratingServiceFactory();
    let recipesArray = [];

    const initialRecipesSet = async (data) => {
        for (const recipe of data) {
            const ratings = await ratingService.getRatings(recipe._id);
            recipesArray.push({ ...recipe, ratings });
        }
        setRecipe(recipesArray);
    };

    return [recipe, setRecipe, initialRecipesSet];
};
