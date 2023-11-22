import styles from "./recipe.module.css";
import { Link } from "react-router-dom";
export const Recipe = ({
    title,
    imageUrl,
    cookingTime,
    portions,
    difficulty,
}) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image__container}>
                    <img
                        src={imageUrl}
                        alt="no-image"
                        className={styles.card__image}
                    />
                </div>
                <div className={styles.card__body}>
                    <h3 className={styles.card__title}>{title}</h3>
                    <div className={styles.card__desc}>
                        <p>
                            Cooking Time: <span>{cookingTime} min</span>
                        </p>
                        <p>
                            Portions: <span>{portions}</span>
                        </p>
                        <p>
                            Difficulty: <span>{difficulty}</span>
                        </p>
                    </div>
                    <Link to="/" className={styles.card__btn}>
                        Read More
                    </Link>
                </div>
            </div>
        </>
    );
};
