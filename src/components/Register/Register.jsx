import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "../Login/login-register.module.css";

export const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { formValues, onChange, onSubmit } = useForm(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            rePass: "",
        },
        registerSubmitHandler
    );
    return (
        <div className={styles.layout}>
            <section className={styles.register}>
                <div className={styles.container}>
                    <h1>Sign up</h1>
                    <p>Join our community free</p>
                    <form
                        action=""
                        className={`${styles.auth__form} ${styles.register__form}`}
                        onSubmit={onSubmit}
                    >
                        <div
                            className={`${styles.form__group} ${styles.item1}`}
                        >
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                onChange={onChange}
                                value={formValues.firstName}
                            />
                            {/* <p className={styles.auth_error}>
                            First name should be 8 characters
                        </p> */}
                        </div>

                        <div
                            className={`${styles.form__group} ${styles.item2}`}
                        >
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={onChange}
                                value={formValues.lastName}
                            />
                            {/* <p className={styles.auth_error}>
                            Last name should be 8 characters
                        </p> */}
                        </div>
                        <div
                            className={`${styles.form__group} ${styles.item3}`}
                        >
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={onChange}
                                value={formValues.email}
                            />
                            {/* <p className={styles.auth_error}>Email is invalid</p> */}
                        </div>
                        {/* <p>Error</p> */}
                        <div
                            className={`${styles.form__group} ${styles.item4}`}
                        >
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                onChange={onChange}
                                value={formValues.password}
                            />
                            {/* <p className={styles.auth_error}>Password must be at least 8 characters</p> */}
                        </div>
                        <div
                            className={`${styles.form__group} ${styles.item5}`}
                        >
                            <input
                                type="password"
                                id="rePass"
                                name="rePass"
                                placeholder="Password"
                                onChange={onChange}
                                value={formValues.rePass}
                            />
                            {/* <p className={styles.auth_error}>Password must be at least 8 characters</p> */}
                        </div>
                        <div
                            className={`${styles.form__group} ${styles.item6}`}
                        >
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
        </div>
    );
};
