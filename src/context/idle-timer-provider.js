import { jsx as _jsx } from "react/jsx-runtime";
import { useAuth } from '@/hooks/use-auth';
import { IdleTimerProvider } from 'react-idle-timer';
export default function IdleTimerWrapProvider({ children }) {
    const { logoutMutation } = useAuth();
    const onIdle = () => {
        logoutMutation.mutate();
    };
    return (_jsx(IdleTimerProvider, { timeout: 1000 * 3600, onIdle: onIdle, children: children }));
}
