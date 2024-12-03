import { jsx as _jsx } from "react/jsx-runtime";
import TableData from '@/components/manager-screen/table';
import { VIEW_PROMOTION_COLS } from '@/constants/table-columns';
import { useViewPromotionList } from './use-view-promotion-list';
export default function ViewPromotionList() {
    const { data, isLoading } = useViewPromotionList();
    const addKeyToData = (dataArray) => {
        if (!dataArray)
            return [];
        return dataArray.map((item) => {
            return {
                ...item,
                key: item?.promotionId,
            };
        });
    };
    const dataWithKeys = (data && addKeyToData(data)) || [];
    return (_jsx("div", { children: _jsx(TableData, { columns: VIEW_PROMOTION_COLS, data: dataWithKeys, total: data?.length, scrollX: 1400, scrollY: 620, hasRowSelection: true, isLoading: isLoading }) }));
}
