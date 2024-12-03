import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import leafBg from '@/assets/img/card/leaf-bg.svg';
import leaf from '@/assets/img/card/leaf.svg';
export default function AtmCard() {
    const bgColorSelectStyle2 = {
        '--bg-color': '#1e2e69',
    };
    return (_jsx("div", { className: "col", children: _jsxs("article", { className: "payment-card", style: bgColorSelectStyle2, children: [_jsx("img", { src: leafBg, alt: "", className: "payment-card__img" }), _jsxs("div", { className: "payment-card__top", children: [_jsx("img", { src: leaf, alt: "" }), _jsx("span", { className: "payment-card__type", children: "FeatherCard" })] }), _jsx("div", { className: "payment-card__number", children: "1234 4567 2221 8901" }), _jsxs("div", { className: "payment-card__bottom", children: [_jsxs("div", { children: [_jsx("p", { className: "payment-card__label", children: "Card Holder" }), _jsx("p", { className: "payment-card__value", children: "Imran Khan" })] }), _jsxs("div", { className: "payment-card__expired", children: [_jsx("p", { className: "payment-card__label", children: "Expired" }), _jsx("p", { className: "payment-card__value", children: "11/22" })] }), _jsx("div", { className: "payment-card__circle" })] })] }) }));
}
