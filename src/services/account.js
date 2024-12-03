import apiInstance from '@/lib/axios';
const getListAccount = async () => {
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_ACCOUNT_LIST_API);
        return data.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const getAccountById = async (id) => {
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_ACCOUNT_DETAIL_API + id);
        return data.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const disableAccount = async (id) => {
    try {
        const { data } = await apiInstance.put(import.meta.env.VITE_ACCOUNT_DISABLE_API + id);
        return data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const updateAccount = async (id, data) => {
    try {
        const { data: response } = await apiInstance.put(import.meta.env.VITE_ACCOUNT_UPDATE_API + id, data);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const addAccount = async (data) => {
    try {
        const { data: response } = await apiInstance.post(import.meta.env.VITE_ACCOUNT_CREATE_API, data);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const accountApi = {
    getListAccount,
    getAccountById,
    disableAccount,
    updateAccount,
    addAccount,
};
export default accountApi;
