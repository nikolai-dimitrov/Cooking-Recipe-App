import { useContext } from "react";
import { RecipeContext } from "../../contexts/RecipeContext";
import { Recipe } from "./recipe/Recipe";
import styles from "./our-recipes.module.css";
export const OurRecipes = () => {
    const { recipes } = useContext(RecipeContext);
    return (
        //
        <>
            <section className={styles.recipes}>
                {/* TODO: PAGINATION IF MORE THAN 9 and remove 80vh with inline styling here.*/}
                {recipes.map((el) => (
                    <Recipe key={el._id} {...el} />
                ))}
            </section>
        </>
    );
};
