import { createContext, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import * as stringFormatter from "../utils/stringFormatter";
import { recipeServiceFactory } from "../services/recipeService";
import { reviewServiceFactory } from "../services/reviewsService";

export const RecipeContext = createContext();
export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const recipeService = recipeServiceFactory();
    const reviewService = reviewServiceFactory();

    const navigate = useNavigate();

    useEffect(() => {
        recipeService.getAll().then((result) => setRecipes(result));
    }, []);
    //Handlers
    const recipeCreateHandler = async (data) => {
        let recipe = await recipeService.create(data);
        setRecipes((state) => [...state, recipe]);
        navigate("/our-recipes");
    };

    const recipeEditHandler = async (data, recipeId) => {
        let recipe = await recipeService.edit(recipeId, data);
        setRecipes((state) => [...state, recipe]);
        navigate(`/recipes/details/${recipe._id}`);
    };

    const recipeDeleteHandler = async (recipeId) => {
        await recipeService.remove(recipeId);
        setRecipes((state) => state.filter((r) => r._id !== recipeId));
        navigate("/our-recipes");
    };

    const reviewsAlreadyViewedHandler = async (recipeId, userId) => {
        const hasReviewed = await reviewService.hasAlreadyReviewed(
            recipeId,
            userId
        );
        if (!hasReviewed) {
            await reviewService.create(recipeId, userId);
            return true;
        }
    };

    const recipeContextValue = {
        recipeCreateHandler,
        recipeEditHandler,
        recipeDeleteHandler,
        reviewsAlreadyViewedHandler,
        recipes,
    };
    return (
        //
        <RecipeContext.Provider value={recipeContextValue}>
            {children}
        </RecipeContext.Provider>
    );
};
export const RecipeContextLayout = () => {
    return (
        <RecipeProvider>
            <Outlet />
        </RecipeProvider>
    );
};
