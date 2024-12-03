import { queryClient } from '@/constants';
import orderApi from '@/services/order';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
export const useUpdateStatus = (id) => {
    return useMutation({
        mutationFn: (status) => orderApi.updateStatusOrder(id, status),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['viewOrderList'] });
            queryClient.invalidateQueries({ queryKey: ['viewOrderDetail'] });
            notification.success({
                message: 'Update status success',
            });
        },
        onError: () => {
            notification.error({
                message: 'Update status failed',
            });
        },
    });
};
