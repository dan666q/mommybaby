import { queryClient } from '@/constants';
import promotionApi from '@/services/promotion';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
export const useUpdatePromotion = (id) => {
    return useMutation({
        mutationFn: (data) => {
            return promotionApi.updatePromotion(id, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['viewPromotionDetail'] });
            queryClient.invalidateQueries({ queryKey: ['viewPromotionList'] });
            notification.success({
                message: 'Update promotion success',
            });
        },
        onError: () => {
            notification.error({
                message: 'Update promotion failed',
            });
        },
    });
};
