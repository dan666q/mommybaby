import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import moment from 'moment';
import { useState } from 'react';
import { Card, Button, Descriptions, Tag, Image, Modal, Form, Input, DatePicker, Switch, InputNumber, Table, } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useViewPromotionDetail } from './use-view-promotion-detail';
import { useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { promotionSchema } from '@/lib/zod/schema';
import { useUpdatePromotion } from '../update-promotion/use-update-promotion';
import Popup from '@/components/manager-screen/popup';
import DeleteProductPromotion from '../delete-promotion/delete-product-promotion';
import { POPUP_TITLE } from '@/constants';
import { useViewProductList } from '../../product-mng/view-product/use-view-product';
import { VIEW_PRODUCT_PROMOTION_COLS } from '@/constants/table-columns';
export default function ViewPromotionDetail() {
    const { promotionId } = useParams();
    const [isAddProductModalVisible, setIsAddProductModalVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { data: promotion } = useViewPromotionDetail(Number(promotionId));
    const { data: product } = useViewProductList();
    const addKeyToData = (dataArray) => {
        if (!dataArray)
            return [];
        return dataArray.map((item) => {
            return {
                ...item,
                key: item.productId,
            };
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dataWithKeys = (product && addKeyToData(product)) || [];
    const UpdatePromotionMutation = useUpdatePromotion(Number(promotionId));
    const { control, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: zodResolver(promotionSchema),
        defaultValues: promotion,
    });
    const showEditModal = () => {
        reset(promotion);
        setIsModalVisible(true);
    };
    const showAddProductModal = () => {
        setIsAddProductModalVisible(true);
    };
    const onSubmit = async (data) => {
        UpdatePromotionMutation.mutate(data);
        setIsModalVisible(false);
    };
    const columns = [
        {
            title: 'ID',
            dataIndex: 'productId',
            key: 'productId',
        },
        {
            title: 'Product',
            dataIndex: 'productName',
            key: 'productName',
            render: (text) => (_jsx("div", { className: "flex items-center", children: _jsx("span", { children: text }) })),
        },
        {
            title: 'Image',
            dataIndex: 'productImg',
            key: 'productImg',
            render: (text, record) => (_jsx("div", { className: "flex items-center ", children: _jsx(Image, { src: record.productImg, alt: text, width: 120, className: "rounded-xl" }) })),
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
            render: (discount) => `${discount ? discount : 0}%`,
        },
        {
            title: 'Price',
            dataIndex: 'productPrice',
            key: 'productPrice',
            render: (productPrice) => `${productPrice} VND`,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (_jsx(Popup, { width: 430, type: "confirm", title: POPUP_TITLE.DELETE_PRODUCT_PROMOTION, content: _jsx(DeleteProductPromotion, { promotionId: promotionId, productId: record.productId }), children: _jsx(Button, { type: "primary", danger: true, children: "Delete" }) })),
        },
    ];
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    return (_jsxs("div", { className: "w-9/12 mx-auto p-4", children: [_jsx(Card, { title: _jsx("h2", { className: "text-2xl font-bold", children: promotion?.promotionName }), extra: _jsxs("div", { children: [_jsx(Button, { type: "default", icon: _jsx(EditOutlined, {}), onClick: showAddProductModal, className: "mr-2", children: "Add product" }), _jsx(Button, { type: "primary", icon: _jsx(EditOutlined, {}), onClick: showEditModal, children: "Edit" })] }), cover: _jsx(Image, { alt: promotion?.promotionName, src: promotion?.promotionImg, className: "object-cover h-48 w-6/12" }), className: "shadow-lg", children: _jsxs(Descriptions, { bordered: true, column: 1, children: [_jsx(Descriptions.Item, { label: "Promotion ID", children: promotion?.promotionId }), _jsx(Descriptions.Item, { label: "Start Time", children: new Date(promotion?.startAt).toLocaleString() }), _jsx(Descriptions.Item, { label: "End Time", children: new Date(promotion?.endAt).toLocaleString() }), _jsx(Descriptions.Item, { label: "Status", children: _jsx(Tag, { color: promotion?.status ? 'green' : 'red', children: promotion?.status ? 'Active' : 'Inactive' }) }), _jsxs(Descriptions.Item, { label: "Discount Rate", children: [promotion?.promote, "%"] })] }) }), _jsx(Card, { title: "Order Items", className: "my-5", children: _jsx(Table, { columns: columns, dataSource: promotion?.products, rowKey: "productId", pagination: false }) }), _jsx(Modal, { title: "Edit Promotion", visible: isModalVisible, onOk: handleSubmit(onSubmit), onCancel: () => setIsModalVisible(false), children: _jsxs(Form, { layout: "vertical", children: [_jsx(Form.Item, { label: "Promotion Name", validateStatus: errors.promotionName ? 'error' : '', help: errors.promotionName?.message, children: _jsx(Controller, { name: "promotionName", control: control, render: ({ field }) => _jsx(Input, { ...field }) }) }), _jsxs("div", { className: "flex justify-between", children: [_jsx(Form.Item, { className: "w-full", label: "Start Time", validateStatus: errors.startAt ? 'error' : '', help: errors.startAt?.message, children: _jsx(Controller, { name: "startAt", control: control, render: ({ field }) => (_jsx(DatePicker, { ...field, format: "DD/MM/YYYY", value: field.value ? moment(field.value) : null, onChange: (date) => field.onChange(date ? date.startOf('day').toDate() : null) })) }) }), _jsx(Form.Item, { label: "End Time", className: "w-full", validateStatus: errors.endAt ? 'error' : '', help: errors.endAt?.message, children: _jsx(Controller, { name: "endAt", control: control, render: ({ field }) => (_jsx(DatePicker, { ...field, format: "DD/MM/YYYY", value: field.value ? moment(field.value) : null, onChange: (date) => field.onChange(date ? date.startOf('day').toDate() : null) })) }) })] }), _jsx(Form.Item, { hidden: true, label: "Status", validateStatus: errors.status ? 'error' : '', help: errors.status?.message, children: _jsx(Controller, { name: "status", control: control, render: ({ field }) => _jsx(Switch, { ...field, checked: field.value }) }) }), _jsx(Form.Item, { label: "Discount Rate", validateStatus: errors.promote ? 'error' : '', help: errors.promote?.message, children: _jsx(Controller, { name: "promote", control: control, render: ({ field }) => _jsx(InputNumber, { ...field, min: 0, max: 100, formatter: (value) => `${value}%` }) }) }), _jsx(Form.Item, { label: "Promotion Image URL", validateStatus: errors.promotionImg ? 'error' : '', help: errors.promotionImg?.message, children: _jsx(Controller, { name: "promotionImg", control: control, render: ({ field }) => _jsx(Input, { ...field }) }) })] }) }), _jsx(Modal, { width: 1200, title: "Add Products to Promotion", visible: isAddProductModalVisible, onOk: () => {
                    // Xử lý logic thêm sản phẩm vào đây
                    setIsAddProductModalVisible(false);
                }, onCancel: () => setIsAddProductModalVisible(false), children: _jsx(Form, { layout: "vertical", children: _jsx(Table, { columns: VIEW_PRODUCT_PROMOTION_COLS, dataSource: dataWithKeys, pagination: { pageSize: 5 }, rowSelection: rowSelection }) }) })] }));
}
