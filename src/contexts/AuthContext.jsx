import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from "../services/authService";
export const AuthContext = createContext();
const defaultPicture =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUphuF-TaDSPNi8FK1FdXKTjKmUk3RUln8zyFtsnfbRw&s";

//User's profile additional info like first name, last name must be in another collection like Profile.
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", {});
    const [profileImg, setProfileImg] = useState(defaultPicture);
    const [loginError, setLoginError] = useState(null);
    const [registerError, setRegisterError] = useState(null);

    const navigate = useNavigate();
    const authService = authServiceFactory();

    useEffect(() => {
        if (user._id) {
            authService
                .getProfileImg(user._id)
                .then((p) => {
                    if (p.length > 0) {
                        const image = p[0].pictureUrl;
                        setProfileImg((state) => image);
                    } else {
                        setProfileImg(defaultPicture);
                    }
                })
                .catch((err) => {
                    setProfileImg(defaultPicture);
                });
        }
    }, [user, user._id]);

    const loginSubmitHandler = async (formValues) => {
        try {
            let result = await authService.login(formValues);
            const { accessToken, email, _id, firstName, lastName } = {
                ...result,
            };
            setUser({
                accessToken,
                email,
                firstName,
                lastName,
                _id,
            });
            setLoginError(null);

            navigate("/");
        } catch (e) {
            setLoginError(e.message);
        }
    };

    const registerSubmitHandler = async (formValues) => {
        try {
            const { password, rePass } = formValues;
            if (password != rePass) {
                throw new Error("Password did not match");
            }
            let result = await authService.register(formValues);
            const { accessToken, email, _id, firstName, lastName } = {
                ...result,
            };
            setUser({
                accessToken,
                email,
                firstName,
                lastName,
                _id,
            });

            setRegisterError(null);
            navigate("/");
        } catch (e) {
            setRegisterError(e.message);
        }
    };

    const logoutHandler = () => {
        authService.logout();
        setUser({});
    };

    const changeProfileImgHandler = async (formValues) => {
        const result = await authService.updateUserPicture(
            formValues,
            user._id
        );
        setProfileImg(result.pictureUrl);
    };

    const authContext = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        changeProfileImgHandler,
        token: user.accessToken,
        email: user.email,
        _id: user.id,
        isAuthenticated: !!user.accessToken,
        user,
        profileImg,
        loginError,
        registerError,
    };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};
