import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/utils';
import { Spin } from 'antd';
const DEFAULT_LOADING_CONTENT = 'Loading...';
export default function Loading({ content = DEFAULT_LOADING_CONTENT, className }) {
    return (_jsx("div", { className: cn('flex h-full justify-center items-center', className), children: _jsxs("div", { className: "flex flex-col gap-3 items-center", children: [_jsx(Spin, { size: "large" }), _jsx("div", { children: content })] }) }));
}
