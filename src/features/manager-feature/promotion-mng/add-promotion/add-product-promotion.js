import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { POPUP_TITLE } from '@/constants';
import { DefaultButtonStyle } from '@/lib/antd/antd-styles';
import ConfigAntdTheme from '@/lib/antd/config-theme';
import { useAppDispatch } from '@/lib/redux-toolkit/hook';
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice';
import { Button, Typography } from 'antd';
import { useAddProductPromotion } from './use-add-product-promotion';
import { useParams } from 'react-router-dom';
export default function AddProductPromotion(product) {
    const id = useParams().promotionId;
    const dispatch = useAppDispatch();
    console.log(product);
    const addProductPromotion = useAddProductPromotion(Number(id));
    function handleAddProductPromotion() {
        addProductPromotion.mutate(product.product.productId);
        dispatch(closePopup(POPUP_TITLE.ADD_PRODUCT_PROMOTION));
    }
    return (_jsxs(_Fragment, { children: [_jsx(Typography.Text, { children: "Are you sure to add product to promotion?" }), _jsxs("div", { className: "flex items-center justify-end mt-4", children: [_jsx(Button, { danger: true, type: "text", className: "mr-2", onClick: () => dispatch(closePopup(POPUP_TITLE.ADD_PRODUCT_PROMOTION)), children: "Cancel" }), _jsx(ConfigAntdTheme, { theme: DefaultButtonStyle, children: _jsx(Button, { type: "primary", onClick: handleAddProductPromotion, children: "Add product" }) })] })] }));
}
