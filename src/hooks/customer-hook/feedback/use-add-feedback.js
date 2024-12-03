// hooks/use-add-feedback.ts
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import feedbackApi from '@/services/feedback';
import { queryClient } from '@/constants';
export const useAddFeedback = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: feedbackApi.addFeedback,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['feedback'] });
            notification.success({
                message: 'Feedback created successfully',
            });
            //   navigate(0); // Reloads the current page
        },
        onError: (error) => {
            notification.error({
                message: 'Failed to create feedback',
                description: error.message,
            });
        },
    });
};
