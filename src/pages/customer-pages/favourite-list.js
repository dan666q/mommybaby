import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import arrowDown2 from '@/assets/icons/arrow-down-2.svg';
import Breadcrumb from '@/components/customer-screen/breadcrumb';
import FavouriteItem from '@/components/customer-screen/cart-favourite/favourite-item';
import SearchBarMobile from '@/components/customer-screen/search-bar-mobile';
import { useFavoriteList } from '@/hooks/customer-hook/use-favorite-list';
export default function FavouriteList() {
    const { data } = useFavoriteList();
    console.log(data);
    return (_jsx("div", { children: _jsx("main", { className: "checkout-page", children: _jsxs("div", { className: "container", children: [_jsx(SearchBarMobile, {}), _jsx(Breadcrumb, {}), _jsx("div", { className: "checkout-container", children: _jsx("div", { className: "row gy-xl-3", children: _jsx("div", { className: "col-12", children: _jsxs("div", { className: "cart-info", children: [_jsx("h1", { className: "cart-info__heading", children: "Favourite List" }), _jsx("p", { className: "cart-info__desc", children: "3 items" }), _jsx("div", { className: "cart-info__check-all", children: _jsx("label", { className: "cart-info__checkbox", children: _jsx("input", { type: "checkbox", name: "shipping-adress", className: "cart-info__checkbox-input" }) }) }), _jsxs("div", { className: "cart-info__list", children: [_jsx(FavouriteItem, {}), _jsx(FavouriteItem, {}), _jsx(FavouriteItem, {})] }), _jsx("div", { className: "cart-info__bottom", children: _jsx("div", { className: "cart-info__row cart-info__row-md--block", children: _jsx("div", { className: "cart-info__continue", children: _jsxs("a", { href: "./", className: "cart-info__continue-link", children: [_jsx("img", { className: "cart-info__continue-icon icon", src: arrowDown2, alt: "" }), "Continue Shopping"] }) }) }) })] }) }) }) })] }) }) }));
}
