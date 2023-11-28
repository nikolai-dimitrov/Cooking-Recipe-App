import { useState ,useContext} from "react";
import styles from "./recipe-create.module.css";
import { RecipeForm } from "../RecipeForm/RecipeForm";
import { RecipeContext } from "../../contexts/RecipeContext";

export const RecipeCreate = () => {
    const { recipeCreateHandler } = useContext(RecipeContext);

    const [initialForm, setInitialForm] = useState({
        //Initialized empty values because initially they are undefined and there is an error.
        title: "",
        cookingTime: "",
        portions: "",
        difficulty: "",
        imageUrl: "",
        ingredients: "",
        description: "",
    });
    return (
        <section className={styles.create}>
            <div className={styles.container}>
                <h1 className={styles.form__title}>Create</h1>
                <p className={styles.form__subtitle}>
                    Share your recipes with us
                </p>
                <RecipeForm btnName={"Create"} initialForm={initialForm} formSubmitHandler={recipeCreateHandler} />
            </div>
        </section>
    );
};
