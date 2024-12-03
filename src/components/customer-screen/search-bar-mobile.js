import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import search from '@/assets/icons/search.svg';
export default function SearchBarMobile() {
    return (_jsx("div", { children: _jsx("div", { className: "checkout-container", children: _jsxs("div", { className: "search-bar d-none d-md-flex", children: [_jsx("input", { type: "text", name: "", id: "", placeholder: "Search for item", className: "search-bar__input" }), _jsx("button", { className: "search-bar__submit", children: _jsx("img", { src: search, alt: "", className: "search-bar__icon icon" }) })] }) }) }));
}
