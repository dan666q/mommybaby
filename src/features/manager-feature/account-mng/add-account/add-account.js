import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import moment from 'moment';
import { Button, Input, Select, DatePicker, Form, Switch } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createAccountSchema } from '@/lib/zod/schema';
import { useAddAccount } from './use-add-account';
import { useAppDispatch } from '@/lib/redux-toolkit/hook';
import { POPUP_TITLE } from '@/constants';
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice';
const { Option } = Select;
export default function AddAccount() {
    const dispatch = useAppDispatch();
    const addAccountMutation = useAddAccount();
    const { control, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: zodResolver(createAccountSchema),
    });
    const handleOk = handleSubmit((data) => {
        addAccountMutation.mutate(data);
        dispatch(closePopup(POPUP_TITLE.ADD_ACCOUNT));
        reset();
    });
    const handleCancel = () => {
        dispatch(closePopup(POPUP_TITLE.ADD_ACCOUNT));
        reset();
    };
    return (_jsx("div", { className: "px-10 py-5", children: _jsxs(Form, { layout: "vertical", className: "space-y-4", children: [_jsx(Form.Item, { label: "Username", validateStatus: errors.username ? 'error' : '', children: _jsx(Controller, { name: "username", control: control, render: ({ field }) => _jsx(Input, { ...field }) }) }), _jsx(Form.Item, { label: "Password", validateStatus: errors.password ? 'error' : '', children: _jsx(Controller, { name: "password", control: control, render: ({ field }) => _jsx(Input.Password, { ...field }) }) }), _jsx(Form.Item, { label: "Full Name", validateStatus: errors.fullName ? 'error' : '', children: _jsx(Controller, { name: "fullName", control: control, render: ({ field }) => _jsx(Input, { ...field }) }) }), _jsx(Form.Item, { label: "Date of Birth", validateStatus: errors.dateOfBirth ? 'error' : '', children: _jsx(Controller, { name: "dateOfBirth", control: control, render: ({ field }) => (_jsx(DatePicker, { ...field, format: "YYYY-MM-DD", value: field.value ? moment(field.value, 'YYYY-MM-DD') : null, onChange: (date) => {
                                const formattedDate = date ? date.format('YYYY-MM-DD') : '';
                                field.onChange(formattedDate);
                            } })) }) }), _jsx(Form.Item, { label: "Gender", validateStatus: errors.gender ? 'error' : '', children: _jsx(Controller, { name: "gender", control: control, render: ({ field }) => (_jsxs(Select, { ...field, children: [_jsx(Option, { value: true, children: "Male" }), _jsx(Option, { value: false, children: "Female" })] })) }) }), _jsx(Form.Item, { label: "Address", validateStatus: errors.address ? 'error' : '', children: _jsx(Controller, { name: "address", control: control, render: ({ field }) => _jsx(Input, { ...field }) }) }), _jsx(Form.Item, { label: "Phone", validateStatus: errors.phone ? 'error' : '', children: _jsx(Controller, { name: "phone", control: control, render: ({ field }) => _jsx(Input, { ...field }) }) }), _jsx(Form.Item, { label: "Image URL", validateStatus: errors.image ? 'error' : '', children: _jsx(Controller, { name: "image", control: control, render: ({ field }) => _jsx(Input, { ...field }) }) }), _jsx(Form.Item, { label: "Status", validateStatus: errors.status ? 'error' : '', children: _jsx(Controller, { name: "status", control: control, render: ({ field }) => (_jsxs(Select, { ...field, children: [_jsx(Option, { value: "Active", children: "Active" }), _jsx(Option, { value: "Inactive", children: "Inactive" })] })) }) }), _jsx(Form.Item, { label: "Is Disabled", validateStatus: errors.isDisable ? 'error' : '', children: _jsx(Controller, { name: "isDisable", control: control, defaultValue: false, render: ({ field }) => _jsx(Switch, { checked: field.value, onChange: (checked) => field.onChange(checked) }) }) }), _jsx(Form.Item, { label: "Email", validateStatus: errors.email ? 'error' : '', children: _jsx(Controller, { name: "email", control: control, render: ({ field }) => _jsx(Input, { ...field }) }) }), _jsxs(Form.Item, { className: "text-right", children: [_jsx(Button, { danger: true, htmlType: "submit", onClick: handleCancel, className: "mr-4", children: "Cancel" }), _jsx(Button, { type: "primary", htmlType: "submit", onClick: handleOk, children: "Add Account" })] })] }) }));
}
