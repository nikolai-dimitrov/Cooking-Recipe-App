import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
export const AuthenticatedRouteGuard = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // if (children.type.name == "RecipeEdit") {
    //     console.log("edit");
    // }

    return (
        //
        <>{children}</>
    );
};
export const NotAuthenticatedRouteGuard = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        //
        <>{children}</>
    );
};
