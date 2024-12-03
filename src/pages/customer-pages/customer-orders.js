import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import OrderTable from '@/components/customer-screen/profile/order-table';
import SidebarInfo from '@/components/customer-screen/profile/sidebar-info';
export default function CustomerOders() {
    return (_jsx("div", { children: _jsx("main", { className: "profile", children: _jsx("div", { className: "container", children: _jsx("div", { className: "profile-container", children: _jsxs("div", { className: "row gy-md-3", children: [_jsx(SidebarInfo, {}), _jsx(OrderTable, {})] }) }) }) }) }));
}
