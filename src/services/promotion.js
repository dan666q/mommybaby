import apiInstance from '@/lib/axios';
const getPromotionList = async () => {
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_PROMOTION_LIST_API);
        return data.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const getPromotionById = async (id) => {
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_PROMOTION_DETAIL_API + id);
        return data.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const addPromotion = async (data) => {
    try {
        const { data: response } = await apiInstance.post(import.meta.env.VITE_PROMOTION_CREATE_API, data);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const updatePromotion = async (id, data) => {
    try {
        const { data: response } = await apiInstance.put(import.meta.env.VITE_PROMOTION_UPDATE_API + id, data);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const deletePromotion = async (id) => {
    try {
        const { data: response } = await apiInstance.delete(import.meta.env.VITE_PROMOTION_DELETE_API + id);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const addProductToPromotion = async (promotionId, productId) => {
    try {
        const { data: response } = await apiInstance.post(import.meta.env.VITE_PROMOTION_ADD_PRODUCT_API + promotionId + '?productId=' + productId);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const deleteProductFromPromotion = async (promotionId, productId) => {
    try {
        const { data: response } = await apiInstance.delete(import.meta.env.VITE_PROMOTION_DELETE_PRODUCT_API + promotionId + '?productId=' + productId);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const promotionApi = {
    getPromotionList,
    getPromotionById,
    addPromotion,
    updatePromotion,
    deletePromotion,
    addProductToPromotion,
    deleteProductFromPromotion,
};
export default promotionApi;
