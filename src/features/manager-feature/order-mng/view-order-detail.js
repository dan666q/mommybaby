import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs';
import EditOrder from './edit-order-status/edit-order';
import Popup from '@/components/manager-screen/popup';
import { Card, Descriptions, Table, Tag, Typography, Image, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useViewOrderDetail } from './use-view-order-detail';
import { POPUP_TITLE } from '@/constants';
import { jwtDecode } from 'jwt-decode';
import { TOKEN_KEY } from '@/lib/axios';
const { Title } = Typography;
const decodeToken = (token) => {
    const decodedToken = jwtDecode(token);
    return decodedToken;
};
export default function ViewOrderDetail() {
    const { orderId } = useParams();
    const orderIdNumber = orderId ? parseInt(orderId, 10) : 0;
    const { data: order } = useViewOrderDetail(orderIdNumber);
    const roleId = decodeToken(localStorage.getItem(TOKEN_KEY) || '').RoleId;
    const formatNumber = (number) => {
        return new Intl.NumberFormat('vi-VN').format(number);
    };
    const columns = [
        {
            title: 'Product',
            dataIndex: 'productName',
            key: 'productName',
            render: (text) => (_jsx("div", { className: "flex items-center", children: _jsx("span", { children: text }) })),
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (text, record) => (_jsx("div", { className: "flex items-center", children: _jsx(Image, { src: record.image, alt: text, width: 150, className: "mr-2" }) })),
        },
        {
            title: 'Brand',
            dataIndex: 'brandName',
            key: 'brandName',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Price',
            dataIndex: 'unitPrice',
            key: 'unitPrice',
            render: (unitPrice) => {
                return `${formatNumber(unitPrice)} VND`;
            },
        },
        {
            title: 'Total',
            key: 'total',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            render: (_, record) => `${formatNumber(record.quantity * record.unitPrice)} VND`,
        },
    ];
    return (_jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx(Title, { level: 2, children: "Order Details" }), _jsx(Popup, { width: 500, type: "confirm", title: POPUP_TITLE.UPDATE_ORDER, content: EditOrder(orderIdNumber), children: _jsx(Button, { type: "primary", children: "Update Order" }) })] }), _jsx(Card, { className: "mb-6", children: _jsxs(Descriptions, { title: "Order Information", bordered: true, children: [_jsx(Descriptions.Item, { label: "Order ID", children: order?.orderId }), _jsx(Descriptions.Item, { label: "Customer Name", children: order?.fullName }), _jsx(Descriptions.Item, { label: "Phone", children: order?.phone }), _jsx(Descriptions.Item, { label: "Address", children: order?.deliverAddress }), _jsx(Descriptions.Item, { label: "Order Date", children: dayjs(order?.orderDate).format('YYYY-MM-DD HH:mm') }), _jsx(Descriptions.Item, { label: "Payment Method", children: order?.paymentMethod }), _jsx(Descriptions.Item, { label: "Status", children: _jsx(Tag, { color: order?.status === 'Completed' ? 'green' : 'blue', children: order?.status.toLocaleUpperCase() }) }), _jsxs(Descriptions.Item, { label: "Total Price", children: [formatNumber(order?.totalPrice), " VND"] })] }) }), _jsx(Card, { title: "Order Items", className: "mb-6", children: _jsx(Table, { columns: columns, dataSource: order?.productOrders, rowKey: "productId", pagination: false }) }), _jsx(Card, { children: _jsxs(Descriptions, { title: "Additional Information", children: [_jsx(Descriptions.Item, { label: "Staff ID", children: order?.staffId || 'N/A' }), _jsx(Descriptions.Item, { label: "User ID", children: order?.userId })] }) })] }));
}
