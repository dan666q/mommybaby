import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Logo from '@/assets/icons/logo3.png';
import avatar from '@/assets/img/avatar.jpg';
import { Header as AntHeader } from 'antd/es/layout/layout';
import { Typography, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS_MANAGER } from '@/router';
import { useAuth } from '@/hooks/use-auth';
export default function ManagerHeader({ isLoginPage }) {
    const navigate = useNavigate();
    const { logoutMutation, user } = useAuth();
    return (_jsxs(AntHeader, { className: "flex justify-between items-center", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: Logo, alt: "M&B Mart", className: "logo__img top-bar__logo-img mr-3" }), _jsx("h1", { className: "logo__title top-bar__logo-title mt-2 text-white", children: "M&B Mart" })] }), _jsx("div", { className: "flex items-center gap-8", children: !isLoginPage ? (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Avatar, { src: user?.data.profilePic ? user?.data.profilePic : avatar, size: 46, className: "border-white border-2 cursor-pointer", onClick: () => navigate(ROUTE_PATHS_MANAGER.PROFILE) }), _jsxs("div", { className: "flex flex-col", children: [_jsx(Typography.Text, { className: "text-white", children: user?.data.fullName }), _jsx(Typography.Text, { className: "text-white cursor-pointer", onClick: () => logoutMutation.mutate(), children: "Log out" })] })] })) : null })] }));
}
