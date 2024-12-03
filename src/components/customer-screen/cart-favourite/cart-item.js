import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import trash from '@/assets/icons/trash.svg';
import plus from '@/assets/icons/plus.svg';
import minus from '@/assets/icons/minus.svg';
import { useDeleteCartItem } from '@/hooks/customer-hook/cart/use-delete-cart-item';
import { useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/use-debounce';
import { useUpdateQuantity } from '@/hooks/customer-hook/cart/use-update-quantity';
import { ROUTE_PATHS } from '@/router';
import { Link } from 'react-router-dom';
export default function CartItem({ isCheckout, cartItem }) {
    const onePrice = cartItem?.unitPrice / cartItem?.quantity;
    const deleteCartItemMutation = useDeleteCartItem();
    const updateQuantityMutation = useUpdateQuantity();
    const [quantityItem, setQuantityItem] = useState(cartItem?.quantity);
    const debouncedQuantity = useDebounce(quantityItem, 500);
    function handleDelete(id) {
        console.log(id);
        deleteCartItemMutation.mutate(id);
    }
    useEffect(() => {
        if (debouncedQuantity !== cartItem?.quantity) {
            handleUpdateQuantity(cartItem?.productId, debouncedQuantity);
        }
    }, [debouncedQuantity]);
    function handleUpdateQuantity(productId, quantity) {
        console.log(productId, quantity);
        updateQuantityMutation.mutate({ productId, quantity });
    }
    return (_jsxs("article", { className: "cart-item", children: [_jsx(Link, { to: `${ROUTE_PATHS.PRODUCT}/${cartItem?.productId}`, children: _jsx("img", { src: cartItem?.image, alt: "", className: "cart-item__thumb" }) }), _jsxs("div", { className: "cart-item__content", children: [_jsxs("div", { className: "cart-item__content-left", children: [_jsx("h3", { className: "cart-item__title", children: _jsx(Link, { to: `${ROUTE_PATHS.PRODUCT}/${cartItem?.productId}`, children: cartItem?.productName }) }), _jsxs("p", { className: "cart-item__price-wrap", children: [onePrice, " | ", _jsx("span", { className: "cart-item__status", children: "In Stock" })] }), _jsxs("div", { className: "cart-item__ctrl cart-item__ctrl--md-block", children: [_jsx("div", { className: "cart-item__input", children: cartItem?.brandName }), isCheckout ? (_jsx("div", { className: "cart-item__input", children: _jsx("span", { children: quantityItem }) })) : (_jsxs("div", { className: "cart-item__input", children: [_jsx("button", { className: "cart-item__input-btn", onClick: () => {
                                                    if (quantityItem > 1)
                                                        setQuantityItem((prev) => prev - 1);
                                                }, children: _jsx("img", { className: "icon", src: minus, alt: "" }) }), _jsx("span", { children: quantityItem }), _jsx("button", { className: "cart-item__input-btn", onClick: () => setQuantityItem((prev) => prev + 1), children: _jsx("img", { className: "icon", src: plus, alt: "" }) })] }))] })] }), _jsxs("div", { className: "cart-item__content-right", children: [_jsx("p", { className: "cart-item__total-price", children: cartItem?.unitPrice }), _jsx("div", { className: "cart-item__ctrl", children: _jsxs("button", { className: "cart-item__ctrl-btn js-toggle", "toggle-target": "#delete-confirm", onClick: () => handleDelete(cartItem?.productId), children: [_jsx("img", { src: trash, alt: "" }), "Delete"] }) })] })] })] }));
}
