import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const loginSubmitHandler = (formValues) => {
        console.log(formValues);
    };

    const registerSubmitHandler = (formValues) => {
        console.log(formValues);
    };
    // 1. make requester
    // 2. save user in auth provider state.
    // 3. pass user into components and change navigation
    // 4. Save user into local storage with useLocalStorage hook.
    // 5. use user token in requester for authorization when needed.
    // 6. create logout functionality
    // ---- Auth should be ready to use ----
    const authContext = {
        loginSubmitHandler,
        registerSubmitHandler,
    };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};
