import { jsx as _jsx } from "react/jsx-runtime";
import TableData from '@/components/manager-screen/table';
import { VIEW_ORDER_COLS } from '@/constants/table-columns';
import { useViewOrderList } from './use-view-order-list';
import { useMemo } from 'react';
import { jwtDecode } from 'jwt-decode';
import { TOKEN_KEY } from '@/lib/axios';
const decodeToken = (token) => {
    const decodedToken = jwtDecode(token);
    return decodedToken;
};
export default function ViewListOrder() {
    const { data, isLoading } = useViewOrderList();
    const roleId = decodeToken(localStorage.getItem(TOKEN_KEY) || '').RoleId;
    const staffData = useMemo(() => {
        const staffId = localStorage.getItem('userId');
        if (!data || !staffId)
            return [];
        return data.filter((order) => order.staffId === parseInt(staffId));
    }, [data]);
    const addKeyToData = (dataArray) => {
        if (!dataArray)
            return [];
        return dataArray.map((item) => {
            return {
                ...item,
                key: item.orderId,
            };
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dataWithKeys = (data && addKeyToData(data)) || [];
    return (_jsx("div", { children: roleId == '1' ? (_jsx(TableData, { columns: VIEW_ORDER_COLS, data: dataWithKeys, total: data?.length, scrollX: 1400, scrollY: 620, hasRowSelection: true, isLoading: isLoading })) : (_jsx(TableData, { columns: VIEW_ORDER_COLS, data: staffData, total: data?.length, scrollX: 1400, scrollY: 620, hasRowSelection: true, isLoading: isLoading })) }));
}
