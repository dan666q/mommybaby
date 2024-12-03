import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import gift from '@/assets/icons/gift.svg';
import { useCreateOrder } from '@/hooks/customer-hook/cart/use-create-order';
import { notification } from 'antd';
import { Link } from 'react-router-dom';
export default function PriceSection({ totalItem, totalPrice, cartId }) {
    const createOrderMutation = useCreateOrder();
    function handleOrder(cartId, totalItem) {
        if (totalItem === 0) {
            notification.error({
                message: 'Empty cart',
                description: 'Please add item to cart',
                placement: 'topRight',
            });
        }
        else {
            createOrderMutation.mutate(cartId);
        }
    }
    return (_jsxs("div", { className: "col-4 col-xl-12", children: [_jsxs("div", { className: "cart-info", children: [_jsxs("div", { className: "cart-info__row", children: [_jsxs("span", { children: ["Subtotal ", _jsx("span", { className: "cart-info__sub-label", children: "(items)" })] }), _jsx("span", { children: totalItem })] }), _jsxs("div", { className: "cart-info__row", children: [_jsxs("span", { children: ["Price ", _jsx("span", { className: "cart-info__sub-label", children: "(Total)" })] }), _jsxs("span", { children: [totalPrice, " VND"] })] }), _jsxs("div", { className: "cart-info__row", children: [_jsx("span", { children: "Shipping" }), _jsx("span", { children: "FREE" })] }), _jsx("div", { className: "cart-info__separate" }), _jsxs("div", { className: "cart-info__row", children: [_jsx("span", { children: "Estimated Total" }), _jsxs("span", { children: [totalPrice, " VND"] })] }), _jsx("button", { onClick: () => handleOrder(cartId, totalItem), className: "cart-info__next-btn btn btn--primary btn--rounded", children: _jsx(Link, { to: "/checkout", children: "Checkout" }) })] }), _jsx("div", { className: "cart-info", children: _jsx("a", { href: "#!", children: _jsxs("article", { className: "gift-item", children: [_jsx("div", { className: "gift-item__icon-wrap", children: _jsx("img", { src: gift, alt: "", className: "gift-item__icon" }) }), _jsxs("div", { className: "gift-item__content", children: [_jsx("h3", { className: "gift-item__title", children: "Send this order as a gift." }), _jsx("p", { className: "gift-item__desc", children: "Available items will be shipped to your gift recipient." })] })] }) }) })] }));
}
