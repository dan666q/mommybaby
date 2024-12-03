import orderApi from '@/services/order';
import { useQuery } from '@tanstack/react-query';
export const useViewOrderDetail = (id) => {
    return useQuery({
        queryKey: ['viewOrderDetail'],
        queryFn: () => orderApi.getOrderById(id),
    });
};
