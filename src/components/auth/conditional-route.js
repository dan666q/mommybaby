import { jsx as _jsx } from "react/jsx-runtime";
import { useAuth } from '@/hooks/use-auth';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';
export default function ConditionalRoute({ children, roles }) {
    const { user } = useAuth();
    if (user) {
        return _jsx(PrivateRoute, { roles: roles, children: children });
    }
    else {
        return _jsx(PublicRoute, { children: children });
    }
}
