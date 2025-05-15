const baseUrl = `${import.meta.env.VITE_API_URL}/users`
const profileImgUrl = `${import.meta.env.VITE_API_URL}/data/profiles1`

import { requestFactory } from "../utils/requester";
export const authServiceFactory = () => {
    const request = requestFactory();
    const login = async (data) => {
        let result = await request.post(`${baseUrl}/login`, data);
        return result;
    };

    const register = async (data) => {
        let result = await request.post(`${baseUrl}/register`, data);
        return result;
    };

    const logout = async () => {
        const result = await request.get(`${baseUrl}/logout`);
        return;
    };

    const getProfileImg = async (userId) => {
        const searchQuery = encodeURIComponent(`_ownerId="${userId}"`);
        const result = await request.get(
            `${profileImgUrl}?where=${searchQuery}`
        );
        return result;
    };

    const updateUserPicture = async (pictureUrl, userId) => {
        const data = {
            pictureUrl,
            userId,
        };

        const oldImage = await getProfileImg(userId);

        if (oldImage.length > 0) {
            let [image] = [...oldImage];
            image = { ...image, pictureUrl };
            const result = request.put(`${profileImgUrl}/${image._id}`, image);
            return result;
        }
        const result = request.post(`${profileImgUrl}`, data);
        return result;
    };
    return {
        login,
        register,
        logout,
        getProfileImg,
        updateUserPicture,
    };
};
