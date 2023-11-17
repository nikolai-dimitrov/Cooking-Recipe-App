import styles from "./recipe-form.module.css";

export const RecipeForm = ({ btnName }) => {
    return (
        <form action="" className={styles.create__form}>
            <div className={styles.form__group}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Spaghetti Bolognese"
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
                />
                {/* <p className={styles.create_error}>Title should contain at least 8 characters</p> */}
            </div>
            <div className={styles.form__group}>
                <label htmlFor="difficulty">Difficulty</label>
                <select name="difficulty" id="difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div className={styles.form__group}>
                <label htmlFor="imageUrl">Image</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="https://example-image.com"
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
                ></textarea>
                {/* <p className={styles.create_error}>Title should contain at least 8 characters</p> */}
            </div>
            <button className={styles.btn}>{btnName}</button>
        </form>
    );
};
