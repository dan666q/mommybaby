import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import SectionHeader from '@/components/manager-screen/section-header';
import ConfigAntdTheme from '@/lib/antd/config-theme';
import Popup from '@/components/manager-screen/popup';
import AddBrand from '@/features/manager-feature/brand-mng/add-brand/add-brand';
import SearchBar from '@/components/manager-screen/search';
import DashboardInfo from '@/features/manager-feature/dashboard/dashboard-info';
import { Button } from 'antd';
import { POPUP_TITLE } from '@/constants';
import { GreenButtonStyle } from '@/lib/antd/antd-styles';
import { PlusCircleOutlined } from '@ant-design/icons';
export default function OrderManager() {
    return (_jsxs(_Fragment, { children: [_jsx(SectionHeader, { title: "Dashboard", className: "" }), _jsxs("div", { className: "flex flex-col gap-4 p-4", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx(SearchBar, {}), _jsx("div", { className: "flex flex-col gap-4 ml-auto", children: _jsx("div", { className: "flex items-center gap-2", children: _jsx(ConfigAntdTheme, { theme: GreenButtonStyle, children: _jsx(Popup, { width: 500, type: "form", title: POPUP_TITLE.ADD_ORDER, content: _jsx(AddBrand, {}), children: _jsx(Button, { type: "primary", icon: _jsx(PlusCircleOutlined, {}), children: "Add new" }) }) }) }) })] }), _jsx(DashboardInfo, {})] })] }));
}
