import { useNavigate } from "react-router-dom";
import styles from "./unauthorized.module.css";
export const Unauthorized = () => {
    const navigate = useNavigate();
    
    const getPreviousPage = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <section className={styles.unauthorized}>
            <div className={styles.title__wrapper}>
                <h1 className={styles.title}>You don't have permissions.</h1>
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
