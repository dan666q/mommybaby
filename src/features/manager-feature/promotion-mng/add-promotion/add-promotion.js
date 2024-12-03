import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import moment from 'moment';
import { Button, Form, Input, DatePicker, Switch, InputNumber } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { promotionSchema } from '@/lib/zod/schema';
import { useAppDispatch } from '@/lib/redux-toolkit/hook';
import { POPUP_TITLE } from '@/constants';
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice';
import { useAddPromotion } from './use-add-promotion';
export default function AddPromotion() {
    const dispatch = useAppDispatch();
    const addPromotionMutation = useAddPromotion();
    const { control, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: zodResolver(promotionSchema),
    });
    const handleCancel = () => {
        dispatch(closePopup(POPUP_TITLE.ADD_PROMOTION));
        reset();
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async (data) => {
        addPromotionMutation.mutate(data);
        reset();
        dispatch(closePopup(POPUP_TITLE.ADD_PROMOTION));
    };
    return (_jsx("div", { className: "w-full p-4", children: _jsxs(Form, { layout: "vertical", children: [_jsx(Form.Item, { label: "Promotion Name", validateStatus: errors.promotionName ? 'error' : '', help: errors.promotionName?.message, children: _jsx(Controller, { name: "promotionName", control: control, render: ({ field }) => _jsx(Input, { ...field }) }) }), _jsx(Form.Item, { label: "Start Time", validateStatus: errors.startAt ? 'error' : '', help: errors.startAt?.message, children: _jsx(Controller, { name: "startAt", control: control, render: ({ field }) => (_jsx(DatePicker, { ...field, format: "DD/MM/YYYY", value: field.value ? moment(field.value) : null, onChange: (date) => field.onChange(date ? date.startOf('day').toDate() : null) })) }) }), _jsx(Form.Item, { label: "End Time", validateStatus: errors.endAt ? 'error' : '', help: errors.endAt?.message, children: _jsx(Controller, { name: "endAt", control: control, render: ({ field }) => (_jsx(DatePicker, { ...field, format: "DD/MM/YYYY", value: field.value ? moment(field.value) : null, onChange: (date) => field.onChange(date ? date.startOf('day').toDate() : null) })) }) }), _jsx(Form.Item, { hidden: true, label: "Status", validateStatus: errors.status ? 'error' : '', help: errors.status?.message, children: _jsx(Controller, { name: "status", control: control, render: ({ field }) => _jsx(Switch, { ...field }) }) }), _jsx(Form.Item, { label: "Discount Rate", validateStatus: errors.promote ? 'error' : '', help: errors.promote?.message, children: _jsx(Controller, { name: "promote", control: control, render: ({ field }) => _jsx(InputNumber, { ...field, min: 0, max: 100, formatter: (value) => `${value}%` }) }) }), _jsx(Form.Item, { label: "Promotion Image URL", validateStatus: errors.promotionImg ? 'error' : '', help: errors.promotionImg?.message, children: _jsx(Controller, { name: "promotionImg", control: control, render: ({ field }) => _jsx(Input, { ...field }) }) }), _jsxs("div", { className: "flex gap-5", children: [_jsx(Form.Item, { className: "w-full", children: _jsx(Button, { onClick: handleCancel, className: "w-full", children: "Cancel" }) }), _jsx(Form.Item, { className: "w-full", children: _jsx(Button, { type: "primary", htmlType: "submit", onClick: handleSubmit(onSubmit), className: "w-full", children: "Add" }) })] })] }) }));
}
