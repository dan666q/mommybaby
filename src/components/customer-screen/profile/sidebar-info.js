import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import profile from '@/assets/icons/profile.svg';
import message2 from '@/assets/icons/message-2.svg';
import shield from '@/assets/icons/shield.svg';
import { ROUTE_PATHS_CUSTOMER } from '@/router';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useAuth } from '@/hooks/use-auth';
export default function SidebarInfo() {
    const { user, loadingInitial } = useAuth();
    if (loadingInitial)
        return _jsx("p", { children: "Loading..." });
    const formattedDateOfBirth = format(new Date(user?.data.dateOfBirth), 'dd MMM yyyy');
    return (_jsx("div", { className: "col-3 col-xl-4 col-lg-5 col-md-12", children: _jsxs("aside", { className: "profile__sidebar", children: [_jsxs("div", { className: "profile-user", children: [_jsx("img", { src: user?.data.image, alt: "", className: "profile-user__avatar" }), _jsx("h1", { className: "profile-user__name", children: user?.data.fullName }), _jsx("p", { className: "profile-user__desc", children: formattedDateOfBirth })] }), _jsxs("div", { className: "profile-menu", children: [_jsx("h3", { className: "profile-menu__title", children: "Manage Account" }), _jsxs("ul", { className: "profile-menu__list", children: [_jsx("li", { children: _jsxs(Link, { to: ROUTE_PATHS_CUSTOMER.PROFILE, className: "profile-menu__link", children: [_jsx("span", { className: "profile-menu__icon", children: _jsx("img", { src: profile, alt: "", className: "icon" }) }), "Personal info"] }) }), _jsx("li", { children: _jsxs(Link, { to: ROUTE_PATHS_CUSTOMER.EDIT_PROFILE, className: "profile-menu__link", children: [_jsx("span", { className: "profile-menu__icon", children: _jsx("img", { src: message2, alt: "", className: "icon" }) }), "Edit Personal info"] }) })] })] }), _jsxs("div", { className: "profile-menu", children: [_jsx("h3", { className: "profile-menu__title", children: "My items" }), _jsx("ul", { className: "profile-menu__list", children: _jsx("li", { children: _jsxs(Link, { to: ROUTE_PATHS_CUSTOMER.MY_ORDER, className: "profile-menu__link", children: [_jsx("span", { className: "profile-menu__icon", children: _jsx("img", { src: profile, alt: "", className: "icon" }) }), "My Orders"] }) }) })] }), _jsxs("div", { className: "profile-menu", children: [_jsx("h3", { className: "profile-menu__title", children: "Subscriptions & plans" }), _jsx("ul", { className: "profile-menu__list", children: _jsx("li", { children: _jsxs("a", { href: "#!", className: "profile-menu__link", children: [_jsx("span", { className: "profile-menu__icon", children: _jsx("img", { src: shield, alt: "", className: "icon" }) }), "Protection plans"] }) }) })] })] }) }));
}
