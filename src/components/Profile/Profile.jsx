import { useEffect, useContext, useState, useMemo } from "react";
import { useRecipeExtraData } from "../../hooks/useRecipeExtraData";
import { recipeServiceFactory } from "../../services/recipeService";
import { AuthContext } from "../../contexts/AuthContext";
import { ProfileRecipe } from "./ProfileRecipe/ProfileRecipe";
import styles from "./profile.module.css";
export const Profile = () => {
    const { user, profileImg, changeProfileImgHandler } =
        useContext(AuthContext);
    const { recipes, addReviewsToRecipe } = useRecipeExtraData([]);
    const [formValues, setFormValues] = useState({
        profileImgField: profileImg,
    });
    const [totalReviewsCount, setTotalReviewsCount] = useState(0);
    const [showChangeImage, setShowChangeImage] = useState(false);
    const [error, setError] = useState(null);
    const recipeService = recipeServiceFactory();

    useEffect(() => {
        recipeService
            .getUserRecipes(user._id)
            .then((recipes) => {
                addReviewsToRecipe(recipes);
                setError(null);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    useEffect(() => {
        setFormValues((state) => ({
            profileImgField: profileImg,
        }));
    }, [profileImg]);

    const calcTotalReviews = useMemo(
        () =>
            setTotalReviewsCount(
                recipes.map((r) => r.reviews).reduce((a, b) => a + b, 0)
            ),
        [recipes]
    );

    const onChange = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const changeProfileImg = (e) => {
        e.preventDefault();
        if (showChangeImage == false) {
            setShowChangeImage((state) => !state);
        }

        if (showChangeImage == true) {
            if (profileImg == formValues["profileImgField"]) {
                setShowChangeImage((state) => false);
            } else {
                changeProfileImgHandler(formValues["profileImgField"]);
                setShowChangeImage((state) => !state);
            }
        }
    };

    return (
        <section className={styles.profile}>
            <article className={styles.card}>
                <div className={styles.card__left}>
                    <div
                        className={`${styles.image__wrapper} ${
                            recipes.length == 0 && styles.no__content
                        }`}
                    >
                        <img src={profileImg} alt="no-image" />
                        <form action="">
                            {showChangeImage && (
                                <>
                                    <label htmlFor="profileImgField">
                                        Image URL
                                    </label>
                                    <input
                                        type="text"
                                        name="profileImgField"
                                        id="profileImgField"
                                        value={formValues["profileImgField"]}
                                        onChange={onChange}
                                    />
                                </>
                            )}

                            <button type="submit" onClick={changeProfileImg}>
                                Change Image
                            </button>
                        </form>
                    </div>
                </div>
                <div className={styles.card__right}>
                    <div className={styles.card__info}>
                        <h2>Information</h2>
                        <div className={styles.divider}></div>
                        <div className={styles.card__info_wrapper}>
                            <p>
                                First Name
                                <span>{user.firstName}</span>
                            </p>
                            <p>
                                Last Name
                                <span>{user.lastName}</span>
                            </p>
                            <p>
                                Email
                                <span>{user.email}</span>
                            </p>
                            <p>
                                Total Reviews
                                <span>{totalReviewsCount}</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2>My Recipes</h2>
                        <div className={styles.divider}></div>
                        {error ? (
                            <div>Something went wrong.</div>
                        ) : (
                            <>
                                {recipes.length == 0 ? (
                                    <p>You haven't create recipe yet.</p>
                                ) : (
                                    <div className={styles.card__recipes}>
                                        {recipes
                                            .sort(
                                                (a, b) => b.reviews - a.reviews
                                            )
                                            .map((el) => (
                                                <div
                                                    key={el._id}
                                                    className={styles.item}
                                                >
                                                    <ProfileRecipe
                                                        {...el}
                                                        reviews={el.reviews}
                                                    />
                                                </div>
                                            ))}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </article>
        </section>
    );
};
