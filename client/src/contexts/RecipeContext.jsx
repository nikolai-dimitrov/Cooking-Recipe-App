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
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadingTimeoutId = setTimeout(() => {
            setIsLoading(true);
        }, 300);

        recipeService
            .getRecipesPerPage(offSet)
            .then((result) => {
                setRecipes(result);
                clearTimeout(loadingTimeoutId);
                setIsLoading(false);
            })
            .catch((error) => {
                // redirect to 404 instead of clearing the timeout
                // clearTimeout(loadingTimeoutId);
                setIsLoading(false);
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
        } catch (err) { }
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
        isLoading,
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
