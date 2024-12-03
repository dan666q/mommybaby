import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import login_thumb from '@/assets/img/auth/login_thumb.png';
import logo from '@/assets/icons/logo3.png';
import message from '@/assets/icons/message.svg';
import lock from '@/assets/icons/lock.svg';
import form_error from '@/assets/icons/form-error.svg';
import google from '@/assets/icons/google.svg';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/router';
import { useAuth } from '@/hooks/use-auth';
import { useState } from 'react';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signInMutation } = useAuth();
    const handleLogin = (e) => {
        e.preventDefault();
        signInMutation.mutate({ username: email, password });
    };
    return (_jsxs("div", { className: "auth", children: [_jsxs("div", { className: "auth__intro d-md-none", children: [_jsx("img", { src: login_thumb, alt: "", className: "auth__intro-img" }), _jsx("p", { className: "auth__intro-text", children: "Nourishing the Bond Between Mom and Baby with Nature's Perfect Nutrients" })] }), _jsx("div", { className: "auth__content", children: _jsxs("div", { className: "auth__content-inner", children: [_jsxs(Link, { to: ROUTE_PATHS.ROOT, className: "logo", children: [_jsx("img", { src: logo, alt: "M&B Mart", className: "logo__img" }), _jsx("h2", { className: "logo__title", children: "M&B Mart" })] }), _jsx("h1", { className: "auth__heading", children: "Hello Again!" }), _jsx("p", { className: "auth__desc", children: "Welcome back to sign in. As a returning customer, you have access to your previously saved all information." }), _jsxs("form", { onSubmit: handleLogin, className: "form auth__form", children: [_jsxs("div", { className: "form__group", children: [_jsxs("div", { className: "form__text-input", children: [_jsx("input", { type: "text", value: email, onChange: (e) => setEmail(e.target.value), className: "form__input", placeholder: "Email", required: true }), ' ', _jsx("img", { src: message, alt: "", className: "form__input-icon" }), _jsx("img", { src: form_error, alt: "", className: "form__input-icon-error" })] }), signInMutation.isError && _jsx("p", { className: "form__error", children: "Username is not in correct format" })] }), _jsxs("div", { className: "form__group", children: [_jsxs("div", { className: "form__text-input", children: [_jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), className: "form__input", placeholder: "Password", required: true, minLength: 6 }), _jsx("img", { src: lock, alt: "", className: "form__input-icon" }), _jsx("img", { src: form_error, alt: "", className: "form__input-icon-error" })] }), signInMutation.isError && _jsx("p", { className: "form__error", children: "Password is not in correct format" })] }), _jsxs("div", { className: "form__group form__group--inline", children: [_jsxs("label", { className: "form__checkbox", children: [_jsx("input", { type: "checkbox", name: "", id: "", className: "form__checkbox-input d-none" }), _jsx("span", { className: "form__checkbox-label", children: "Set as default card" })] }), _jsx(Link, { to: '/forgot', className: "auth__link form__pull-right", children: "Forgot Password" })] }), _jsxs("div", { className: "form__group auth__btn-group", children: [_jsx("button", { type: "submit", className: "btn btn--primary auth__btn form__submit-btn", disabled: signInMutation.isPending, children: signInMutation.isPending ? 'Signing in...' : 'Sign in' }), ' ', _jsxs("button", { className: "btn btn--outline auth__btn btn--no-margin", children: [_jsx("img", { src: google, alt: "", className: "btn__icon icon" }), "Sign in with Google"] })] })] }), _jsxs("p", { className: "auth__text", children: ["Don't have an account yet?", _jsx(Link, { to: '/signup', className: "auth__link auth__text-link", children: "Sign Up" })] })] }) })] }));
}
