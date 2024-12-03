import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CustomerFooter from '@/components/customer-screen/customer-footer';
import CustomerHeader from '@/components/customer-screen/customer-header';
import SidebarInfo from '@/components/customer-screen/profile/sidebar-info';
export default function ProfileLayout({ children }) {
    return (_jsxs("div", { children: [_jsx(CustomerHeader, { isLoginPage: true }), _jsx(SidebarInfo, {}), children, _jsx(CustomerFooter, {})] }));
}
