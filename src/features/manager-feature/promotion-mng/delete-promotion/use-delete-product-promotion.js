import promotionApi from '@/services/promotion';
import { queryClient } from '@/constants';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
export const useDeleteProductPromotion = (promotionId) => {
    return useMutation({
        mutationFn: (productId) => promotionApi.deleteProductFromPromotion(promotionId, productId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['viewPromotionList'] });
            queryClient.invalidateQueries({ queryKey: ['viewPromotionDetail'] });
            notification.success({
                message: 'Delete promotion success',
            });
        },
        onError: () => {
            notification.error({
                message: 'Delete promotion failed',
            });
        },
    });
};
