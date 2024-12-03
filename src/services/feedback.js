// feedback-api.ts
import apiInstance from '@/lib/axios';
const getFeedbackList = async () => {
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_FEEDBACK_GET_API);
        return data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const getFeedbackById = async (id) => {
    try {
        const { data } = await apiInstance.get(`${import.meta.env.VITE_FEEDBACK_GET_API}${id}`);
        return data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
// feedback-api.ts
const addFeedback = async (feedback) => {
    try {
        const { productId, orderId, rate, comment, userId, replyId } = feedback;
        const response = await apiInstance.post(`${import.meta.env.VITE_FEEDBACK_ADD_API}${userId}?orderId=${orderId}&productId=${productId}`, // Ensure this endpoint is correct
        { rate, comment, userId, replyId } // Sending the required payload
        );
        return response.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const updateFeedback = async (id, feedback) => {
    try {
        const { data: response } = await apiInstance.put(`${import.meta.env.VITE_FEEDBACK_UPDATE_API}${id}`, feedback);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const deleteFeedback = async (id) => {
    try {
        const response = await apiInstance.delete(`${import.meta.env.VITE_FEEDBACK_DELETE_API}${id}`);
        return response.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const feedbackApi = {
    getFeedbackList,
    getFeedbackById,
    addFeedback,
    updateFeedback,
    deleteFeedback,
};
export default feedbackApi;
