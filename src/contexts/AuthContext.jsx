import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from "../services/authService";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", {});
    const navigate = useNavigate();
    const authService = authServiceFactory();
    //TODO: Validation and error handling
    const loginSubmitHandler = async (formValues) => {
        let result = await authService.login(formValues);
        const { accessToken, email, _id } = { ...result };

        setUser({
            accessToken,
            email,
            _id,
        });
        navigate("/");
    };

    //TODO: Validation and error handling
    const registerSubmitHandler = async (formValues) => {
        let result = await authService.register(formValues);
        const { accessToken, email, _id } = { ...result };
        setUser({
            accessToken,
            email,
            _id,
        });
        navigate("/");
    };

    const logoutHandler = () => {
        authService.logout();
        setUser({});
    };

    const authContext = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        token: user.accessToken,
        email: user.email,
        _id: user.id,
        isAuthenticated: !!user.accessToken,
        user,
    };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};
