import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import location from '@/assets/icons/location.svg';
import message from '@/assets/icons/message.svg';
import gift2 from '@/assets/icons/gift-2.svg';
import calling from '@/assets/icons/calling.svg';
import AccountInfoItem from './account-info-item';
export default function AccountInfoSection() {
    return (_jsxs("div", { className: "col-12", children: [_jsx("h2", { className: "cart-info__heading", children: "Account info" }), _jsx("p", { className: "cart-info__desc profile__desc", children: "Addresses, contact information and password" }), _jsxs("div", { className: "row gy-md-2 row-cols-2 row-cols-lg-1", children: [_jsx(AccountInfoItem, { icon: message }), _jsx(AccountInfoItem, { icon: calling }), _jsx(AccountInfoItem, { icon: location }), _jsx(AccountInfoItem, { icon: gift2 })] })] }));
}
