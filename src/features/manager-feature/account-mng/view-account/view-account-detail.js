import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import moment from 'moment';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Card, Descriptions, Tag, Button, Modal, Input, Select, DatePicker, Avatar } from 'antd';
import { EditOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons';
import { useForm, Controller } from 'react-hook-form';
import { accountSchema } from '@/lib/zod/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useViewAccountDetail } from './use-view-account-detail';
import { ROLE_MAPPING } from '@/constants';
import { useParams } from 'react-router-dom';
import { Skeleton } from 'antd';
import { useEditAccount } from '../update-account/use-edit-account';
import { useDisableAccount } from '../delete-account/use-disable-account';
const { Option } = Select;
export default function ViewAccountDetail() {
    const { accountId } = useParams();
    const { data: account, isLoading } = useViewAccountDetail(Number(accountId));
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const useEditAccountMutation = useEditAccount(Number(accountId));
    const useDisableAccountMutation = useDisableAccount(Number(accountId));
    const { control, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: zodResolver(accountSchema),
        defaultValues: account,
    });
    const showEditModal = () => {
        reset(account);
        setIsEditModalVisible(true);
    };
    const handleEditOk = handleSubmit((data) => {
        const inputData = { ...data, password: account?.password };
        useEditAccountMutation.mutate(inputData);
        setIsEditModalVisible(false);
    });
    const handleEditCancel = () => {
        setIsEditModalVisible(false);
    };
    return (_jsxs("div", { className: "px-10 py-5", children: [_jsxs(Card, { title: _jsx("h1", { className: "text-2xl font-bold", children: "Account Details" }), extra: _jsxs("div", { className: "space-x-2", children: [_jsx(Button, { type: "primary", icon: _jsx(EditOutlined, {}), onClick: showEditModal, children: "Edit" }), _jsx(Button, { danger: !account?.isDisable, icon: account?.isDisable ? _jsx(UnlockOutlined, {}) : _jsx(LockOutlined, {}), onClick: () => useDisableAccountMutation.mutate(), children: account?.isDisable ? 'Enable' : 'Disable' })] }), className: "shadow-lg", children: [_jsx(Skeleton, { active: true, loading: isLoading }), _jsxs(Descriptions, { bordered: true, column: 1, children: [_jsx(Descriptions.Item, { label: "ID", children: account?.id }), _jsx(Descriptions.Item, { label: "Full Name", children: account?.fullName }), _jsx(Descriptions.Item, { label: "Image", children: _jsx(Avatar, { src: account?.image, size: 72 }) }), _jsx(Descriptions.Item, { label: "Phone", children: account?.phone }), _jsx(Descriptions.Item, { label: "Email", children: account?.email }), _jsx(Descriptions.Item, { label: "Address", children: account?.address }), _jsx(Descriptions.Item, { label: "Gender", children: account?.gender ? 'Male' : 'Female' }), _jsx(Descriptions.Item, { label: "Date of Birth", children: dayjs(account?.dateOfBirth).format('DD/MM/YYYY') }), _jsx(Descriptions.Item, { label: "Status", children: _jsx(Tag, { color: account?.isDisable ? 'red' : 'green', children: account?.isDisable ? 'Disabled' : 'Active' }) }), _jsx(Descriptions.Item, { label: "Role", children: _jsx(Tag, { color: "blue", children: account?.roleId && ROLE_MAPPING[account?.roleId] }) })] })] }), _jsx(Modal, { title: "Edit Account", visible: isEditModalVisible, onOk: handleEditOk, onCancel: handleEditCancel, children: _jsxs("form", { onSubmit: handleEditOk, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Full Name" }), _jsx(Controller, { name: "fullName", control: control, render: ({ field }) => _jsx(Input, { ...field, className: "mt-1" }) }), errors.fullName && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.fullName.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Image" }), _jsx(Controller, { name: "image", control: control, render: ({ field }) => _jsx(Input, { ...field, className: "mt-1" }) }), errors.image && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.image.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Phone" }), _jsx(Controller, { name: "phone", control: control, render: ({ field }) => _jsx(Input, { ...field, className: "mt-1" }) }), errors.phone && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.phone.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Email" }), _jsx(Controller, { name: "email", control: control, render: ({ field }) => _jsx(Input, { ...field, className: "mt-1" }) }), errors.email && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.email.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Address" }), _jsx(Controller, { name: "address", control: control, render: ({ field }) => _jsx(Input.TextArea, { ...field, rows: 2, className: "mt-1" }) }), errors.address && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.address.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Gender" }), _jsx(Controller, { name: "gender", control: control, render: ({ field }) => (_jsxs(Select, { ...field, className: "mt-1 w-full", children: [_jsx(Option, { value: true, children: "Male" }), _jsx(Option, { value: false, children: "Female" })] })) }), errors.gender && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.gender.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Date of Birth" }), _jsx(Controller, { name: "dateOfBirth", control: control, render: ({ field }) => (_jsx(DatePicker, { ...field, className: "mt-1 w-full", format: "DD-MM-YYYY", value: field.value ? moment(field.value) : null, onChange: (date) => field.onChange(date ? date.format('DD-MM-YYYY') : null) })) }), errors.dateOfBirth && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.dateOfBirth.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Role" }), _jsx(Controller, { name: "roleId", control: control, render: ({ field }) => (_jsxs(Select, { ...field, className: "mt-1 w-full", children: [_jsx(Option, { value: 1, children: "Admin" }), _jsx(Option, { value: 2, children: "Staff" }), _jsx(Option, { value: 3, children: "Customer" })] })) }), errors.roleId && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.roleId.message })] })] }) })] }));
}
