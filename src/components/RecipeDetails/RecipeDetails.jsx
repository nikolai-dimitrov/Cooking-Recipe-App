import { useState, useEffect, useContext } from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { recipeServiceFactory } from "../../services/recipeService";
import { RecipeDelete } from "../RecipeDelete/RecipeDelete";
import styles from "./recipe-details.module.css";
export const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});
    const { user, isAuthenticated } = useContext(AuthContext);
    const [showRecipeDelete, setShowRecipeDelete] = useState(false);
    const recipeService = recipeServiceFactory();
    const { recipeId } = useParams();
    let formattedIngredients = [];

    const showDeleteModal = () => {
        setShowRecipeDelete(true);
    };

    const closeDeleteModal = () => {
        setShowRecipeDelete(false);
    };

    useEffect(() => {
        recipeService.getOne(recipeId).then((res) => setRecipe(res));
    }, [recipeId]);

    const isOwner = recipe._ownerId == user._id;
    formattedIngredients = recipe.ingredients
        ? Object.entries(recipe.ingredients).map((k) => {
              return `${k[0]}: ${k[1]}`;
          })
        : [];

    return (
        <section className={styles.recipe}>
            {showRecipeDelete && (
                <RecipeDelete closeDeleteModal={closeDeleteModal} {...recipe} />
            )}
            <div className={styles.card}>
                <h1 className={styles.card__title}>{recipe.title}</h1>
                <ul className={styles.recipe__data}>
                    <li>3.4 Rating</li>
                    <li>10 Total Ratings</li>
                    <li>2 Reviews</li>
                </ul>
                <p className={styles.card__desc}>{recipe.description}</p>
                <div className={styles.card__author}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
                        alt=""
                        className={styles.author__image}
                    />
                    <p className={styles.author__info}>Nikolay Dimitrov</p>
                    {isOwner && (
                        <Link to={`/recipes/edit/${recipeId}`}>Edit</Link>
                    )}
                    {isOwner && (
                        <button onClick={showDeleteModal}>Delete</button>
                    )}
                    <button>Rate</button>
                </div>
                <div className={styles.card__body}>
                    <img
                        src={recipe.imageUrl}
                        alt=""
                        className={styles.card__image}
                    />
                    <ul className={styles.card__info}>
                        <li className={styles.info__item}>
                            Cooking Time: {recipe.cookingTime} mins
                        </li>
                        <li className={styles.info__item}>
                            Servings: {recipe.portions}
                        </li>
                        <li className={styles.info__item}>
                            Difficulty: {recipe.difficulty}
                        </li>
                        <li className={styles.info__item}>
                            Ingredients:
                            <ul>
                                {/* TODO: Unique key  */}
                                {formattedIngredients?.map((el, index) => (
                                    <li key={index}>{el}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
