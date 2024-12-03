import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CustomerInforEdit from '@/components/customer-screen/profile/customer-infor-edit';
import SidebarInfo from '@/components/customer-screen/profile/sidebar-info';
import { useAuth } from '@/hooks/use-auth';
export default function CustomerEditProfile() {
    const { user, loadingInitial } = useAuth();
    if (loadingInitial)
        return _jsx("p", { children: "Loading..." });
    return (_jsx("div", { children: _jsx("main", { className: "profile", children: _jsx("div", { className: "container", children: _jsx("div", { className: "profile-container", children: _jsxs("div", { className: "row gy-md-3", children: [_jsx(SidebarInfo, {}), _jsx(CustomerInforEdit, {})] }) }) }) }) }));
}
