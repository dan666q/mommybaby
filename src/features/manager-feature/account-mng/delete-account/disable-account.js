import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import ConfigAntdTheme from '@/lib/antd/config-theme';
import { POPUP_TITLE } from '@/constants';
import { DefaultButtonStyle } from '@/lib/antd/antd-styles';
import { useAppDispatch } from '@/lib/redux-toolkit/hook';
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice';
import { Button, Typography } from 'antd';
import { useDisableAccount } from './use-disable-account';
export default function DisableAccount({ fullName, id }) {
    const dispatch = useAppDispatch();
    const disableAccountMutation = useDisableAccount(id);
    function handleDelete(id) {
        console.log(id);
        disableAccountMutation.mutate();
        dispatch(closePopup(POPUP_TITLE.DISABLE_ACCOUNT));
    }
    return (_jsxs(_Fragment, { children: [_jsxs(Typography.Text, { children: ["Are you sure to disable ", fullName, "?"] }), _jsxs("div", { className: "flex items-center justify-end mt-4", children: [_jsx(Button, { danger: true, type: "text", className: "mr-2", onClick: () => dispatch(closePopup(POPUP_TITLE.DISABLE_ACCOUNT)), children: "Cancel" }), _jsx(ConfigAntdTheme, { theme: DefaultButtonStyle, children: _jsx(Button, { type: "primary", onClick: () => handleDelete(id), children: "Disable" }) })] })] }));
}
