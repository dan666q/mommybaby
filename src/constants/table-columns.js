import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Dropdown from '@/components/manager-screen/dropdown';
import { Button, Image, Tag, Tooltip } from 'antd';
import { ViewAccountDropdown, ViewBlogDropdown, ViewBrandDropdown, ViewOrderDropdown, ViewProductDropdown, ViewPromotionDropdown, } from './menu-data';
import { getTagColor } from '@/utils';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS_MANAGER } from '@/router';
import dayjs from 'dayjs';
import { POPUP_TITLE, ROLE_MAPPING } from '.';
import Popup from '@/components/manager-screen/popup';
import AddProductPromotion from '@/features/manager-feature/promotion-mng/add-promotion/add-product-promotion';
export const VIEW_PRODUCT_COLS = [
    {
        title: 'ID',
        dataIndex: 'productId',
        key: 'productId',
        width: 80,
        align: 'center',
    },
    {
        title: 'IMAGE',
        dataIndex: 'productImg',
        key: 'productImg',
        align: 'center',
        render: (productImg) => (_jsx(Image, { src: productImg, preview: false, className: "rounded-xl", alt: "Brand Image", width: 80 })),
    },
    {
        title: 'PRODUCT NAME',
        dataIndex: 'productName',
        key: 'name',
        align: 'center',
        render: (name, record) => (_jsx(Link, { to: `${ROUTE_PATHS_MANAGER.M_PRODUCT}/${record.productId}`, children: name })),
    },
    {
        title: 'BRAND',
        dataIndex: 'productBrand',
        key: 'productBrand',
        width: 200,
        align: 'center',
    },
    {
        title: 'PRICE',
        dataIndex: 'productPrice',
        key: 'productPrice',
        width: 140,
        align: 'center',
        render: (price) => {
            const formatNumber = (number) => {
                return new Intl.NumberFormat('vi-VN').format(number);
            };
            return _jsxs("span", { children: [formatNumber(price), " VND"] });
        },
    },
    {
        title: 'DISCOUNT',
        dataIndex: 'discount',
        key: 'description',
        width: 140,
        align: 'center',
        render: (discount) => _jsxs("span", { children: [discount, "%"] }),
    },
    {
        title: 'QUANTITY',
        dataIndex: 'quantity',
        key: 'image',
        width: 140,
        align: 'center',
        render: (quantity) => _jsx("span", { children: quantity }),
    },
    {
        title: 'STATUS',
        dataIndex: 'isDisable',
        key: 'isDisable',
        width: 140,
        align: 'center',
        render: (isDisable) => {
            return _jsx(Tag, { color: isDisable ? 'error' : 'success', children: isDisable ? 'Disabled' : 'Active' });
        },
    },
    {
        title: 'Action',
        key: 'operation',
        width: 90,
        align: 'center',
        render: (record) => {
            return _jsx(Dropdown, { items: ViewProductDropdown(record.productName, record.productId, record.isDisable) });
        },
    },
];
export const VIEW_PRODUCT_PROMOTION_COLS = [
    {
        title: 'ID',
        dataIndex: 'productId',
        key: 'productId',
        width: 80,
        align: 'center',
    },
    {
        title: 'IMAGE',
        dataIndex: 'productImg',
        key: 'productImg',
        align: 'center',
        render: (productImg) => (_jsx(Image, { src: productImg, preview: false, className: "rounded-xl", alt: "Brand Image", width: 80 })),
    },
    {
        title: 'PRODUCT NAME',
        dataIndex: 'productName',
        key: 'name',
        align: 'center',
        render: (name, record) => (_jsx(Link, { to: `${ROUTE_PATHS_MANAGER.M_PRODUCT}/${record.productId}`, children: name })),
    },
    {
        title: 'BRAND',
        dataIndex: 'productBrand',
        key: 'productBrand',
        width: 200,
        align: 'center',
    },
    {
        title: 'PRICE',
        dataIndex: 'productPrice',
        key: 'productPrice',
        width: 140,
        align: 'center',
        render: (price) => _jsxs("span", { children: ["$", price] }),
    },
    {
        title: 'DISCOUNT',
        dataIndex: 'discount',
        key: 'description',
        width: 140,
        align: 'center',
        render: (discount) => _jsxs("span", { children: [discount, "%"] }),
    },
    {
        title: 'QUANTITY',
        dataIndex: 'quantity',
        key: 'image',
        width: 140,
        align: 'center',
        render: (quantity) => _jsx("span", { children: quantity }),
    },
    {
        title: 'STATUS',
        dataIndex: 'isDisable',
        key: 'isDisable',
        width: 140,
        align: 'center',
        render: (isDisable) => {
            return _jsx(Tag, { color: isDisable ? 'error' : 'success', children: isDisable ? 'Disabled' : 'Active' });
        },
    },
    {
        title: 'Action',
        key: 'operation',
        width: 90,
        align: 'center',
        render: (_, record) => {
            return (_jsx(Popup, { width: 700, title: POPUP_TITLE.ADD_PRODUCT_PROMOTION, type: "form", content: _jsx(AddProductPromotion, { product: record.productId }), children: _jsx(Button, { type: "primary", children: "Add" }) }));
        },
    },
];
export const VIEW_BRAND_COLS = [
    {
        title: 'BRAND ID',
        dataIndex: 'brandId',
        key: 'brandId',
        width: 160,
        align: 'center',
    },
    {
        title: 'IMAGE',
        dataIndex: 'brandImg',
        key: 'brandImg',
        align: 'center',
        render: (image) => (_jsx(Image, { src: image, preview: false, className: "rounded-xl", alt: "Brand Image", width: 80 })),
    },
    {
        title: 'BRAND NAME',
        dataIndex: 'brandName',
        key: 'brandName',
        align: 'center',
        render: (name, record) => (_jsx(Link, { to: `${ROUTE_PATHS_MANAGER.M_BRAND}/${record.brandId}`, children: name })),
    },
    {
        title: 'MADE IN',
        dataIndex: 'madeIn',
        key: 'madeIn',
        align: 'center',
    },
    {
        title: 'Action',
        key: 'operation',
        align: 'center',
        render: (record) => {
            return _jsx(Dropdown, { items: ViewBrandDropdown(record.brandName, record.brandId) });
        },
    },
];
export const VIEW_ACCOUNT_COLS = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 100,
        key: 'id',
        align: 'center',
    },
    {
        title: 'FULL NAME',
        dataIndex: 'fullName',
        width: 180,
        key: 'name',
        align: 'center',
        render: (fullName, record) => (_jsx(Link, { to: `${ROUTE_PATHS_MANAGER.M_ACCOUNT}/${record.id}`, children: fullName })),
    },
    {
        title: 'EMAIL',
        dataIndex: 'email',
        key: 'email',
        width: 200,
        align: 'center',
        ellipsis: true,
        render: (email) => (_jsx(Tooltip, { title: email, children: _jsx("span", { children: email }) })),
    },
    {
        title: 'PHONE',
        dataIndex: 'phone',
        width: 140,
        key: 'phone',
        align: 'center',
    },
    {
        title: 'ADDRESS',
        dataIndex: 'address',
        width: 150,
        key: 'address',
        align: 'center',
        ellipsis: true,
        render: (address) => _jsx(Tooltip, { title: address, children: address }),
    },
    {
        title: 'GENDER',
        dataIndex: 'gender',
        width: 90,
        key: 'gender',
        align: 'center',
        render: (gender) => {
            return gender ? _jsx("span", { children: "Male" }) : _jsx("span", { children: "Female" });
        },
    },
    {
        title: 'DATE OF BIRTH',
        dataIndex: 'dateOfBirth',
        width: 140,
        key: 'dateOfBirth',
        align: 'center',
        render: (dateOfBirth) => {
            return _jsx("span", { children: dayjs(dateOfBirth).format('DD/MM/YYYY') });
        },
    },
    {
        title: 'DISABLE',
        dataIndex: 'isDisable',
        key: 'isDisable',
        width: 90,
        align: 'center',
        render: (isDisable) => {
            return _jsx(Tag, { color: isDisable ? 'error' : 'success', children: isDisable ? 'Disabled' : 'Active' });
        },
    },
    {
        title: 'ROLE',
        dataIndex: 'roleId',
        width: 90,
        key: 'roleId',
        align: 'center',
        render: (roleId) => {
            const roleName = ROLE_MAPPING[roleId] || 'Unknown';
            return (_jsx(Tag, { className: "text-center w-36", color: getTagColor(roleId, 'role'), children: roleName }));
        },
    },
    {
        title: 'Action',
        key: 'operation',
        width: 90,
        align: 'center',
        render: (record) => {
            return _jsx(Dropdown, { items: ViewAccountDropdown(record.fullName, record.id, record.isDisable) });
        },
    },
];
export const VIEW_ORDER_COLS = [
    {
        title: 'ID',
        dataIndex: 'orderId',
        key: 'orderId',
        width: 90,
        align: 'center',
        render: (orderId) => _jsx(Link, { to: `${ROUTE_PATHS_MANAGER.M_ORDER}/${orderId}`, children: orderId }),
    },
    {
        title: 'CUSTOMER NAME',
        dataIndex: 'fullName',
        key: 'fullName',
        align: 'center',
    },
    {
        title: 'ADDRESS',
        dataIndex: 'deliverAddress',
        key: 'deliverAddress',
        align: 'center',
        ellipsis: true,
        render: (deliverAddress) => _jsx(Tooltip, { title: deliverAddress, children: deliverAddress }),
    },
    {
        title: 'PHONE',
        dataIndex: 'phone',
        key: 'phone',
        align: 'center',
    },
    {
        title: 'STATUS',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        render: (status) => {
            return (_jsx(Tag, { className: "text-center w-36", color: getTagColor(status, 'status'), children: status.toUpperCase() }));
        },
    },
    {
        title: 'TOTAL PRICE',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
        align: 'center',
        render: (totalPrice) => {
            const formatNumber = (number) => {
                return new Intl.NumberFormat('vi-VN').format(number);
            };
            return _jsxs("span", { children: [formatNumber(totalPrice), " VND"] });
        },
    },
    {
        title: 'ORDER DATE',
        dataIndex: 'orderDate',
        key: 'orderDate',
        align: 'center',
        render: (orderDate) => {
            return _jsx("span", { children: dayjs(orderDate).format('DD/MM/YYYY') });
        },
    },
    {
        title: 'Action',
        key: 'operation',
        width: 90,
        align: 'center',
        render: (record) => {
            return _jsx(Dropdown, { items: ViewOrderDropdown(record.orderId) });
        },
    },
];
export const VIEW_BLOG_COLS = [
    {
        title: 'ID',
        dataIndex: 'blogId',
        key: 'blogId',
        width: 90,
        align: 'center',
    },
    {
        title: 'IMG',
        dataIndex: 'blogImg',
        key: 'blogImg',
        align: 'center',
        render: (blogImg) => _jsx(Image, { src: blogImg, preview: false, className: "rounded-xl", alt: "Brand Image", width: 100 }),
    },
    {
        title: 'TITLE',
        dataIndex: 'title',
        key: 'title',
        align: 'center',
        render: (title, record) => _jsx(Link, { to: `${ROUTE_PATHS_MANAGER.M_BLOG}/${record.blogId}`, children: title }),
    },
    {
        title: 'CREATE DATE',
        dataIndex: 'createdAt',
        key: 'createdAt',
        align: 'center',
        render: (createdAt) => {
            return _jsx("span", { children: dayjs(createdAt).format('DD/MM/YYYY') });
        },
    },
    {
        title: 'CREATE BY',
        dataIndex: 'userId',
        key: 'userId',
        align: 'center',
    },
    {
        title: 'USEFUL VOTE',
        dataIndex: 'usefulVote',
        key: 'usefulVote',
        align: 'center',
        render: (usefulVote) => {
            return _jsx("span", { children: usefulVote ? usefulVote : 0 });
        },
    },
    {
        title: 'Action',
        key: 'operation',
        width: 90,
        align: 'center',
        render: (record) => {
            return _jsx(Dropdown, { items: ViewBlogDropdown(record.title, record.blogId) });
        },
    },
];
export const VIEW_PROMOTION_COLS = [
    {
        title: 'ID',
        dataIndex: 'promotionId',
        key: 'promotionId',
        align: 'center',
    },
    {
        title: 'NAME',
        dataIndex: 'promotionName',
        key: 'promotionName',
        align: 'center',
        render: (promotionName, record) => (_jsx(Link, { to: `${ROUTE_PATHS_MANAGER.M_PROMOTION}/${record.promotionId}`, children: promotionName })),
    },
    {
        title: 'IMG',
        dataIndex: 'promotionImg',
        key: 'promotionImg',
        align: 'center',
        render: (promotionImg) => (_jsx(Image, { src: promotionImg, preview: false, className: "rounded-xl", alt: "Brand Image", width: 100 })),
    },
    {
        title: 'START DATE',
        dataIndex: 'startAt',
        key: 'startAt',
        align: 'center',
        render: (startAt) => {
            return _jsx("span", { children: dayjs(startAt).format('DD/MM/YYYY') });
        },
    },
    {
        title: 'END DATE',
        dataIndex: 'endAt',
        key: 'endAt',
        align: 'center',
        render: (endAt) => {
            return _jsx("span", { children: dayjs(endAt).format('DD/MM/YYYY') });
        },
    },
    {
        title: 'STATUS',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        render: (status) => {
            return (_jsx(Tag, { className: "text-center w-36", color: getTagColor(status, 'promotion'), children: status ? 'ACTIVE' : 'INACTIVE' }));
        },
    },
    {
        title: 'PROMOTE',
        dataIndex: 'promote',
        key: 'promote',
        align: 'center',
        render: (promote) => {
            return _jsxs("span", { children: [promote, "%"] });
        },
    },
    {
        title: 'ACTION',
        key: 'operation',
        align: 'center',
        render: (record) => {
            return _jsx(Dropdown, { items: ViewPromotionDropdown(record.promotionId, record.promotionName) });
        },
    },
];
export const VIEW_ORDER_DETAIL = [];
