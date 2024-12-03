import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input, Button } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { brandSchema } from '@/lib/zod/schema';
import { useAddBrand } from './use-add-brand';
import { useAppDispatch } from '@/lib/redux-toolkit/hook';
import { POPUP_TITLE } from '@/constants';
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice';
export default function AddBrand() {
    const dispatch = useAppDispatch();
    const addBrandMutation = useAddBrand();
    const { control, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(brandSchema),
    });
    const handleAddBrand = handleSubmit((data) => {
        console.log('Data: ', data);
        addBrandMutation.mutate(data);
        dispatch(closePopup(POPUP_TITLE.ADD_BRAND));
    });
    return (_jsx("div", { className: "px-10 py-5", children: _jsxs("form", { onSubmit: handleAddBrand, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700", children: "Brand Name" }), _jsx(Controller, { name: "brandName", control: control, render: ({ field }) => _jsx(Input, { ...field, className: "mt-1" }) }), errors.brandName && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.brandName.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700", children: "Made In" }), _jsx(Controller, { name: "madeIn", control: control, render: ({ field }) => _jsx(Input, { ...field, className: "mt-1" }) }), errors.madeIn && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.madeIn.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700", children: "Description" }), _jsx(Controller, { name: "description", control: control, render: ({ field }) => _jsx(Input.TextArea, { ...field, rows: 4, className: "mt-1" }) }), errors.description && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.description.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700", children: "Brand Image URL" }), _jsx(Controller, { name: "brandImg", control: control, render: ({ field }) => _jsx(Input, { ...field, className: "mt-1" }) }), errors.brandImg && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.brandImg.message })] }), _jsx("div", { className: "flex justify-end mt-5", children: _jsx(Button, { type: "primary", htmlType: "submit", children: "Add Brand" }) })] }) }));
}
