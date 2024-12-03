import { jsx as _jsx } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from '@/lib/redux-toolkit/hook';
import { setPagination } from '@/lib/redux-toolkit/slices/pagination-slice';
import { setIsChosen, setProductChosen } from '@/lib/redux-toolkit/slices/chosen-slice';
import { Table } from 'antd';
export default function TableData({ columns, data, scrollX, scrollY, hasRowSelection, isLoading, total, }) {
    const dispatch = useAppDispatch();
    const pagination = useAppSelector((state) => state.pagination);
    return (_jsx(Table, { loading: isLoading, columns: columns, dataSource: data, scroll: { x: scrollX, y: scrollY }, pagination: {
            total: total,
            position: ['bottomCenter'],
            pageSizeOptions: [10, 20, 30],
            showSizeChanger: true,
            current: pagination.pageNumber,
            pageSize: pagination.pageSize,
            onChange: (current, size) => {
                dispatch(setPagination({ pageSize: size, pageNumber: current }));
            },
        }, rowSelection: hasRowSelection
            ? {
                type: 'checkbox',
                onChange(selectedRowKeys) {
                    dispatch(setIsChosen(selectedRowKeys.length > 0));
                    dispatch(setProductChosen(selectedRowKeys.map(String)));
                },
            }
            : undefined, size: "middle" }));
}
