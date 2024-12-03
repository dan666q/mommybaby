import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function AccountInfoItem({ icon }) {
    return (_jsx("div", { className: "col", children: _jsx("a", { href: "./edit-personal-info.html", children: _jsxs("article", { className: "account-info", children: [_jsx("div", { className: "account-info__icon", children: _jsx("img", { src: icon, alt: "", className: "icon" }) }), _jsxs("div", { children: [_jsx("h3", { className: "account-info__title", children: "Email Address" }), _jsx("p", { className: "account-info__desc", children: "tarek97.ta@gmail.com" })] })] }) }) }));
}
