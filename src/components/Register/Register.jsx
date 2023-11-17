import { Link } from "react-router-dom";
import styles from "../Login/login-register.module.css";

export const Register = () => {
    return (
        <section className={styles.register}>
            <div className={styles.container}>
                <h1>Sign up</h1>
                <p>Join our community free</p>
                <form
                    action=""
                    className={`${styles.auth__form} ${styles.register__form}`}
                >
                    <div className={`${styles.form__group} ${styles.item1}`}>
                        <input
                            type="text"
                            id="firstName"
                            name="lastName"
                            placeholder="First Name"
                        />
                        {/* <p className={styles.auth_error}>
                            First name should be 8 characters
                        </p> */}
                    </div>

                    <div className={`${styles.form__group} ${styles.item2}`}>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                        />
                        {/* <p className={styles.auth_error}>
                            Last name should be 8 characters
                        </p> */}
                    </div>
                    <div className={`${styles.form__group} ${styles.item3}`}>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                        />
                        {/* <p className={styles.auth_error}>Email is invalid</p> */}
                    </div>
                    {/* <p>Error</p> */}
                    <div className={`${styles.form__group} ${styles.item4}`}>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                        />
                        {/* <p className={styles.auth_error}>Password must be at least 8 characters</p> */}
                    </div>
                    <div className={`${styles.form__group} ${styles.item5}`}>
                        <input
                            type="password"
                            id="rePass"
                            name="rePass"
                            placeholder="Password"
                        />
                        {/* <p className={styles.auth_error}>Password must be at least 8 characters</p> */}
                    </div>
                    <div className={`${styles.form__group} ${styles.item6}`}>
                        <p>
                            Already have an account?
                            <Link to="/login">Sign in</Link>
                        </p>
                    </div>
                    <button className={`${styles.btn} ${styles.item7}`}>
                        Sign Up
                    </button>
                </form>
            </div>
        </section>
    );
};
