import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/router';
export default function BlogCard({ blog }) {
    return (_jsx("div", { children: _jsxs("article", { className: "news-item", children: [_jsx("figure", { className: "news-item__img-wrap", children: _jsx(Link, { to: `${ROUTE_PATHS.BLOG}/${blog?.blogId}`, children: _jsx("img", { src: blog?.blogImg, alt: blog?.title, className: "news-item__thumb" }) }) }), _jsxs("section", { className: "news-item__body", children: [_jsx("h3", { children: _jsx(Link, { to: `${ROUTE_PATHS.BLOG}/${blog?.blogId}`, className: "news-item__heading", children: blog?.title }) }), _jsx(Link, { to: `${ROUTE_PATHS.BLOG}/${blog?.blogId}`, className: "news-item__more", children: "Learn More" })] })] }) }));
}
