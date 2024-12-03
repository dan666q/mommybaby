import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CustomerInfo from '@/components/customer-screen/profile/customer-info';
import SearchBarMobile from '@/components/customer-screen/search-bar-mobile';
import SidebarInfo from '@/components/customer-screen/profile/sidebar-info';
const CustomerProfile = () => {
    return (_jsx("div", { children: _jsx("main", { className: "profile", children: _jsxs("div", { className: "container", children: [_jsx(SearchBarMobile, {}), _jsx("div", { className: "profile-container", children: _jsxs("div", { className: "row gy-md-3", children: [_jsx(SidebarInfo, {}), _jsx(CustomerInfo, {})] }) })] }) }) }));
};
export default CustomerProfile;
