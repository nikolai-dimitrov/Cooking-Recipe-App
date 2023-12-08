import { createContext, useState, useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { recipeServiceFactory } from "../services/recipeService";
import { reviewServiceFactory } from "../services/reviewsService";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);
    const [offSet, setOffSet] = useState(0);
    const recipeService = recipeServiceFactory();
    const reviewService = reviewServiceFactory();
    const navigate = useNavigate();
    useEffect(() => {
        recipeService
            .getRecipesPerPage(offSet)
            .then((result) => {
                setRecipes(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [offSet]);

    //Handlers
    const recipeCreateHandler = async (data) => {
        try {
            const ownerName = `${user.firstName} ${user.lastName}`;
            data = { ...data, ownerName };

            let recipe = await recipeService.create(data);
            setRecipes((state) => [...state, recipe]);
            navigate("/our-recipes");
        } catch (err) {
            if (err.code == 401) {
                navigate("/unauthorized");
            }
        }
    };

    const recipeEditHandler = async (data, recipeId) => {
        try {
            const ownerName = `${user.firstName} ${user.lastName}`;
            data = { ...data, ownerName };

            let recipe = await recipeService.edit(recipeId, data);
            setRecipes((state) =>
                state.map((r) => (r._id === recipeId ? recipe : r))
            );
            navigate(`/recipes/details/${recipe._id}`);
        } catch (err) {
            if (err.code == 401) {
                navigate("/unauthorized");
            }
        }
    };

    const recipeDeleteHandler = async (recipeId) => {
        try {
            await recipeService.remove(recipeId);
            setRecipes((state) => state.filter((r) => r._id !== recipeId));
            navigate("/our-recipes");
        } catch (err) {}
    };

    const reviewsAlreadyViewedHandler = async (recipeId, userId) => {
        try {
            const hasReviewed = await reviewService.hasAlreadyReviewed(
                recipeId,
                userId
            );

            if (!hasReviewed) {
                await reviewService.create(recipeId, userId);
                return true;
            }
        } catch (err) {}
    };

    const changePagesHandler = (e) => {
        if (e.target.textContent == "Prev") {
            setOffSet((state) => state - 15);
        } else {
            setOffSet((state) => state + 15);
        }
    };

    const lastPageHandler = () => {
        setOffSet((state) => state - 15);
    };

    const recipeContextValue = {
        recipeCreateHandler,
        recipeEditHandler,
        recipeDeleteHandler,
        reviewsAlreadyViewedHandler,
        changePagesHandler,
        lastPageHandler,
        recipes,
        offSet,
    };

    return (
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
