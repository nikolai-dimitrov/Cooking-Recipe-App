import { useState } from "react";
import styles from "./recipe.module.css";
import { Link } from "react-router-dom";
import { RatingModal } from "../../Home/ratingModal/RatingModal";
export const Recipe = ({
    _id,
    title,
    imageUrl,
    cookingTime,
    portions,
    difficulty,
    homePageCard,
    likesCount,
    disLikesCount,
}) => {
    const [showModal, setShowModal] = useState(false);
    const showModalHandler = () => {
        setShowModal((state) => !state);
    };
    return (
        <>
            <div
                className={
                    homePageCard
                        ? `${styles.card} ${styles.homePage__card_layout}`
                        : styles.card
                }
            >
                <div
                    className={
                        homePageCard
                            ? `${styles.image__container} ${styles.homePage__image_layout}`
                            : styles.image__container
                    }
                >
                    <img
                        src={imageUrl}
                        alt="no-image"
                        className={styles.card__image}
                    />
                </div>
                <div
                    className={
                        homePageCard
                            ? `${styles.card__body} ${styles.homePage__card_body}`
                            : styles.card__body
                    }
                >
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
                    <div className={styles.card__btn_container}>
                        <Link
                            to={`/recipes/details/${_id}`}
                            className={styles.card__btn}
                        >
                            Read More
                        </Link>
                        {homePageCard && (
                            <button
                                className={styles.showModal__btn}
                                onClick={showModalHandler}
                            >
                                Show Rating
                            </button>
                        )}
                    </div>
                </div>
                {showModal && (
                    <RatingModal
                        likesCount={likesCount}
                        disLikesCount={disLikesCount}
                    />
                )}
            </div>
        </>
    );
};
