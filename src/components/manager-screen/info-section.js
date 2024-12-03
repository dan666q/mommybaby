import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from '@/lib/redux-toolkit/hook';
import { setMode } from '@/lib/redux-toolkit/slices/ui-status';
import { Typography } from 'antd';
import { Icons } from '@/components/ui/icons';
import { cn } from '@/utils';
export default function InfoSection({ title, indicator, children, className, page, isDisabled }) {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.ui.sections[page][indicator]);
    return (_jsxs("div", { className: "flex flex-col", children: [_jsxs("div", { className: "bg-secondary p-2 flex justify-between items-center", children: [_jsx(Typography.Text, { type: "secondary", className: "font-bold", children: title }), mode === 'view' && !isDisabled && (_jsx(Icons.create, { className: "cursor-pointer", fill: "white", onClick: () => dispatch(setMode({ key: indicator, value: 'edit', page: page })) }))] }), _jsx("div", { className: cn('p-4', className), children: children })] }));
}
