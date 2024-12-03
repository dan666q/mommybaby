import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/utils';
import { Typography } from 'antd';
export default function SectionHeader({ title, className }) {
    return (_jsx("div", { className: cn(' w-full flex justify-start items-center p-4 mt-1', className), children: _jsx(Typography.Title, { level: 3, children: title }) }));
}
