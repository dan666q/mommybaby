import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Popup from '@/components/manager-screen/popup';
import ConfigAntdTheme from '@/lib/antd/config-theme';
import SectionHeader from '@/components/manager-screen/section-header';
import ViewListAccount from '@/features/manager-feature/account-mng/view-account/view-list-account';
import AddAccount from '@/features/manager-feature/account-mng/add-account/add-account';
import SearchBar from '@/components/manager-screen/search';
import { POPUP_TITLE } from '@/constants';
import { GreenButtonStyle } from '@/lib/antd/antd-styles';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
export default function AccountManager() {
    return (_jsxs(_Fragment, { children: [_jsx(SectionHeader, { title: "Account List", className: "" }), _jsxs("div", { className: "flex flex-col gap-4 p-4", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx(SearchBar, {}), _jsx("div", { className: "flex flex-col gap-4", children: _jsx("div", { className: "flex items-center gap-2", children: _jsx(ConfigAntdTheme, { theme: GreenButtonStyle, children: _jsx(Popup, { width: 800, type: "form", title: POPUP_TITLE.ADD_ACCOUNT, content: _jsx(AddAccount, {}), children: _jsx(Button, { type: "primary", icon: _jsx(PlusCircleOutlined, {}), children: "Add new" }) }) }) }) })] }), _jsx(ViewListAccount, {})] })] }));
}
