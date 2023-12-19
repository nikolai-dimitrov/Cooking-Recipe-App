import styles from "./footer.module.css";
export const Footer = () => {
    return (
        <footer>
            <div className={styles.footer__container}>
                <div>
                    <p>Copyright © cooking-domain All Rights Reserved</p>
                    <p>
                        Design by{" "}
                        <a href="TemplateMonster.com"> TemplateMonster.com</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
