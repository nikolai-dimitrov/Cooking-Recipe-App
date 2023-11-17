import { Link } from "react-router-dom";
import styles from "./login-register.module.css";
export const Login = () => {
    return (
        <section className={styles.login}>
            <div className={styles.container}>
                <h1>Sign in</h1>
                <p>Welcome back in our community</p>
                <form action="" className={styles.auth__form}>
                    <div className={styles.form__group}>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                        />
                    </div>
                    {/* <p>Error</p> */}
                    <div className={styles.form__group}>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
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
    );
};
