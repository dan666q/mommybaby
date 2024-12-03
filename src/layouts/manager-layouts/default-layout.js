import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from '@/components/manager-screen/manager-footer';
import Header from '@/components/manager-screen/manager-header';
import Navigator from '@/components/manager-screen/navigator';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
export default function DefaultLayout({ children }) {
    return (_jsxs(Layout, { className: "min-h-screen", children: [_jsx(Header, { isLoginPage: false }), _jsxs(Layout, { children: [_jsx("div", { children: _jsx(Navigator, {}) }), _jsx(Content, { className: "flex flex-col", children: children })] }), _jsx(Footer, {})] }));
}
