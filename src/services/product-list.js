/* eslint-disable @typescript-eslint/no-explicit-any */
import apiInstance from '@/lib/axios';
const getProductList = async () => {
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_M_PRODUCT_LIST_API);
        return data.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const getManagerProductList = async () => {
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_MANAGER_PRODUCT_CREATE_API);
        return data.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const getProductById = async (id) => {
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_M_PRODUCT_DETAIL_API + id);
        return data.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const updateProduct = async (id, data) => {
    try {
        const { data: response } = await apiInstance.put(import.meta.env.VITE_PRODUCT_UPDATE_API + id, data);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const disableProduct = async (id) => {
    try {
        const { data: response } = await apiInstance.put(import.meta.env.VITE_PRODUCT_DELETE_API + id);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const addProduct = async (data) => {
    try {
        const { data: response } = await apiInstance.post(import.meta.env.VITE_PRODUCT_CREATE_API, data);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const productListApi = {
    getProductList,
    getProductById,
    updateProduct,
    disableProduct,
    addProduct,
    getManagerProductList,
};
export default productListApi;
