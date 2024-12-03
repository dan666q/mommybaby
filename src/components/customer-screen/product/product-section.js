import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProductCard from './product-card';
import ViewMore from '../view-more';
import { useViewProductList } from '@/features/manager-feature/product-mng/view-product/use-view-product';
import { Spin } from 'antd';
const ProductSection = () => {
    const { data, isLoading, error } = useViewProductList();
    if (isLoading) {
        return _jsx(Spin, { tip: "Loading..." });
    }
    if (error) {
        return _jsxs("div", { children: ["Error loading products: ", error.message] });
    }
    // Check the data structure and types
    console.log('Fetched products:', data);
    // Ensure rate is a number
    const filteredProducts = data
        .map((product) => ({
        ...product,
        rate: typeof product.rate === 'string' ? parseFloat(product.rate) : product.rate,
    }))
        .sort((a, b) => b.rate - a.rate) // Sort by rate descending
        .slice(0, 4); // Take the top 4 products
    return (_jsx("div", { children: _jsxs("section", { className: "home__container", children: [_jsxs("div", { className: "home__row", children: [_jsx("h2", { className: "home__heading", children: "Best Sellers" }), _jsx(ViewMore, {})] }), _jsx("div", { className: "row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2", children: filteredProducts.map((product) => (_jsx(ProductCard, { ...product }, product.productId))) })] }) }));
};
export default ProductSection;
