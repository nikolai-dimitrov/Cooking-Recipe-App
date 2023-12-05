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
    const navigate = useNavigate();
    const authService = authServiceFactory();
    //TODO: Validation and error handling
    useEffect(() => {
        if (user._id) {
            authService.getProfileImg(user._id).then((p) => {
                console.log(user._id, "USER ID FETCHING");
                if (p.length > 0) {
                    const image = p[0].pictureUrl;
                    setProfileImg((state) => image);
                } else {
                    setProfileImg(defaultPicture);
                }
            });
        }
    }, [user, user._id]); // remove user._id

    const loginSubmitHandler = async (formValues) => {
        let result = await authService.login(formValues);
        const { accessToken, email, _id, firstName, lastName } = { ...result };
        setUser({
            accessToken,
            email,
            firstName,
            lastName,
            _id,
        });
        navigate("/");
    };

    //TODO: Validation and error handling
    const registerSubmitHandler = async (formValues) => {
        let result = await authService.register(formValues);
        const { accessToken, email, _id, firstName, lastName } = { ...result };
        setUser({
            accessToken,
            email,
            firstName,
            lastName,
            _id,
        });
        navigate("/");
    };

    const logoutHandler = () => {
        authService.logout();
        setUser({});
    };
    const changeProfileImgHandler = (formValues) => {
        console.log(formValues, "AUTH CONTEXT HANDLER");
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
    };
    console.log(profileImg, "final log");
    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};
