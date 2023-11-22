import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./header.module.css";
import { Link, NavLink } from "react-router-dom";
export const Header = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <header>
            <div className={styles.header__logo_container}>
                <div className={styles.header__logo}></div>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
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
                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle
                            id="dropdown-autoclose-true"
                            className={styles.nav__dropdown}
                        >
                            Recipes
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={styles.dropdown__menu}>
                            <div className={styles.nav__dropdown_item}>
                                <NavLink
                                    to="/our-recipes"
                                    className={styles.nav__link}
                                >
                                    Our Recipes
                                </NavLink>
                            </div>
                            <div className={styles.nav__dropdown_item}>
                                <NavLink
                                    to="/api-recipes"
                                    className={styles.nav__link}
                                >
                                    API Recipes
                                </NavLink>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                    {isAuthenticated && (
                        <li className={styles.nav__item}>
                            <NavLink
                                to="/recipes/create"
                                className={({ isActive }) => {
                                    let x = isActive ? `${styles.active}` : "";
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
                </ul>
            </nav>
        </header>
    );
};
