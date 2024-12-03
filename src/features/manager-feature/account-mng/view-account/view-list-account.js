import { jsx as _jsx } from "react/jsx-runtime";
import TableData from '@/components/manager-screen/table';
import { VIEW_ACCOUNT_COLS } from '@/constants/table-columns';
import { useViewAccountList } from './use-view-account-list';
export default function ViewListAccount() {
    const { data, isLoading } = useViewAccountList();
    const addKeyToData = (dataArray) => {
        if (!dataArray)
            return [];
        return dataArray.map((item) => {
            return {
                ...item,
                key: item.id,
            };
        });
    };
    const dataWithKeys = (data && addKeyToData(data)) || [];
    return (_jsx("div", { children: _jsx(TableData, { columns: VIEW_ACCOUNT_COLS, data: dataWithKeys, total: data?.length, scrollX: 1400, scrollY: 620, hasRowSelection: true, isLoading: isLoading }) }));
}
