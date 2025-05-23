import { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../../contexts/RecipeContext";
import { Recipe } from "./recipe/Recipe";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

import styles from "./our-recipes.module.css";
export const OurRecipes = () => {
    const { recipes, changePagesHandler, offSet, lastPageHandler, isLoading } =
        useContext(RecipeContext);
    const [removeNextPageBtn, setRemoveNextPageBtn] = useState(false);

    useEffect(() => {
        if (recipes.length == 0 && offSet > 0) {
            lastPageHandler();
            setRemoveNextPageBtn(true);
        }
    }, [recipes]);

    return (
        <>
            {isLoading ?
                <LoadingSpinner isLoading={isLoading} />
                :
                <section
                    className={
                        recipes.length > 9
                            ? `${styles.recipes}`
                            : `${styles.recipes} ${styles.viewportHeight}`
                    }
                >
                    <>
                        {recipes.map((el) => (
                            <Recipe key={el._id} {...el} />
                        ))}
                        {recipes.length > 0 && (
                            <div className={styles.pagination}>
                                {offSet >= 15 && (
                                    <button onClick={changePagesHandler}>Prev</button>
                                )}
                                {(recipes.length == 15 || removeNextPageBtn) && (
                                    <button
                                        onClick={(e) =>
                                            changePagesHandler(e, recipes.length)
                                        }
                                    >
                                        Next
                                    </button>
                                )}
                            </div>
                        )}
                    </>
                </section>
            }

        </>
    );
};
