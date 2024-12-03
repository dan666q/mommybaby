import apiInstance from '@/lib/axios';
const getBrandList = async () => {
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_BRAND_LIST_API);
        return data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const getBrandById = async (id) => {
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_BRAND_LIST_API + id);
        return data.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const addBrand = async (data) => {
    try {
        const { data: response } = await apiInstance.post(import.meta.env.VITE_BRAND_CREATE_API, data);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const updateBrand = async (id, data) => {
    try {
        console.log(data);
        console.log(import.meta.env.VITE_BRAND_UPDATE_API + id);
        const { data: response } = await apiInstance.put(import.meta.env.VITE_BRAND_UPDATE_API + id, data);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const deleteBrand = async (id) => {
    try {
        const response = await apiInstance.delete(import.meta.env.VITE_BRAND_DELETE_API + id);
        return response.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const brandApi = {
    getBrandList,
    getBrandById,
    addBrand,
    updateBrand,
    deleteBrand,
};
export default brandApi;
