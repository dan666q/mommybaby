import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu, Layout, Button } from 'antd';
import { CloseOutlined, BarsOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { NavigatorItems, NavigatorItemsStaff } from '@/constants/menu-data';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { TOKEN_KEY } from '@/lib/axios';
const { Sider } = Layout;
const decodeToken = (token) => {
    const decodedToken = jwtDecode(token);
    return decodedToken;
};
export default function Navigator() {
    const [isCollapse, setIsCollapse] = useState(false);
    const navigate = useNavigate();
    const roleId = decodeToken(localStorage.getItem(TOKEN_KEY) || '').RoleId;
    const toggleCollapse = () => setIsCollapse((prev) => !prev);
    return (_jsxs(Sider, { className: "h-full flex flex-col ", collapsible: true, trigger: null, collapsed: isCollapse, children: [_jsx(Button, { className: isCollapse ? 'mx-7 my-2' : 'mx-5 my-2', type: "text", onClick: toggleCollapse, children: isCollapse ? (_jsx(BarsOutlined, { className: "text-lg" })) : (_jsxs(_Fragment, { children: [_jsx(CloseOutlined, { className: "text-lg mr-3" }), " Close"] })) }), roleId == '1' ? (_jsx(Menu, { onClick: ({ key }) => navigate(key), className: "bg-foreground", mode: "inline", items: NavigatorItems })) : (_jsx(Menu, { onClick: ({ key }) => navigate(key), className: "bg-foreground", mode: "inline", items: NavigatorItemsStaff }))] }));
}
