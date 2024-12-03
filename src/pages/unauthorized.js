import { jsx as _jsx } from "react/jsx-runtime";
import { ROUTE_PATHS } from '@/router';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
const UnauthorizedPage = () => {
    return (_jsx("div", { className: "flex justify-center items-center", children: _jsx(Result, { status: "403", title: "401", subTitle: "Sorry, you are not authorized to access this page.", extra: _jsx(Link, { to: ROUTE_PATHS.ROOT, children: _jsx(Button, { type: "primary", children: "Back Home" }) }) }) }));
};
export default UnauthorizedPage;
