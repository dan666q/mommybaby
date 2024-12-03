import { queryClient } from '@/constants';
import accountApi from '@/services/account';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
export const useEditAccount = (id) => {
    return useMutation({
        mutationFn: (data) => accountApi.updateAccount(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['viewAccountDetail'] }),
                notification.success({
                    message: 'Success',
                    description: 'Update account successfully',
                });
        },
        onError: () => notification.error({
            message: 'Error',
            description: 'Update account failed',
        }),
    });
};
