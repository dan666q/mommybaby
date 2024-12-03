import productListApi from '@/services/product-list';
import { useQuery } from '@tanstack/react-query';
export const useViewDetailProduct = (id) => {
    return useQuery({
        queryKey: ['productDetail', id],
        queryFn: () => productListApi.getProductById(id),
    });
};
