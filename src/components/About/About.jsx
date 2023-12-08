import { Link } from "react-router-dom";
import styles from "./about.module.css";
export const About = () => {
    return (
        //
        <>
            <section className={styles.favorite}>
                <article className={styles.favorite__card}>
                    <h4 className={styles.card__title}>Your favorite salad</h4>
                    <span className={styles.card__badge}>RECIPES</span>
                    <p className={styles.card__desc}>
                        Topped with chopped chicken and filled with hard-boiled
                        eggs, this salad is an instant favourite
                    </p>
                    <a href="https://natashaskitchen.com/caesar-salad-recipe/">
                        READ MORE <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </article>
                <article className={styles.favorite__card}>
                    <h4 className={styles.card__title}>Your favorite meat</h4>
                    <span className={styles.card__badge}>RECIPES</span>
                    <p className={styles.card__desc}>
                        A tender cut of beef is sliced thin, then marinated with
                        lemon juice and soy sauce for at least an hour.
                    </p>
                    <a href="https://www.allrecipes.com/recipe/212911/filipino-beef-steak/">
                        READ MORE <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </article>
            </section>
            <section className={styles.cooking}>
                <div className={styles.divider}>
                    <h2 className={styles.cooking__title}>
                        What We Are Cooking Right Now?
                    </h2>
                    <Link to="/our-recipes" className={styles.cooking__link}>
                        See all recipes{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
                <div className={styles.cards__wrapper}>
                    <div className={styles.recipe__card}>
                        <div className={styles.image__wrapper}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMD6ie9h8hubn13U80CLSh4a9Tj4gjooPpCF8NbqSU2w&s"
                                alt="no-image"
                            />
                            <div>
                                <h4 className={styles.card__heading}>
                                    Cabbage Walnut Pasta
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className={styles.recipe__card}>
                        <div className={styles.image__wrapper}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdso5z-u4sr6sBtpn_eEMmyhpx6SLJsEPNaGPr20rUYQ&s"
                                alt="no-image"
                            />
                            <div>
                                <h4 className={styles.card__heading}>
                                    Green Curry Tofu
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.recipe__card}>
                        <div className={styles.image__wrapper}>
                            <img
                                src="https://diethood.com/wp-content/uploads/2021/01/chicken-noodle-soup-9.jpg"
                                alt="no-image"
                            />
                            <div>
                                <h4 className={styles.card__heading}>
                                    Chicken Soup With Noodles
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.recipe__card}>
                        <div className={styles.image__wrapper}>
                            <img
                                src="https://preview.redd.it/butternut-squash-and-goat-cheese-orzo-v0-oc2m72hdzq2c1.jpg?width=640&crop=smart&auto=webp&s=92acaf6dc859ef60055e02b37887b0e9563aaae1"
                                alt="no-image"
                            />
                            <div>
                                <h4 className={styles.card__heading}>
                                    Butternut Squash Orzo With Goat Cheese
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
