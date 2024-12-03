import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import ConfigAntdTheme from '@/lib/antd/config-theme';
import { POPUP_TITLE } from '@/constants';
import { DefaultButtonStyle } from '@/lib/antd/antd-styles';
import { useAppDispatch } from '@/lib/redux-toolkit/hook';
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice';
import { Button, Typography } from 'antd';
import { useDeleteProduct } from './use-delete-product';
export default function DeleteProduct({ productName, productId }) {
    const dispatch = useAppDispatch();
    const deleteProductMutation = useDeleteProduct(productId);
    const handleDelete = () => {
        deleteProductMutation.mutate();
        dispatch(closePopup(POPUP_TITLE.DELETE_PRODUCT));
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Typography.Text, { children: ["Are you sure to delete ", productName, "?"] }), _jsxs("div", { className: "flex items-center justify-end mt-4", children: [_jsx(Button, { danger: true, type: "text", className: "mr-2", onClick: () => dispatch(closePopup(POPUP_TITLE.DELETE_PRODUCT)), children: "Cancel" }), _jsx(ConfigAntdTheme, { theme: DefaultButtonStyle, children: _jsx(Button, { type: "primary", onClick: handleDelete, children: "Delete" }) })] })] }));
}
