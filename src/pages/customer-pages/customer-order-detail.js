import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import OrderDetailTable from '@/components/customer-screen/profile/order-detail-table';
import SidebarInfo from '@/components/customer-screen/profile/sidebar-info';
export default function CustomerOdersDetail() {
    return (_jsx("div", { children: _jsx("main", { className: "profile", children: _jsx("div", { className: "container", children: _jsx("div", { className: "profile-container", children: _jsxs("div", { className: "row gy-md-3", children: [_jsx(SidebarInfo, {}), _jsx(OrderDetailTable, {})] }) }) }) }) }));
}
