import styles from "./recipe-create.module.css";
import { RecipeForm } from "../RecipeForm/RecipeForm";
export const RecipeCreate = () => {
    return (
        <section className={styles.create}>
            <div className={styles.container}>
                <h1 className={styles.form__title}>Create</h1>
                <p className={styles.form__subtitle}>
                    Share your recipes with us
                </p>
                <RecipeForm btnName={"Create"} />
            </div>
        </section>
    );
};
