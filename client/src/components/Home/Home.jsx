import { useState, useEffect } from "react";
import { recipeServiceFactory } from "../../services/recipeService";
import { useRecipeExtraData } from "../../hooks/useRecipeExtraData";
import {
    sortMostRatedRecipes,
    sortMostLikedRecipes,
    sortMostUnlikeRecipes,
} from "../../utils/rating";
import { Recipe } from "../OurRecipes/recipe/Recipe";
import { NotFound } from "../NotFound/NotFound";
import styles from "../Home/home.module.css";
export const Home = () => {
    const { recipes, addRatingsToRecipe } = useRecipeExtraData([]);
    const [error, setError] = useState(null);
    const recipeService = recipeServiceFactory();

    useEffect(() => {
        recipeService
            .getAll()
            .then((res) => {
                addRatingsToRecipe(res);
            })
            .catch((err) => {
                setError(err);
            });
    }, []);

    return (
        <section className={recipes.length != 0?`${styles.home}`: `${styles.home} ${styles.full__height}`}>
            {error ? (
                <NotFound />
            ) : recipes.length > 0 ? (
                <>
                    <div className={styles.home__row_wrapper}>
                        <h1 className={styles.row__title}>
                            Most Voted Recipes
                        </h1>
                        <div className={styles.home__row}>
                            {sortMostRatedRecipes(recipes)
                                .slice(0, 3)
                                .map((el) => (
                                    <div
                                        key={el._id}
                                        className={styles.card__wrapper}
                                    >
                                        <Recipe {...el} homePageCard={true} />
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div>
                        <div className={styles.home__row_wrapper}>
                            <h1 className={styles.row__title}>
                                Most Liked Recipes
                            </h1>
                            <div className={styles.home__row}>
                                {sortMostLikedRecipes(recipes)
                                    .slice(0, 3)
                                    .map((el) => (
                                        <div
                                            key={el._id}
                                            className={styles.card__wrapper}
                                        >
                                            <Recipe
                                                {...el}
                                                homePageCard={true}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.home__row_wrapper}>
                            <h1 className={styles.row__title}>
                                Most Unliked Recipes
                            </h1>
                            <div className={styles.home__row}>
                                {sortMostUnlikeRecipes(recipes)
                                    .slice(0, 3)
                                    .map((el) => (
                                        <div
                                            key={el._id}
                                            className={styles.card__wrapper}
                                        >
                                            <Recipe
                                                {...el}
                                                homePageCard={true}
                                                likesCount={el.likesCount}
                                                disLikesCount={el.disLikesCount}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className={styles.home__row_wrapper}>
                    <h1 className={styles.row__title}>
                        There aren't any recipes.
                    </h1>
                </div>
            )}
        </section>
    );
};
