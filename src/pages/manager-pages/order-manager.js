import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import SectionHeader from '@/components/manager-screen/section-header';
import ViewListOrder from '@/features/manager-feature/order-mng/view-list-order';
import SearchBar from '@/components/manager-screen/search';
export default function OrderManager() {
    return (_jsxs(_Fragment, { children: [_jsx(SectionHeader, { title: "Order List", className: "" }), _jsxs("div", { className: "flex flex-col gap-4 p-4", children: [_jsx("div", { className: "flex justify-between", children: _jsx(SearchBar, {}) }), _jsx(ViewListOrder, {})] })] }));
}
