import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/utils';
import { Typography } from 'antd';
export default function Label({ label, children, className, wrapper }) {
    return (_jsxs("div", { className: cn('flex items-center w-full', wrapper), children: [_jsx(Typography.Text, { strong: true, className: cn('w-2/6', className), children: label }), _jsx("div", { className: "w-full", children: children })] }));
}
