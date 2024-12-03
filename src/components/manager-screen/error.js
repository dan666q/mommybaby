import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/utils';
import { Empty, Result } from 'antd';
export default function Error({ content, type, className }) {
    let data = null;
    switch (type) {
        case 'not-found':
            data = _jsx(Result, { status: "404", title: "Oops...", subTitle: content });
            break;
        case 'empty':
            data = _jsx(Empty, { description: content });
            break;
    }
    return _jsx("div", { className: cn('flex h-full justify-center items-center mx-auto', className), children: data });
}
