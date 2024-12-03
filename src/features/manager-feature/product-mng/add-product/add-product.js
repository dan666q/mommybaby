import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Input, InputNumber, Select, Switch } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema } from '@/lib/zod/schema';
import { useViewBrandList } from '../../brand-mng/view-brand/use-view-brand-list';
import { useAddProduct } from './use-add-product';
import { useAppDispatch } from '@/lib/redux-toolkit/hook';
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice';
import { POPUP_TITLE } from '@/constants';
const { Option } = Select;
export default function AddProduct() {
    const addProductMutation = useAddProduct();
    const { data: brandList } = useViewBrandList();
    const dispatch = useAppDispatch();
    const { control, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: {
            isPreOrder: false,
            isPromote: false,
            isDisable: false,
        },
    });
    const handleOk = handleSubmit((data) => {
        addProductMutation.mutate(data);
        dispatch(closePopup(POPUP_TITLE.ADD_PRODUCT));
        reset();
    });
    const handleCancel = () => {
        dispatch(closePopup(POPUP_TITLE.ADD_PRODUCT));
        reset();
    };
    return (_jsx("div", { children: _jsxs("form", { onSubmit: handleOk, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Product Name" }), _jsx(Controller, { name: "productName", control: control, render: ({ field }) => _jsx(Input, { ...field, className: "mt-1" }) }), errors.productName && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.productName.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Brand" }), _jsx(Controller, { name: "brandId", control: control, render: ({ field }) => (_jsx(Select, { ...field, className: "mt-1 w-full", children: brandList?.map((brand) => (_jsx(Option, { value: brand.brandId, children: brand.brandName }, brand.brandId))) })) }), errors.brandId && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.brandId.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Product Image URL" }), _jsx(Controller, { name: "productImg", control: control, render: ({ field }) => _jsx(Input, { ...field, className: "mt-1" }) }), errors.productImg && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.productImg.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Price" }), _jsx(Controller, { name: "productPrice", control: control, render: ({ field }) => _jsx(InputNumber, { ...field, className: "mt-1 w-full", prefix: "VND" }) }), errors.productPrice && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.productPrice.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Stock" }), _jsx(Controller, { name: "quantity", control: control, render: ({ field }) => _jsx(InputNumber, { ...field, className: "mt-1 w-full" }) }), errors.quantity && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.quantity.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Discount" }), _jsx(Controller, { name: "discount", control: control, render: ({ field }) => _jsx(InputNumber, { ...field, className: "mt-1 w-full", prefix: "%" }) }), errors.discount && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.discount.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "By Age" }), _jsx(Controller, { name: "byAge", control: control, render: ({ field }) => _jsx(InputNumber, { ...field, className: "mt-1 w-full" }) }), errors.byAge && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.byAge.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Pre-Order" }), _jsx(Controller, { name: "isPreOrder", control: control, render: ({ field }) => _jsx(Switch, { ...field, checked: field.value }) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Pre-Order Amount" }), _jsx(Controller, { name: "preOrderAmount", control: control, render: ({ field }) => _jsx(InputNumber, { ...field, className: "mt-1 w-full" }) }), errors.preOrderAmount && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.preOrderAmount.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Promoted" }), _jsx(Controller, { name: "isPromote", control: control, render: ({ field }) => _jsx(Switch, { ...field, checked: field.value }) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Disabled" }), _jsx(Controller, { name: "isDisable", control: control, render: ({ field }) => _jsx(Switch, { ...field, checked: field.value }) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Description" }), _jsx(Controller, { name: "productDescription", control: control, render: ({ field }) => _jsx(Input.TextArea, { ...field, rows: 4, className: "mt-1" }) }), errors.productDescription && (_jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.productDescription.message }))] }), _jsxs("div", { className: "flex gap-5 justify-end", children: [_jsx(Button, { danger: true, onClick: handleCancel, children: "Cancel" }), _jsx(Button, { type: "primary", htmlType: "submit", children: "Save" })] })] }) }));
}
