import styles from "./recipe-form.module.css";
import { useContext } from "react";
import { RecipeContext } from "../../contexts/RecipeContext";
import { useForm } from "../../hooks/useForm";
export const RecipeForm = ({ btnName }) => {
    const { recipeCreateHandler } = useContext(RecipeContext);
    const { formValues, onChange, onSubmit } = useForm(
        {
            title: "",
            cookingTime: "",
            portions: "",
            difficulty: "Easy",
            imageUrl: "",
            ingredients: "",
            description: "",
        },
        recipeCreateHandler
    );
    return (
        <form action="" className={styles.create__form} onSubmit={onSubmit}>
            <div className={styles.form__group}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Spaghetti Bolognese"
                    onChange={onChange}
                    value={formValues["title"]}
                />
                {/* <p className={styles.create_error}>Title should contain at least 8 characters</p> */}
            </div>
            <div className={styles.form__group}>
                <label htmlFor="cookingTime">Cooking Time</label>

                <input
                    type="text"
                    id="cookingTime"
                    name="cookingTime"
                    placeholder="40"
                    onChange={onChange}
                    value={formValues["cookingTime"]}
                />
                {/* <p className={styles.create_error}>Title should contain at least 8 characters</p> */}
            </div>
            <div className={styles.form__group}>
                <label htmlFor="portions">Portions</label>
                <input
                    type="text"
                    id="portions"
                    name="portions"
                    placeholder="4"
                    onChange={onChange}
                    value={formValues["portions"]}
                />
                {/* <p className={styles.create_error}>Title should contain at least 8 characters</p> */}
            </div>
            <div className={styles.form__group}>
                <label htmlFor="difficulty">Difficulty</label>
                <select name="difficulty" id="difficulty" onChange={onChange}>
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
                    value={formValues["imageUrl"]}
                />
                {/* <p className={styles.create_error}>Title should contain at least 8 characters</p> */}
            </div>
            <div className={styles.form__group}>
                <label htmlFor="ingredients">Ingredients</label>
                <textarea
                    type="text"
                    id="ingredients"
                    name="ingredients"
                    placeholder="Tomatoes - 250g; Beef - 1/2 kilo; "
                    onChange={onChange}
                    value={formValues["ingredients"]}
                ></textarea>
                {/* <p className={styles.create_error}>Title should contain at least 8 characters</p> */}
            </div>
            <div className={styles.form__group}>
                <label htmlFor="description">Description</label>
                <textarea
                    type="text"
                    id="description"
                    name="description"
                    placeholder="First you have to cut the onion..."
                    onChange={onChange}
                    value={formValues["description"]}
                ></textarea>
                {/* <p className={styles.create_error}>Title should contain at least 8 characters</p> */}
            </div>
            <button className={styles.btn}>{btnName}</button>
        </form>
    );
};
