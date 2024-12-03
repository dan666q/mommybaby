import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BlogsSection from '@/components/customer-screen/blog/blogs-section';
import BrandSection from '@/components/customer-screen/brands-section/brand-section';
import ProductSection from '@/components/customer-screen/product/product-section';
import SlideShow from '@/components/customer-screen/slideshow';
export default function HomePage() {
    return (_jsx("div", { children: _jsxs("div", { className: "container home", children: [_jsx(SlideShow, {}), _jsx(BrandSection, {}), _jsx(ProductSection, {}), _jsx(BlogsSection, {})] }) }));
}
