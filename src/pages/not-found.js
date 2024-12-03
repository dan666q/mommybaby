import { jsx as _jsx } from "react/jsx-runtime";
import { ROUTE_PATHS } from '@/router';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
export default function NotFound() {
    return (_jsx(Result, { status: "404", title: "404", subTitle: "Sorry, the page you visited does not exist.", extra: _jsx(Link, { to: ROUTE_PATHS.ROOT, children: _jsx(Button, { type: "primary", children: "Back Home" }) }) }));
}
