import apiInstance from '@/lib/axios';
const getBlogList = async () => {
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_BLOG_LIST_API);
        return data.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const getBlogById = async (id) => {
    try {
        const { data } = await apiInstance.get(import.meta.env.VITE_BLOG_LIST_API + id);
        return data.data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const addVote = async (voteData) => {
    try {
        const url = `${import.meta.env.VITE_VOTE_BLOG_API}${voteData.blogId}?userId=${voteData.userId}`;
        const { data } = await apiInstance.post(url, {
            voteType: voteData.voteType,
        });
        return data;
    }
    catch (error) {
        if (error.isAxiosError) {
            const axiosError = error;
            const errorMessage = axiosError.response?.data.message || 'Failed to add vote';
            console.error('Error adding vote:', errorMessage);
            throw new Error(errorMessage);
        }
        else {
            console.error('Network error:', error.message);
            throw new Error('Network error. Please try again.');
        }
    }
};
const deleteBlog = async (id) => {
    try {
        const { data } = await apiInstance.delete(import.meta.env.VITE_BLOG_DELETE_API + id);
        return data;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const updateBlog = async (userId, blogId, data) => {
    try {
        const { data: response } = await apiInstance.put(import.meta.env.VITE_BLOG_UPDATE_API + +userId + '?blogId=' + blogId, data);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const createBlog = async (data) => {
    try {
        const { data: response } = await apiInstance.post(import.meta.env.VITE_BLOG_CREATE_API, data);
        return response;
    }
    catch (error) {
        const errorResponse = error;
        throw new Error(errorResponse.response?.data.message);
    }
};
const blogApi = {
    getBlogList,
    getBlogById,
    addVote,
    deleteBlog,
    updateBlog,
    createBlog,
};
export default blogApi;
