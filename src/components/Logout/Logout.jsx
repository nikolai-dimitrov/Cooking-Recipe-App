import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
export const Logout = () => {
    const { logoutHandler } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        logoutHandler();
        navigate("/login");
    }, []);
};
