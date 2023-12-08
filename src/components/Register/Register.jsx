import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "../Login/login-register.module.css";

export const Register = () => {
    const { registerSubmitHandler, registerError } = useContext(AuthContext);
    const { formValues, formErrors, onChange, onSubmit, validateInputHandler } =
        useForm(
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
                                onBlur={(e) => validateInputHandler(e, "auth")}
                                value={formValues.firstName}
                            />
                            {formErrors["firstName"] && (
                                <p className={styles.auth_error}>
                                    {formErrors["firstName"]}
                                </p>
                            )}
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
                                onBlur={(e) => validateInputHandler(e, "auth")}
                                value={formValues.lastName}
                            />
                            {formErrors["lastName"] && (
                                <p className={styles.auth_error}>
                                    {formErrors["lastName"]}
                                </p>
                            )}
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
                                onBlur={(e) => validateInputHandler(e, "auth")}
                                value={formValues.email}
                            />
                            {formErrors["email"] && (
                                <p className={styles.auth_error}>
                                    {formErrors["email"]}
                                </p>
                            )}
                        </div>
                        <div
                            className={`${styles.form__group} ${styles.item4}`}
                        >
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                onChange={onChange}
                                onBlur={(e) => validateInputHandler(e, "auth")}
                                value={formValues.password}
                            />
                            {formErrors["password"] && (
                                <p className={styles.auth_error}>
                                    {formErrors["password"]}
                                </p>
                            )}
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
                                onBlur={(e) => validateInputHandler(e, "auth")}
                                value={formValues.rePass}
                            />
                            {formErrors["rePass"] && (
                                <p className={styles.auth_error}>
                                    {formErrors["rePass"]}
                                </p>
                            )}
                        </div>
                        <div
                            className={`${styles.form__group} ${styles.item6}`}
                        >
                            {registerError && (
                                <p className={styles.err__msg}>
                                    {registerError}!
                                </p>
                            )}
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
