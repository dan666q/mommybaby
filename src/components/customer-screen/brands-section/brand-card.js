import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import categoryImg from '@/assets/img/category-item/brand1.jpg'; // Import default image
const BrandCard = ({ brandName, brandImg, madeIn, description }) => {
    return (_jsx("div", { className: "col", children: _jsx("a", { href: "#", children: _jsxs("article", { className: "bg-white rounded-lg overflow-hidden h-full", children: [_jsx("img", { src: brandImg || categoryImg, alt: brandName, className: "w-full h-48 object-cover" }), _jsxs("section", { className: "p-4 h-full cate__item_info", children: [_jsx("h3", { className: "text-3xl font-bold mb-2", children: brandName }), _jsx("p", { className: "text-2xl text-gray-700 mb-2", children: description || 'No description available' }), madeIn && _jsxs("p", { className: " text-gray-600", children: ["Made in: ", madeIn] })] })] }) }) }));
};
export default BrandCard;
