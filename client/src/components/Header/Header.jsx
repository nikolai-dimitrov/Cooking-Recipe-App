import { useContext, useRef, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./header.module.css";
import { Link, NavLink } from "react-router-dom";
export const Header = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const [mobileNav, setMobileNav] = useState(false);
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <header>
            <div className={styles.header__logo_container}>
                <div className={styles.header__logo}></div>
            </div>
            <nav className={styles.nav}>
                {windowSize[0] <= 680 && mobileNav == false ? (
                    <button
                        className={styles.mobile__nav_btn}
                        onClick={(e) => setMobileNav(true)}
                    >
                        | | |
                    </button>
                ) : (
                    <ul
                        className={
                            mobileNav
                                ? `${styles.nav__list} ${styles.flex_col}`
                                : `${styles.nav__list}`
                        }
                    >
                        <li className={styles.nav__item}>
                            <NavLink
                                to="/"
                                className={({ isActive }) => {
                                    let x = isActive ? `${styles.active}` : "";
                                    return `${styles.nav__link} ${x}`;
                                }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className={styles.nav__item}>
                            <NavLink
                                to="/our-recipes"
                                className={({ isActive }) => {
                                    let x = isActive ? `${styles.active}` : "";
                                    return `${styles.nav__link} ${x}`;
                                }}
                            >
                                Recipes
                            </NavLink>
                        </li>
                        {isAuthenticated && (
                            <li className={styles.nav__item}>
                                <NavLink
                                    to="/recipes/create"
                                    className={({ isActive }) => {
                                        let x = isActive
                                            ? `${styles.active}`
                                            : "";
                                        return `${styles.nav__link} ${x}`;
                                    }}
                                >
                                    Create Recipe
                                </NavLink>
                            </li>
                        )}

                        <li className={styles.nav__item}>
                            <NavLink
                                to="/about-us"
                                className={({ isActive }) => {
                                    let x = isActive ? `${styles.active}` : "";
                                    return `${styles.nav__link} ${x}`;
                                }}
                            >
                                About
                            </NavLink>
                        </li>
                        <>
                            {/* If authenticated */}
                            {isAuthenticated && (
                                <>
                                    {" "}
                                    <li className={styles.nav__item}>
                                        <NavLink
                                            to="/profile"
                                            className={({ isActive }) => {
                                                let x = isActive
                                                    ? `${styles.active}`
                                                    : "";
                                                return `${styles.nav__link} ${x}`;
                                            }}
                                        >
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li className={styles.nav__item}>
                                        <NavLink
                                            to="/logout"
                                            className={({ isActive }) => {
                                                let x = isActive
                                                    ? `${styles.active}`
                                                    : "";
                                                return `${styles.nav__link} ${x}`;
                                            }}
                                        >
                                            Logout
                                        </NavLink>
                                    </li>
                                </>
                            )}
                            {!isAuthenticated && (
                                <>
                                    <li className={styles.nav__item}>
                                        <NavLink
                                            to="/login"
                                            className={({ isActive }) => {
                                                let x = isActive
                                                    ? `${styles.active}`
                                                    : "";
                                                return `${styles.nav__link} ${x}`;
                                            }}
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                    <li className={styles.nav__item}>
                                        <NavLink
                                            to="/register"
                                            className={({ isActive }) => {
                                                let x = isActive
                                                    ? `${styles.active}`
                                                    : "";
                                                return `${styles.nav__link} ${x}`;
                                            }}
                                        >
                                            Register
                                        </NavLink>
                                    </li>
                                </>
                            )}
                            {mobileNav && windowSize[0] <= 680 && (
                                <li className={styles.nav__item}>
                                    <button
                                        className={styles.mobile__nav_btn}
                                        onClick={(e) => setMobileNav(false)}
                                    >
                                        Close
                                    </button>
                                </li>
                            )}
                        </>
                    </ul>
                )}
            </nav>
        </header>
    );
};
