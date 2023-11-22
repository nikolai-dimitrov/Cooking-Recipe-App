import { createContext, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import * as stringFormatter from "../utils/stringFormatter";
import { recipeServiceFactory } from "../services/recipeService";

export const RecipeContext = createContext();
export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const recipeService = recipeServiceFactory();
    const navigate = useNavigate();

    useEffect(() => {
        recipeService.getAll().then((result) => setRecipes(result));
    }, []);

    //Handlers
    const recipeCreateHandler = async (data) => {
        let recipe = await recipeService.create(data);
        setRecipes((state) => [...state, recipe]);
        navigate(`/recipes/details/:${recipe._id}`);
    };

    const recipeEditHandler = (data) => {
        // let ingredients = stringFormatter.fromObjectToString(data.ingredients);
        // data = { ...data, ingredients: ingredients };
    };

    const recipeContextValue = {
        recipeCreateHandler,
        recipes,
    };
    console.log(recipes);
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
