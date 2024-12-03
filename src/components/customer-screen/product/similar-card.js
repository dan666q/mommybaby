import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import star from '@/assets/icons/star.svg';
import heart from '@/assets/icons/heart.svg';
import heartRed from '@/assets/icons/heart-red.svg';
import item1 from '@/assets/img/product/milk1.png';
export default function SimilarCard() {
    return (_jsx("div", { className: "col", children: _jsxs("article", { className: "product-card", children: [_jsxs("div", { className: "product-card__img-wrap", children: [_jsx("a", { href: "./product-detail.html", children: _jsx("img", { src: item1, alt: "", className: "product-card__thumb" }) }), _jsxs("button", { className: "like-btn product-card__like-btn", children: [_jsx("img", { src: heart, alt: "", className: "like-btn__icon icon" }), _jsx("img", { src: heartRed, alt: "", className: "like-btn__icon--liked" })] })] }), _jsx("h3", { className: "product-card__title", children: _jsx("a", { href: "./product-detail.html", children: "Coffee Beans - Espresso Arabica and Robusta Beans" }) }), _jsx("p", { className: "product-card__brand", children: "Lavazza" }), _jsxs("div", { className: "product-card__row", children: [_jsx("span", { className: "product-card__price", children: "$47.00" }), _jsx("img", { src: star, alt: "", className: "product-card__star" }), _jsx("span", { className: "product-card__score", children: "4.3" })] })] }) }));
}
