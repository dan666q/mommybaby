import { jsx as _jsx } from "react/jsx-runtime";
// import Footer from '@/components/manager-screen/manager-footer'
// import Header from '@/components/manager-screen/manager-header'
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
export default function LoginLayout({ children }) {
    return (_jsx(Layout, { className: "min-h-screen", children: _jsx(Layout, { className: "mt-1", children: _jsx(Content, { className: "bg-login-layout bg-contain", children: children }) }) }));
}
