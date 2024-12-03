import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Slider, Input, Button, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
export default function FilterForm({ filters, setFilters }) {
    const [priceRange, setPriceRange] = useState(filters.price);
    const [brand, setBrand] = useState(filters.brand);
    const [ageRange, setAgeRange] = useState(filters.byAge);
    const handlePriceChange = (value) => {
        setPriceRange([value[0], value[1]]);
    };
    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    };
    const handleAgeChange = (value) => {
        setAgeRange([value[0], value[1]]);
    };
    const applyFilters = () => {
        setFilters({ price: priceRange, brand, byAge: ageRange });
    };
    return (_jsx("div", { children: _jsx("div", { className: "filter-wrap", children: _jsxs("div", { className: "filter", id: "home-filter", children: [_jsx("h3", { className: "filter__heading", children: "Filter" }), _jsxs("form", { className: "filter__form", children: [_jsxs("div", { className: "filter__row filter__content", style: { display: 'flex', flexWrap: 'wrap', position: 'relative' }, children: [_jsxs("div", { className: "filter__col", style: { flex: '0 0 33.3333%', padding: '10px', position: 'relative' }, children: [_jsx("label", { className: "filter__form-label", children: "Price" }), _jsx("div", { className: "filter__form-group", children: _jsx(Slider, { range: true, defaultValue: priceRange, onChange: handlePriceChange }) }), _jsxs("div", { className: "filter__form-group filter__form-group--inline", children: [_jsxs("div", { children: [_jsx("label", { className: "filter__form-label filter__form-label--small", children: "Minimum" }), _jsx("div", { className: "filter__form-text-input--small", children: _jsx(Input, { prefix: "VND", value: priceRange[0], readOnly: true }) })] }), _jsxs("div", { children: [_jsx("label", { className: "filter__form-label filter__form-label--small", children: "Maximum" }), _jsx("div", { className: "filter__form-text-input--small", children: _jsx(Input, { prefix: "VND", value: priceRange[1], readOnly: true }) })] })] })] }), _jsxs("div", { className: "filter__col", style: { flex: '0 0 33.3333%', padding: '10px', position: 'relative' }, children: [_jsx("div", { className: "filter__vertical-line", style: {
                                                    position: 'absolute',
                                                    left: '0',
                                                    top: '0',
                                                    bottom: '0',
                                                    width: '1px',
                                                    backgroundColor: '#e0e0e0',
                                                } }), _jsx("label", { className: "filter__form-label", children: "Brand" }), _jsx("div", { className: "filter__form-group", children: _jsx(Input, { placeholder: "Search brand name", prefix: _jsx(SearchOutlined, {}), value: brand, onChange: handleBrandChange }) }), _jsx("div", { className: "filter__form-group", children: _jsx("div", { className: "filter__form-tags", children: brand && _jsx(Tag, { children: brand }) }) })] }), _jsxs("div", { className: "filter__col", style: { flex: '0 0 33.3333%', padding: '10px', position: 'relative' }, children: [_jsx("div", { className: "filter__vertical-line", style: {
                                                    position: 'absolute',
                                                    left: '0',
                                                    top: '0',
                                                    bottom: '0',
                                                    width: '1px',
                                                    backgroundColor: '#e0e0e0',
                                                } }), _jsx("label", { className: "filter__form-label", children: "By Age" }), _jsx("div", { className: "filter__form-group", children: _jsx(Slider, { range: true, min: 1, max: 20, defaultValue: ageRange, onChange: handleAgeChange }) }), _jsxs("div", { className: "filter__form-group filter__form-group--inline", children: [_jsxs("div", { children: [_jsx("label", { className: "filter__form-label filter__form-label--small", children: "Minimum Age" }), _jsx("div", { className: "filter__form-text-input--small", children: _jsx(Input, { value: ageRange[0], readOnly: true }) })] }), _jsxs("div", { children: [_jsx("label", { className: "filter__form-label filter__form-label--small", children: "Maximum Age" }), _jsx("div", { className: "filter__form-text-input--small", children: _jsx(Input, { value: ageRange[1], readOnly: true }) })] })] })] })] }), _jsx("div", { className: "filter__row filter__footer", children: _jsx(Button, { type: "primary", className: "btn btn--primary filter__submit js-toggle", "toggle-target": "#home-filter", onClick: applyFilters, children: "Show Result" }) })] })] }) }) }));
}
