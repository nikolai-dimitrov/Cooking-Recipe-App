import { useContext } from "react";
import { RecipeContext } from "../../contexts/RecipeContext";
import styles from "./recipe-delete.module.css";
export const RecipeDelete = ({ closeDeleteModal, _id }) => {
    const { recipeDeleteHandler } = useContext(RecipeContext);

    return (
        <div className={styles.delete__modal}>
            <h1>Are you sure you want to delete recipe below?</h1>
            <p>It will remove entity and Reviews and Ratings.</p>
            <button onClick={() => recipeDeleteHandler(_id)}>Yes</button>
            <button onClick={closeDeleteModal}>No</button>
        </div>
    );
};
