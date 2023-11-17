import styles from "../Login/login-register.module.css";

export const Register = () => {
    return (
        <section className={styles.register}>
            <div className={styles.container}>
                <h1>Sign up</h1>
                <p>Join our community free</p>
                <form action="" className={`${styles.auth__form} ${styles.register__form}`}>
                <div className={styles.form__group}>
                        <input
                            type="text"
                            id="firstName"
                            name="lastName"
                            placeholder="First Name"
                        />
                    </div>
                    <div className={styles.form__group}>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                        />
                    </div>
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
                        <input
                            type="password"
                            id="rePass"
                            name="rePass"
                            placeholder="Password"
                        />
                    </div>
                    <div className={styles.form__group}>
                        <p>
                            Already have an account?
                            <a href="/login">Sign in</a>
                        </p>
                    </div>
                    <button className={styles.btn}>Sign Up</button>
                </form>
            </div>
        </section>
    );
};
