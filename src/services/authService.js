const baseUrl = "http://localhost:3030/users";
import { requestFactory } from "../utils/requester";
export const authServiceFactory = () => {
    const request = requestFactory();
    return {
        login: async (data) => {
            let result = await request.post(`${baseUrl}/login`, data);
            return result;
        },

        register: async (data) => {
            let result = await request.post(`${baseUrl}/register`, data);
            return result;
        },

        logout: async () => {
            const result = await request.get(`${baseUrl}/logout`);
            return;
        },
    };
};
