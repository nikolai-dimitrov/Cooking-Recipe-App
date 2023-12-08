import { Link } from "react-router-dom";
import styles from "./profile-recipe.module.css";
export const ProfileRecipe = ({ _id, imageUrl, title, reviews }) => {
    return (
        <article className={styles.card}>
            <div className={styles.image__wrapper}>
                <Link to={`/recipes/details/${_id}`}>
                    <img src={imageUrl} alt="" />
                </Link>
            </div>
            <div className={styles.desc__wrapper}>
                <h4>{title}</h4>
                <p>Total Reviews: {reviews}</p>
            </div>
        </article>
    );
};
