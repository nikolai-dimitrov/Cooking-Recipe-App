import { useState } from "react";
export const useLocalStorage = (key, initialState) => {
    const [user, setUser] = useState(() => {
        let persistedState = localStorage.getItem(key);
        if (persistedState) {
            return JSON.parse(persistedState);
        }
        return initialState;
    });

    const setUserLocalStorage = (user) => {
        setUser(user);
        localStorage.setItem(key, JSON.stringify(user));
    };
    return [user, setUserLocalStorage];
};
