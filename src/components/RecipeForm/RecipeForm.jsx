import styles from "./recipe-form.module.css";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
export const RecipeForm = ({
    btnName,
    initialForm,
    formSubmitHandler,
    recipeId,
}) => {
    const {
        formValues,
        formErrors,
        onChange,
        onSubmit,
        changeInitialValues,
        validateInputHandler,
    } = useForm(initialForm, formSubmitHandler);

    useEffect(() => {
        changeInitialValues(initialForm);
    }, [initialForm]);

    return (
        <form
            action=""
            className={styles.create__form}
            onSubmit={(event) => onSubmit(event, recipeId)}
        >
            <div className={styles.form__group}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Spaghetti Bolognese"
                    onChange={onChange}
                    onBlur={(e) => validateInputHandler(e, "recipe")}
                    value={formValues["title"]}
                />
                {formErrors["title"] && (
                    <p className={styles.input_error}>{formErrors["title"]}</p>
                )}
            </div>
            <div className={styles.form__group}>
                <label htmlFor="cookingTime">Cooking Time</label>

                <input
                    type="text"
                    id="cookingTime"
                    name="cookingTime"
                    placeholder="40"
                    onChange={onChange}
                    onBlur={(e) => validateInputHandler(e, "recipe")}
                    value={formValues["cookingTime"]}
                />
                {formErrors["cookingTime"] && (
                    <p className={styles.input_error}>
                        {formErrors["cookingTime"]}
                    </p>
                )}
            </div>
            <div className={styles.form__group}>
                <label htmlFor="portions">Portions</label>
                <input
                    type="text"
                    id="portions"
                    name="portions"
                    placeholder="4"
                    onChange={onChange}
                    onBlur={(e) => validateInputHandler(e, "recipe")}
                    value={formValues["portions"]}
                />
                {formErrors["portions"] && (
                    <p className={styles.input_error}>
                        {formErrors["portions"]}
                    </p>
                )}
            </div>
            <div className={styles.form__group}>
                <label htmlFor="difficulty">Difficulty</label>
                <select name="difficulty" id="difficulty" onChange={onChange}>
                    {/* TODO: Show selected attribute ,not only Easy. */}
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div className={styles.form__group}>
                <label htmlFor="imageUrl">Image</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="https://example-image.com"
                    onChange={onChange}
                    onBlur={(e) => validateInputHandler(e, "recipe")}
                    value={formValues["imageUrl"]}
                />
                {formErrors["imageUrl"] && (
                    <p className={styles.input_error}>
                        {formErrors["imageUrl"]}
                    </p>
                )}
            </div>
            <div className={styles.form__group}>
                <label htmlFor="ingredients">Ingredients</label>
                <textarea
                    type="text"
                    id="ingredients"
                    name="ingredients"
                    placeholder="Tomatoes - 250g; Beef - 500g;"
                    onChange={onChange}
                    onBlur={(e) => validateInputHandler(e, "recipe")}
                    value={formValues["ingredients"]}
                ></textarea>
                {formErrors["ingredients"] && (
                    <p className={styles.input_error}>
                        {formErrors["ingredients"]}
                    </p>
                )}
            </div>
            <div className={styles.form__group}>
                <label htmlFor="description">Description</label>
                <textarea
                    type="text"
                    id="description"
                    name="description"
                    placeholder="First you have to cut the onion..."
                    onChange={onChange}
                    onBlur={(e) => validateInputHandler(e, "recipe")}
                    value={formValues["description"]}
                ></textarea>
                {formErrors["description"] && (
                    <p className={styles.input_error}>
                        {formErrors["description"]}
                    </p>
                )}
            </div>
            <button className={styles.btn}>{btnName}</button>
        </form>
    );
};
