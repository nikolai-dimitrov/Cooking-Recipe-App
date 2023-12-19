import { useNavigate } from "react-router-dom";
import styles from "./not-found.module.css";
export const NotFound = () => {
    const navigate = useNavigate();
    
    const getPreviousPage = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <section className={styles.not__found}>
            <div className={styles.title__wrapper}>
                <h1 className={styles.title}>Something went wrong!</h1>
                <button
                    className={styles.btn}
                    onClick={(e) => getPreviousPage(e)}
                >
                    Back
                </button>
            </div>
        </section>
    );
};
