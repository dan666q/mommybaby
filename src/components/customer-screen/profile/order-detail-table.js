import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useViewOrderUserDetail } from '@/hooks/customer-hook/order/use-view-order-detail-user';
import { Table, Tag, Spin, Descriptions, Button, Modal, Form, Input, notification } from 'antd';
import { format } from 'date-fns';
import { useAddFeedback } from '@/hooks/customer-hook/feedback/use-add-feedback';
import { useAuth } from '@/hooks/use-auth';
import imgUrl from '@/assets/img/thanhtoanqr.jpg';
const { Column } = Table;
const { TextArea } = Input;
const OrderDetailTable = () => {
    const { orderId } = useParams();
    const { data: orderDetail, isLoading, error, refetch } = useViewOrderUserDetail(orderId);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [feedbackProducts, setFeedbackProducts] = useState([]); // State to track products with feedback
    const { user } = useAuth();
    const [form] = Form.useForm();
    useEffect(() => {
        if (orderId) {
            refetch();
        }
    }, [orderId, refetch]);
    const { deliverAddress = '', phone = '', fullName = '', paymentMethod = '', status = '', orderDate = '', productOrders = [], } = orderDetail || {};
    const computedTotalPrice = useMemo(() => {
        return productOrders.reduce((total, product) => total + product.quantity * product.unitPrice, 0);
    }, [productOrders]);
    const handleFeedbackClick = (product) => {
        setCurrentProduct(product);
        setIsModalVisible(true);
    };
    const handleModalClose = () => {
        setIsModalVisible(false);
        setCurrentProduct(null);
        form.resetFields();
    };
    const { mutate: addFeedback } = useAddFeedback();
    const handleFeedbackSubmit = (values) => {
        if (currentProduct) {
            const feedback = {
                rate: values.rate,
                comment: values.comment,
                productId: currentProduct.productId,
                orderId: Number(orderId),
                userId: user?.data?.id, // Ensure user ID is included
                replyId: null, // Include replyId if required
            };
            console.log('Submitting feedback:', feedback); // Log feedback data
            addFeedback(feedback, {
                onSuccess: (response) => {
                    console.log('Feedback submission successful:', response); // Log API response
                    handleModalClose();
                    notification.success({ message: 'Feedback submitted successfully' });
                    // Update feedbackProducts state with productId
                    setFeedbackProducts([...feedbackProducts, currentProduct.productId]);
                },
                onError: (error) => {
                    console.error('Feedback submission failed:', error); // Log error
                    notification.error({ message: 'Failed to submit feedback', description: error.message });
                },
            });
        }
    };
    const formatNumber = (number) => {
        return new Intl.NumberFormat('vi-VN').format(number);
    };
    if (isLoading)
        return _jsx(Spin, { size: "large" });
    if (error)
        return _jsxs("p", { children: ["Error: ", error.message] });
    if (!orderDetail)
        return _jsxs("p", { children: ["No order details found for order ID ", orderId] });
    return (_jsxs("div", { className: "mx-auto p-4", children: [_jsxs(Descriptions, { title: "Order Details", bordered: true, children: [_jsx(Descriptions.Item, { label: "Order ID", children: orderId }), _jsx(Descriptions.Item, { label: "Full Name", children: fullName }), _jsx(Descriptions.Item, { label: "Phone", children: phone }), _jsx(Descriptions.Item, { label: "Delivery Address", children: deliverAddress }), _jsx(Descriptions.Item, { label: "Payment Method", children: _jsxs("div", { className: "mt-5", children: [_jsx("span", { children: "Thanh to\u00E1n chuy\u1EC3n kho\u1EA3n" }), status === 'processing' && _jsx("img", { src: imgUrl, alt: "", className: "w-72 h-96" })] }) }), _jsx(Descriptions.Item, { label: "Status", children: _jsx(Tag, { color: status === 'processing' ? 'blue' : 'gold', children: status.toLocaleUpperCase() }) }), _jsx(Descriptions.Item, { label: "Order Date", children: format(new Date(orderDate), 'yyyy-MM-dd HH:mm:ss') }), _jsx(Descriptions.Item, { label: "Total Price", children: `${formatNumber(computedTotalPrice)} VND` })] }), _jsxs(Table, { dataSource: productOrders, rowKey: "productId", className: "mt-4", children: [_jsx(Column, { title: "Product ID", dataIndex: "productId" }, "productId"), _jsx(Column, { title: "Product Name", dataIndex: "productName" }, "productName"), _jsx(Column, { title: "Quantity", dataIndex: "quantity" }, "quantity"), _jsx(Column, { title: "Price", dataIndex: "unitPrice", render: (unitPrice) => `${formatNumber(unitPrice)} VND` }, "unitPrice"), _jsx(Column, { title: "Total", render: (_, record) => `${formatNumber(record.quantity * record.unitPrice)} VND` }, "total"), status === 'completed' && (_jsx(Column, { title: "Feedback", render: (_, product) => (_jsx(Button, { type: "primary", onClick: () => handleFeedbackClick(product), disabled: feedbackProducts.includes(product.productId), children: "Give Feedback" })) }, "feedback"))] }), _jsx(Modal, { title: `Submit Feedback for ${currentProduct?.productName}`, visible: isModalVisible, onCancel: handleModalClose, onOk: () => form.submit(), children: _jsxs(Form, { form: form, layout: "vertical", onFinish: handleFeedbackSubmit, children: [_jsx(Form.Item, { name: "rate", label: "Rate", rules: [{ required: true, message: 'Please provide a rating' }], children: _jsx(Input, { type: "number", min: 1, max: 5 }) }), _jsx(Form.Item, { name: "comment", label: "Comment", rules: [{ required: true, message: 'Please provide a comment' }], children: _jsx(TextArea, { rows: 4 }) })] }) })] }));
};
export default OrderDetailTable;
