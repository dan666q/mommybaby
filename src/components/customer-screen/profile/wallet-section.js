import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AddNewCard from './add-new-card';
import AtmCard from './atm-card';
export default function WalletSection() {
    return (_jsxs("div", { className: "col-12", children: [_jsx("h2", { className: "cart-info__heading", children: "My Wallet" }), _jsx("p", { className: "cart-info__desc profile__desc", children: "Payment methods" }), _jsxs("div", { className: "row gy-md-2 row-cols-3 row-cols-xl-2 row-cols-lg-1", children: [_jsx(AtmCard, {}), _jsx(AtmCard, {}), _jsx(AddNewCard, {})] })] }));
}
