import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CartItem from '@/components/customer-screen/cart-favourite/cart-item';
import Breadcrumb from '@/components/customer-screen/breadcrumb';
import SearchBarMobile from '@/components/customer-screen/search-bar-mobile';
import PriceSection from '@/components/customer-screen/cart-favourite/price-section';
import { useCartItem } from '@/hooks/customer-hook/cart/use-cart-list';
export default function Cart() {
    const { data } = useCartItem();
    return (_jsx("div", { children: _jsx("main", { className: "checkout-page", children: _jsxs("div", { className: "container", children: [_jsx(SearchBarMobile, {}), _jsx(Breadcrumb, {}), _jsx("div", { className: "checkout-container", children: _jsxs("div", { className: "row gy-xl-3", children: [_jsx("div", { className: "col-8 col-xl-12", children: _jsx("div", { className: "cart-info", children: _jsx("div", { className: "cart-info__list", children: data?.cartItems?.map((item) => (_jsx(CartItem, { cartItem: item }, item.cartItemId))) }) }) }), _jsx(PriceSection, { totalItem: data?.totalItem ?? 0, totalPrice: data?.totalPrice ?? 0, cartId: data?.cartId ?? 0 })] }) })] }) }) }));
}
