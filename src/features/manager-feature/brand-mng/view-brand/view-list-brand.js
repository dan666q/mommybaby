import { jsx as _jsx } from "react/jsx-runtime";
import TableData from '@/components/manager-screen/table';
import { VIEW_BRAND_COLS } from '@/constants/table-columns';
import { useViewBrandList } from './use-view-brand-list';
export default function ViewListBrand() {
    const { data, isLoading } = useViewBrandList();
    const addKeyToData = (dataArray) => {
        if (!dataArray)
            return [];
        return dataArray.map((item) => {
            return {
                ...item,
                key: item.brandId,
            };
        });
    };
    const dataWithKeys = (data && addKeyToData(data)) || [];
    return (_jsx("div", { children: _jsx(TableData, { columns: VIEW_BRAND_COLS, data: dataWithKeys, total: data?.length, scrollX: 1400, scrollY: 620, hasRowSelection: true, isLoading: isLoading }) }));
}
