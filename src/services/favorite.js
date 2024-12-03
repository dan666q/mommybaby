import apiInstance from '@/lib/axios';
import { jwtDecode } from 'jwt-decode';
const getFavoriteItem = async () => {
    const decodeToken = (token) => {
        const decodedToken = jwtDecode(token);
        return decodedToken;
    };
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_FAVORITE_API);
        console.log(data);
        return data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const favoriteApi = {
    getFavoriteItem,
};
export default favoriteApi;
