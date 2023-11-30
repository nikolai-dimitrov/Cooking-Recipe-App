import { useState, useEffect, useContext } from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { RecipeContext } from "../../contexts/RecipeContext";
import { recipeServiceFactory } from "../../services/recipeService";
import { reviewServiceFactory } from "../../services/reviewsService";
import { ratingServiceFactory } from "../../services/ratingService";
import { RecipeDelete } from "../RecipeDelete/RecipeDelete";
import styles from "./recipe-details.module.css";

export const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});
    const [reviewsNum, setReviewsNum] = useState(0);
    const [showRecipeDelete, setShowRecipeDelete] = useState(false);

    const { user, isAuthenticated } = useContext(AuthContext);
    const {
        reviewsAlreadyViewedHandler,
        // recipeLikeHandler,
        // recipeDisLikeHandler,
    } = useContext(RecipeContext);

    const recipeService = recipeServiceFactory();
    const reviewService = reviewServiceFactory();
    const ratingService = ratingServiceFactory();

    const { recipeId } = useParams();
    let formattedIngredients = [];
    //TODO: Reviews into state like ratings.Not as number ,but as list with data.
    useEffect(() => {
        if (isAuthenticated) {
            const created = reviewsAlreadyViewedHandler(
                recipeId,
                user._id
            ).then((created) => {
                if (created) {
                    setReviewsNum((state) => (state += 1));
                }
            });
        }
        Promise.all([
            recipeService.getOne(recipeId),
            reviewService.getReviewsCount(recipeId),
            ratingService.getRatings(recipeId),
        ]).then(([recipeData, reviews, ratings]) => {
            const recipeObj = { ...recipeData, reviews, ratings };
            setRecipe(recipeObj);
            setReviewsNum(Number(reviews));
        });
    }, [recipeId]);

    const showDeleteModal = () => {
        setShowRecipeDelete(true);
    };

    const closeDeleteModal = () => {
        setShowRecipeDelete(false);
    };

    const recipeRatingHandler = async (like) => {
        const result = await ratingService.rateRecipe(recipeId, user._id, like);
        setRecipe((state) => ({
            ...state,
            ratings: [...state.ratings, result],
        }));
    };

    const isOwner = recipe._ownerId == user._id;
    const isRated = recipe.ratings?.filter((el) => el.userId == user._id);

    let likesCount = recipe.ratings?.filter((el) => el.like == true).length;
    let disLikesCount = recipe.ratings?.filter((el) => el.like == false).length;

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
                    <li>{likesCount} Likes</li>
                    <li>{disLikesCount} Dislikes</li>
                    <li>{recipe.ratings?.length} Total Ratings</li>
                    <li>{reviewsNum} Reviews</li>
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
                    {!isRated?.length ? (
                        <>
                            {isAuthenticated && (
                                <button
                                    onClick={() => recipeRatingHandler(true)}
                                >
                                    Like
                                </button>
                            )}
                            {isAuthenticated && (
                                <button
                                    onClick={() => recipeRatingHandler(false)}
                                >
                                    Dislike
                                </button>
                            )}
                        </>
                    ) : (
                        //To see liked or disliked.Were your vote.
                        <p>Thank you!</p>
                    )}
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
