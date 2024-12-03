import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, Descriptions, Image, Button, Modal, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { brandSchema } from '@/lib/zod/schema';
import { useNavigate, useParams } from 'react-router-dom';
import { useViewBrandDetail } from './use-view-brand-detail';
import { useEditBrand } from '../edit-brand/use-edit-brand';
import { useDeleteBrand } from '../delete-brand/use-delete-brand';
import { ROUTE_PATHS_MANAGER } from '@/router';
export default function ViewBrandDetail() {
    const navigate = useNavigate();
    const { brandId } = useParams();
    const { data: brand } = useViewBrandDetail(Number(brandId));
    const editBrandMutation = useEditBrand(Number(brandId));
    const deleteBrandMutation = useDeleteBrand(Number(brandId));
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const { control, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: zodResolver(brandSchema),
        defaultValues: brand,
    });
    const showEditModal = () => {
        reset(brand);
        setIsEditModalVisible(true);
    };
    const handleEditOk = handleSubmit((data) => {
        console.log(data);
        editBrandMutation.mutate(data);
        setIsEditModalVisible(false);
    });
    const handleEditCancel = () => {
        setIsEditModalVisible(false);
    };
    function handleDelete() {
        deleteBrandMutation.mutate();
        navigate(ROUTE_PATHS_MANAGER.M_BRAND);
    }
    return (_jsxs("div", { className: "px-10 py-5", children: [_jsx(Card, { title: _jsx("h1", { className: "text-2xl font-bold", children: brand?.brandName }), extra: _jsxs("div", { className: "space-x-2", children: [_jsx(Button, { type: "primary", icon: _jsx(EditOutlined, {}), onClick: showEditModal, children: "Edit" }), _jsx(Button, { danger: true, icon: _jsx(DeleteOutlined, {}), onClick: () => handleDelete(), children: "Delete" })] }), className: "shadow-lg", children: _jsxs("div", { className: "flex flex-col md:flex-row", children: [_jsx("div", { className: "w-full md:w-1/3 pr-4", children: _jsx(Image, { src: brand?.brandImg, alt: brand?.brandName, className: "w-full rounded-lg" }) }), _jsx("div", { className: "w-full md:w-2/3", children: _jsxs(Descriptions, { bordered: true, column: 1, children: [_jsx(Descriptions.Item, { label: "Brand ID", children: brand?.brandId }), _jsx(Descriptions.Item, { label: "Brand Name", children: brand?.brandName }), _jsx(Descriptions.Item, { label: "Made In", children: brand?.madeIn }), _jsx(Descriptions.Item, { label: "Description", children: brand?.description })] }) })] }) }), _jsx(Modal, { title: "Edit Brand", visible: isEditModalVisible, onOk: handleEditOk, onCancel: handleEditCancel, children: _jsxs("form", { onSubmit: handleEditOk, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Brand Name" }), _jsx(Controller, { name: "brandName", control: control, render: ({ field }) => _jsx(Input, { ...field, className: "mt-1" }) }), errors.brandName && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.brandName.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Made In" }), _jsx(Controller, { name: "madeIn", control: control, render: ({ field }) => _jsx(Input, { ...field, className: "mt-1" }) }), errors.madeIn && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.madeIn.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Description" }), _jsx(Controller, { name: "description", control: control, render: ({ field }) => _jsx(Input.TextArea, { ...field, rows: 4, className: "mt-1" }) }), errors.description && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.description.message })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Brand Image" }), _jsx(Controller, { name: "brandImg", control: control, render: ({ field }) => _jsx(Input, { ...field, className: "mt-1" }) }), errors.brandImg && _jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.brandImg.message })] })] }) })] }));
}
