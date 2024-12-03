import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useViewOrderUserList } from '@/hooks/customer-hook/order/use-view-order-user';
import { Table, Tag, Button } from 'antd';
import { format } from 'date-fns';
import { useAuth } from '@/hooks/use-auth';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS_CUSTOMER } from '@/router';
const { Column } = Table;
const OrderTable = () => {
    const { user } = useAuth();
    const { data: orderList, isLoading, error } = useViewOrderUserList();
    if (isLoading)
        return _jsx("p", { children: "Loading..." });
    if (error)
        return _jsxs("p", { children: ["Error: ", error.message] });
    // Check if user data is available
    if (!user || !user.data) {
        return _jsx("p", { children: "User data not available" });
    }
    // Filter orderList to show only orders belonging to the logged-in user
    const userOrderList = orderList?.filter((order) => order.userId === user.data.id);
    const formatNumber = (number) => {
        return new Intl.NumberFormat('vi-VN').format(number);
    };
    return (_jsxs(Table, { dataSource: userOrderList, style: { width: '1000px' }, children: [_jsx(Column, { title: "Order ID", dataIndex: "orderId" }, "orderId"), _jsx(Column, { title: "Payment Method", dataIndex: "paymentMethod", render: () => _jsx("span", { children: "Thanh to\u00E1n chuy\u1EC3n kho\u1EA3n" }) }, "paymentMethod"), _jsx(Column, { title: "Status", dataIndex: "status", render: (status) => _jsx(Tag, { color: status === 'processing' ? 'blue' : 'gold', children: status.toLocaleUpperCase() }) }, "status"), _jsx(Column, { title: "Order Date", dataIndex: "orderDate", render: (orderDate) => format(new Date(orderDate), 'yyyy-MM-dd HH:mm:ss') }, "orderDate"), _jsx(Column, { title: "Total Price", dataIndex: "totalPrice", render: (totalPrice) => `${formatNumber(totalPrice)} VND` }, "totalPrice"), _jsx(Column, { title: "Actions", render: (_, record) => (_jsx(Link, { to: `${ROUTE_PATHS_CUSTOMER.MY_ORDER}/${record.orderId}`, children: _jsx(Button, { type: "primary", children: "Details" }) })) }, "actions")] }));
};
export default OrderTable;
