import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Layout, Card, Statistic, Row, Col, Table } from 'antd';
import { UserOutlined, ShoppingCartOutlined, DollarOutlined, ShoppingOutlined } from '@ant-design/icons';
import { useViewOrderList } from '../order-mng/use-view-order-list';
import { useViewAccountList } from '../account-mng/view-account/use-view-account-list';
import { useViewProductListManager } from '../product-mng/view-product/use-view-product-manager';
import { VIEW_ORDER_COLS } from '@/constants/table-columns';
const { Content } = Layout;
export default function DashboardInfo() {
    const { data: order } = useViewOrderList();
    const { data: account } = useViewAccountList();
    const { data: product } = useViewProductListManager();
    const totalMoney = order?.reduce((total, item) => total + item.totalPrice, 0);
    const totalUser = account?.length;
    const totalOrder = order?.length;
    const totalProduct = product?.length;
    const newOrder = order?.slice(0, 5);
    return (_jsx("div", { children: _jsxs(Content, { children: [_jsxs(Row, { gutter: 16, className: "mb-6", children: [_jsx(Col, { span: 6, children: _jsx(Card, { children: _jsx(Statistic, { title: "Total Sales", value: totalMoney, precision: 2, valueStyle: { color: '#3f8600' }, prefix: _jsx(DollarOutlined, {}) }) }) }), _jsx(Col, { span: 6, children: _jsx(Card, { children: _jsx(Statistic, { title: "Total User", value: totalUser, valueStyle: { color: '#cf1322' }, prefix: _jsx(UserOutlined, {}) }) }) }), _jsx(Col, { span: 6, children: _jsx(Card, { children: _jsx(Statistic, { title: "Orders", value: totalOrder, prefix: _jsx(ShoppingCartOutlined, {}) }) }) }), _jsx(Col, { span: 6, children: _jsx(Card, { children: _jsx(Statistic, { title: "Product", value: totalProduct, valueStyle: { color: '#3f8600' }, prefix: _jsx(ShoppingOutlined, {}) }) }) })] }), _jsx(Card, { title: "Recent Orders", className: "mb-6", children: _jsx(Table, { columns: VIEW_ORDER_COLS, dataSource: newOrder, pagination: false }) })] }) }));
}
