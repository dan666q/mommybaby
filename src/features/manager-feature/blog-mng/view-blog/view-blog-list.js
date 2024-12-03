import { jsx as _jsx } from "react/jsx-runtime";
import TableData from '@/components/manager-screen/table';
import { useViewBlogList } from './use-view-blog-list';
import { VIEW_BLOG_COLS } from '@/constants/table-columns';
import { jwtDecode } from 'jwt-decode';
import { TOKEN_KEY } from '@/lib/axios';
import { useMemo } from 'react';
const decodeToken = (token) => {
    const decodedToken = jwtDecode(token);
    return decodedToken;
};
export default function ViewBlogList() {
    const { data, isLoading } = useViewBlogList();
    const roleId = decodeToken(localStorage.getItem(TOKEN_KEY) || '').RoleId;
    const staffData = useMemo(() => {
        const staffId = localStorage.getItem('userId');
        if (!data || !staffId)
            return [];
        return data.filter((blog) => blog.userId === parseInt(staffId));
    }, [data]);
    const addKeyToData = (dataArray) => {
        if (!dataArray)
            return [];
        return dataArray.map((item) => {
            return {
                ...item,
                key: item.blogId,
            };
        });
    };
    const dataWithKeys = (data && addKeyToData(data)) || [];
    return (_jsx("div", { children: roleId == '1' ? (_jsx(TableData, { columns: VIEW_BLOG_COLS, data: dataWithKeys, total: data?.length, scrollX: 1400, scrollY: 620, hasRowSelection: true, isLoading: isLoading })) : (_jsx(TableData, { columns: VIEW_BLOG_COLS, data: staffData, total: data?.length, scrollX: 1400, scrollY: 620, hasRowSelection: true, isLoading: isLoading })) }));
}
