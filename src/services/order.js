import apiInstance from '@/lib/axios';
const getOrderList = async () => {
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_ORDER_LIST_API);
        return data.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const getOrderById = async (id) => {
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_ORDER_DETAIL_API + id);
        return data.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const updateStatusOrder = async (id, status) => {
    try {
        await apiInstance.put(import.meta.env.VITE_ORDER_UPDATE_API + id, status);
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const orderApi = {
    getOrderList,
    getOrderById,
    updateStatusOrder,
};
export default orderApi;
