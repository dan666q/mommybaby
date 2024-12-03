import { queryClient } from '@/constants';
import promotionApi from '@/services/promotion';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
export const useAddProductPromotion = (promotionId) => {
    return useMutation({
        mutationFn: (productId) => promotionApi.addProductToPromotion(promotionId, productId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['viewPromotionList'] });
            queryClient.invalidateQueries({ queryKey: ['viewPromotionDetail'] });
            notification.success({
                message: 'Add promotion success',
            });
        },
        onError: () => {
            notification.error({
                message: 'Add promotion failed',
            });
        },
    });
};