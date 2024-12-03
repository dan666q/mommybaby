import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ProductCard from '@/components/customer-screen/product/product-card';
import FilterForm from '@/components/customer-screen/filter-form';
import { useViewProductList } from '@/features/manager-feature/product-mng/view-product/use-view-product';
export default function ProductsList() {
    const { data } = useViewProductList();
    const [filters, setFilters] = useState({ price: [0, 100000000], brand: '', byAge: [0, 30] });
    const filteredData = data?.filter((product) => {
        const inPriceRange = product.productPrice >= filters.price[0] && product.productPrice <= filters.price[1];
        const matchesBrand = filters.brand === '' || product.productBrand.toLowerCase().includes(filters.brand.toLowerCase());
        const matchesAge = product.byAge >= filters.byAge[0] && product.byAge <= filters.byAge[1];
        return inPriceRange && matchesBrand && matchesAge;
    });
    return (_jsx("div", { className: "container page", children: _jsxs("section", { className: "page__container", children: [_jsxs("div", { className: "page__row", children: [_jsx("h2", { className: "page__heading", children: "Product" }), _jsx(FilterForm, { filters: filters, setFilters: setFilters }), _jsx("div", { className: "mb-10" })] }), _jsx("div", { className: "row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2", children: filteredData?.map((product) => (_jsx(ProductCard, { ...product }, product.productId))) })] }) }));
}
