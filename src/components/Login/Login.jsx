import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./login-register.module.css";
export const Login = () => {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { formValues, onChange, onSubmit } = useForm(
        {
            email: "",
            password: "",
        },
        loginSubmitHandler
    );
    return (
        <div className={styles.layout}>
            <section className={styles.login}>
                <div className={styles.container}>
                    <h1>Sign in</h1>
                    <p>Welcome back in our community</p>
                    <form
                        action="post"
                        className={styles.auth__form}
                        onSubmit={onSubmit}
                    >
                        <div className={styles.form__group}>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={onChange}
                                value={formValues.email}
                            />
                        </div>
                        {/* <p>Error</p> */}
                        <div className={styles.form__group}>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                onChange={onChange}
                                value={formValues.password}
                            />
                        </div>
                        <div className={styles.form__group}>
                            <p>
                                New to Cooking Recipes?
                                <Link to="/register">Join now</Link>
                            </p>
                        </div>
                        <button className={styles.btn}>Sign In</button>
                    </form>
                </div>
            </section>
        </div>
    );
};
