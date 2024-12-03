import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Typography } from 'antd';
import { HomeOutlined, FileTextOutlined } from '@ant-design/icons';
import imgUrl from '@/assets/img/thanhtoanqr.jpg';
const { Text } = Typography;
const Checkout = () => {
    const handleBackToHome = () => {
        window.location.href = '/';
    };
    const handleGoToMyOrders = () => {
        window.location.href = '/customer-orders';
    };
    return (_jsxs("div", { children: [_jsxs("div", { className: "relative h-64", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: { backgroundImage: `url('https://wallpapercave.com/wp/wp2034287.jpg')` }, children: _jsx("div", { className: "absolute inset-0 bg-black opacity-50" }) }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center text-white", children: _jsx("h1", { className: "text-5xl font-bold", children: "Thank You!" }) })] }), _jsx("div", { className: "flex items-center justify-center my-24 mx-auto", children: _jsxs("div", { className: "text-center p-8 bg-white shadow-lg rounded-lg", children: [_jsxs("div", { className: "mb-8", children: [_jsx(Text, { strong: true, className: "text-3xl", children: "Vui l\u00F2ng thanh to\u00E1n trong v\u00F2ng 12 ti\u1EBFng \u0111\u1EC3 \u0111\u01B0\u1EE3c x\u00E1c nh\u1EADn \u0111\u01A1n h\u00E0ng" }), _jsx("br", {}), _jsx("div", { className: "mt-5", children: _jsx(Text, { strong: true, className: "text-3xl", children: "Ki\u1EC3m tra tr\u1EA1ng th\u00E1i \u0111\u01A1n h\u00E0ng \u1EDF order detail" }) })] }), _jsx("div", { className: "mb-8 w-1/2 mx-auto", children: _jsx("img", { src: imgUrl, alt: "" }) }), _jsxs("div", { className: "space-x-4", children: [_jsx(Button, { type: "primary", size: "large", icon: _jsx(HomeOutlined, {}), onClick: handleBackToHome, children: "Back to Home" }), _jsx(Button, { size: "large", icon: _jsx(FileTextOutlined, {}), onClick: handleGoToMyOrders, children: "Go to My Orders" })] })] }) })] }));
};
export default Checkout;
