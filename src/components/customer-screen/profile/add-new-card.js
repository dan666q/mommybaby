import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import plus from '@/assets/icons/plus.svg';
export default function AddNewCard() {
    return (_jsx("div", { children: _jsx("div", { className: "col", children: _jsxs("a", { className: "new-card", href: "./add-new-card.html", children: [_jsx("img", { src: plus, alt: "", className: "new-card__icon icon" }), _jsx("p", { className: "new-card__text", children: "Add New Card" })] }) }) }));
}
