import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecipeContext } from "../../contexts/RecipeContext";
import { AuthContext } from "../../contexts/AuthContext";
import { RecipeForm } from "../RecipeForm/RecipeForm";
import { recipeServiceFactory } from "../../services/recipeService";
import { fromObjectToString } from "../../utils/stringFormatter";
import { NotFound } from "../NotFound/NotFound";
import styles from "./recipe-edit.module.css";
export const RecipeEdit = () => {
    const { recipeId } = useParams();
    const recipeService = recipeServiceFactory();
    const { recipeEditHandler } = useContext(RecipeContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [initialForm, setInitialForm] = useState({
        title: "",
        cookingTime: "",
        portions: "",
        difficulty: "",
        imageUrl: "",
        ingredients: "",
        description: "",
    });

    useEffect(() => {
        recipeService
            .getOne(recipeId)
            .then((res) => {
                let { _ownerId, _id, _createdOn, ...values } = res;
                values.ingredients = fromObjectToString(values.ingredients);
                setInitialForm(values);
                setError(null);
                if (_ownerId != user._id) {
                    navigate("/unauthorized");
                    return;
                }
            })
            .catch((err) => {
                setError(err);
            });
    }, [recipeId]);

    return (
        <section className={styles.edit}>
            {error ? (
                <NotFound />
            ) : (
                <>
                    <div className={styles.container}>
                        <h1 className={styles.form__title}>Edit</h1>
                        <p className={styles.form__subtitle}>
                            Modify your recipe now
                        </p>
                        <RecipeForm
                            btnName={"Edit"}
                            initialForm={initialForm}
                            formSubmitHandler={recipeEditHandler}
                            recipeId={recipeId}
                        />
                    </div>
                </>
            )}
        </section>
    );
};
