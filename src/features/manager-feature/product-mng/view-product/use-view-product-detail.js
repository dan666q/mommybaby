import productListApi from '@/services/product-list';
import { useQuery } from '@tanstack/react-query';
export const useViewProductDetail = (id) => {
    return useQuery({
        queryKey: ['viewProductDetail'],
        queryFn: () => productListApi.getProductById(id),
    });
};
