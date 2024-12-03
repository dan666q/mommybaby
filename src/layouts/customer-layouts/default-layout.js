import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CustomerFooter from '@/components/customer-screen/customer-footer';
import CustomerHeader from '@/components/customer-screen/customer-header';
export default function DefaultLayout({ children }) {
    return (_jsxs("div", { children: [_jsx(CustomerHeader, {}), children, _jsx(CustomerFooter, {})] }));
}
