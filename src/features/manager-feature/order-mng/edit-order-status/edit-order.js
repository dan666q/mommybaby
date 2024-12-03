import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { POPUP_TITLE } from '@/constants';
import { DefaultButtonStyle } from '@/lib/antd/antd-styles';
import ConfigAntdTheme from '@/lib/antd/config-theme';
import { useAppDispatch } from '@/lib/redux-toolkit/hook';
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice';
import { Button, Typography } from 'antd';
import { useUpdateStatus } from './use-edit-order';
export default function EditOrder(orderId) {
    const dispatch = useAppDispatch();
    const useUpdateStatusMutation = useUpdateStatus(orderId);
    function handleUpdate() {
        useUpdateStatusMutation.mutate('string');
        dispatch(closePopup(POPUP_TITLE.UPDATE_ORDER));
    }
    return (_jsxs(_Fragment, { children: [_jsx(Typography.Text, { children: "Are you sure to update process?" }), _jsxs("div", { className: "flex items-center justify-end mt-4", children: [_jsx(Button, { danger: true, type: "text", className: "mr-2", onClick: () => dispatch(closePopup(POPUP_TITLE.UPDATE_ORDER)), children: "Cancel" }), _jsx(ConfigAntdTheme, { theme: DefaultButtonStyle, children: _jsx(Button, { type: "primary", onClick: handleUpdate, children: "Update" }) })] })] }));
}
