import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import arrowRight from '@/assets/icons/arrow-right.svg';
export default function Breadcrumb() {
    return (_jsx("div", { className: "mt-5", children: _jsxs("ul", { className: "breadcrumbs checkout-page__breadcrumbs", children: [_jsx("li", { children: _jsxs("a", { href: "./", className: "breadcrumbs__link", children: ["Home", _jsx("img", { src: arrowRight, alt: "" })] }) }), _jsx("li", { children: _jsx("a", { href: "#!", className: "breadcrumbs__link breadcrumbs__link--current", children: "Checkout" }) })] }) }));
}
