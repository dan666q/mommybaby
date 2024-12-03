import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import addToCart from '@/assets/icons/buy.svg';
import star from '@/assets/icons/star.svg';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/router';
import { useAddCartItem } from '@/hooks/customer-hook/cart/use-add-cart.item';
export default function ProductCard(product) {
    const AddToCartMutation = useAddCartItem();
    function handleAddToCart(productId, quantity) {
        console.log(productId, quantity);
        AddToCartMutation.mutate({ productId, quantity });
    }
    const formatNumber = (number) => {
        return new Intl.NumberFormat('vi-VN').format(number);
    };
    return (_jsx("div", { children: _jsx("div", { className: "col", children: _jsxs("article", { className: "product-card", children: [_jsxs("div", { className: "product-card__img-wrap", children: [_jsx(Link, { to: `${ROUTE_PATHS.PRODUCT}/${product?.productId}`, children: _jsx("img", { src: product?.productImg, alt: "", className: "product-card__thumb" }) }), _jsx("button", { className: "like-btn product-card__like-btn", onClick: () => handleAddToCart(product?.productId, 1), children: _jsx("img", { src: addToCart, alt: "", className: "icon like-btn__icon" }) })] }), _jsx(Link, { to: `${ROUTE_PATHS.PRODUCT}/${product?.productId}`, children: _jsx("h3", { className: "product-card__title", children: product?.productName }) }), _jsx("p", { className: "product-card__brand", children: product?.productBrand }), _jsxs("div", { className: "product-card__row", children: [_jsxs("div", { className: "product-card__rating", children: [_jsx("img", { src: star, alt: "", className: "product-card__star" }), _jsx("span", { className: "product-card__score", children: product?.rate })] }), _jsxs("span", { className: "product-card__price", children: [formatNumber(product?.productPrice), " VND"] })] })] }) }) }));
}
