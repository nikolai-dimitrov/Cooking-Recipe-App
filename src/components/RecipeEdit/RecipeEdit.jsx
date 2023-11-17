import { RecipeForm } from "../RecipeForm/RecipeForm";
import styles from "./recipe-edit.module.css";
export const RecipeEdit = () => {
    return (
        <section className={styles.edit}>
            <div className={styles.container}>
                <h1 className={styles.form__title}>Edit</h1>
                <p className={styles.form__subtitle}>Modify your recipe now</p>
                <RecipeForm btnName={"Edit"} />
            </div>
        </section>
    );
};
