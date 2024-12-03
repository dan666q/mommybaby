import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import delivery1 from '@/assets/img/payment/delivery-1.png';
export default function Delivery() {
    return (_jsx("label", { children: _jsxs("article", { className: "payment-item payment-item--pointer", children: [_jsx("img", { src: delivery1, alt: "", className: "payment-item__thumb" }), _jsxs("div", { className: "payment-item__content", children: [_jsxs("div", { className: "payment-item__info", children: [_jsx("h3", { className: "payment-item__title", children: "Fedex Delivery" }), _jsx("p", { className: "payment-item__desc payment-item__desc--low", children: "Delivery: 2-3 days work" })] }), _jsxs("span", { className: "cart-info__checkbox payment-item__checkbox", children: [_jsx("input", { type: "radio", name: "delivery-method", checked: true, className: "cart-info__checkbox-input payment-item__checkbox-input" }), _jsx("span", { className: "payment-item__cost", children: "Free" })] })] })] }) }));
}
