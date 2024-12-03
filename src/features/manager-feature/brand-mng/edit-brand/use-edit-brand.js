import brandApi from '@/services/brand';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/constants';
import { notification } from 'antd';
export const useEditBrand = (id) => {
    return useMutation({
        mutationFn: (data) => {
            return brandApi.updateBrand(id, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['brandList'] });
            queryClient.invalidateQueries({ queryKey: ['viewBrandDetail'] });
            notification.success({
                message: 'Edit brand success',
            });
        },
        onError: () => {
            notification.error({
                message: 'Edit brand failed',
            });
        },
    });
};
