import { jsx as _jsx } from "react/jsx-runtime";
import PublicRoute from '@/components/auth/public-route';
import PrivateRoute from '@/components/auth/private-route';
import ConditionalRoute from '@/components/auth/conditional-route';
import { Route, Routes } from 'react-router-dom';
import { routes } from '.';
export default function Router() {
    return (_jsx(Routes, { children: routes.map((route) => {
            const Page = route.component;
            const Layout = route.layout;
            return (_jsx(Route, { path: route.path, element: route.conditional ? (_jsx(ConditionalRoute, { roles: route.roles, children: Layout ? (_jsx(Layout, { children: _jsx(Page, {}) })) : (_jsx("div", { children: _jsx(Page, {}) })) })) : route.private ? (_jsx(PrivateRoute, { roles: route.roles, children: Layout ? (_jsx(Layout, { children: _jsx(Page, {}) })) : (_jsx("div", { children: _jsx(Page, {}) })) })) : Layout ? (_jsx(PublicRoute, { children: _jsx(Layout, { children: _jsx(Page, {}) }) })) : (_jsx(PublicRoute, { children: _jsx(Page, {}) })) }, route.name));
        }) }));
}
