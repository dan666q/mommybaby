import { jsx as _jsx } from "react/jsx-runtime";
import TableData from '@/components/manager-screen/table';
import { VIEW_PRODUCT_COLS } from '@/constants/table-columns';
import { useViewProductListManager } from './use-view-product-manager';
export default function ViewListProduct() {
    const { data, isLoading } = useViewProductListManager();
    const addKeyToData = (dataArray) => {
        if (!dataArray)
            return [];
        return dataArray.map((item) => {
            return {
                ...item,
                key: item.productId,
            };
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dataWithKeys = (data && addKeyToData(data)) || [];
    return (_jsx("div", { children: _jsx(TableData, { columns: VIEW_PRODUCT_COLS, data: dataWithKeys, total: data?.length, scrollX: 1400, scrollY: 620, hasRowSelection: true, isLoading: isLoading }) }));
}
