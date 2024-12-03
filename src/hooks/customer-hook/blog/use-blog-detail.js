// src/hooks/useViewBlogDetail.ts
import { useQuery } from '@tanstack/react-query';
import blogApi from '@/services/blog';
export const useViewBlogDetail = (id) => {
    return useQuery({
        queryKey: ['blogDetail', id],
        queryFn: () => blogApi.getBlogById(id),
    });
};
