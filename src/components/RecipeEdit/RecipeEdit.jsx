import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../../contexts/RecipeContext";
import { RecipeForm } from "../RecipeForm/RecipeForm";
import { recipeServiceFactory } from "../../services/recipeService";
import { fromObjectToString } from "../../utils/stringFormatter";
import styles from "./recipe-edit.module.css";
export const RecipeEdit = () => {
    const { recipeId } = useParams();
    const recipeService = recipeServiceFactory();
    const { recipeEditHandler } = useContext(RecipeContext);
    const [initialForm, setInitialForm] = useState({
        //TODO: USE useFORM HOOK HERE AND THINK ABOUT to pass props in the form and HOW TO DO to reuse this initialForm? check!!!
        //Initialized empty values because initially they are undefined and there is an error.
        title: "",
        cookingTime: "",
        portions: "",
        difficulty: "",
        imageUrl: "",
        ingredients: "",
        description: "",
    });

    useEffect(() => {
        recipeService.getOne(recipeId).then((res) => {
            let { _ownerId, _id, _createdOn, ...values } = res;
            values.ingredients = fromObjectToString(values.ingredients);
            setInitialForm(values);
        });
    }, [recipeId]);

    return (
        <section className={styles.edit}>
            <div className={styles.container}>
                <h1 className={styles.form__title}>Edit</h1>
                <p className={styles.form__subtitle}>Modify your recipe now</p>
                <RecipeForm
                    btnName={"Edit"}
                    initialForm={initialForm}
                    formSubmitHandler={recipeEditHandler}
                    recipeId={recipeId}
                />
            </div>
        </section>
    );
};
