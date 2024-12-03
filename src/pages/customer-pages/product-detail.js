import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import search from '@/assets/icons/search.svg';
import arrowRight from '@/assets/icons/arrow-right.svg';
import avatar1 from '@/assets/img/avatar/avatar-1.png';
import { Row, Col, Typography, Rate, InputNumber, Button, Tag, Descriptions, List, Avatar, Card, Space, Spin, } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useViewDetailProduct } from '@/hooks/customer-hook/product/use-view-detail-product';
import { useParams } from 'react-router-dom';
import { useAddCartItem } from '@/hooks/customer-hook/cart/use-add-cart.item';
import { useViewProductList } from '@/features/manager-feature/product-mng/view-product/use-view-product';
import ProductCard from '@/components/customer-screen/product/product-card';
const { Title, Paragraph } = Typography;
export default function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
    const [currentTab, setCurrentTab] = useState('review');
    const [newReview, setNewReview] = useState({ rating: 0, content: '' });
    const { productId } = useParams();
    const AddToCartMutation = useAddCartItem();
    console.log(newReview);
    const { data: product } = useViewDetailProduct(productId);
    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    };
    function handleAddToCart(productId, quantity) {
        AddToCartMutation.mutate({ productId, quantity });
    }
    const handleSubmitReview = (values) => {
        console.log('New review: ', values);
        setNewReview({ rating: 0, content: '' });
    };
    const { data, isLoading } = useViewProductList();
    if (isLoading) {
        return _jsx(Spin, { tip: "Loading..." });
    }
    // Assuming product?.productBrand exists and is the brand of the current product
    const similarProducts = data?.filter((item) => item.productBrand === product?.productBrand).slice(0, 3);
    const reviews = [
        {
            author: 'Jakir Hussen',
            avatar: avatar1,
            content: 'Great product, I love this Coffee Beans',
            rating: 3.5,
        },
        {
            author: 'Alice Johnson',
            avatar: 'https://example.com/avatar2.png',
            content: 'Excellent quality, highly recommended!',
            rating: 5,
        },
        {
            author: 'Bob Smith',
            avatar: 'https://example.com/avatar3.png',
            content: 'Good coffee, but a bit pricey.',
            rating: 4,
        },
    ];
    const formatNumber = (number) => {
        return new Intl.NumberFormat('vi-VN').format(number);
    };
    return (_jsx("div", { children: _jsx("main", { className: "product-page", children: _jsxs("div", { className: "container", children: [_jsx("div", { className: "product-container", children: _jsxs("div", { className: "search-bar d-none d-md-flex", children: [_jsx("input", { type: "text", name: "", id: "", placeholder: "Search for item", className: "search-bar__input" }), _jsx("button", { className: "search-bar__submit", children: _jsx("img", { src: search, alt: "", className: "search-bar__icon icon" }) })] }) }), _jsx("div", { className: "product-container", children: _jsxs("ul", { className: "breadcrumbs", children: [_jsx("li", { children: _jsxs("a", { href: "#!", className: "breadcrumbs__link", children: ["Departments", _jsx("img", { src: arrowRight, alt: "" })] }) }), _jsx("li", { children: _jsxs("a", { href: "#!", className: "breadcrumbs__link", children: ["Milk", _jsx("img", { src: arrowRight, alt: "" })] }) }), _jsx("li", { children: _jsxs("a", { href: "#!", className: "breadcrumbs__link", children: ["Milk for baby", _jsx("img", { src: arrowRight, alt: "" })] }) }), _jsx("li", { children: _jsx("a", { href: "#!", className: "breadcrumbs__link breadcrumbs__link--current", children: "1-3 years old" }) })] }) }), _jsx("div", { className: "container mx-auto px-4 py-8", children: _jsxs(Row, { gutter: [32, 32], children: [_jsx(Col, { xs: 24, md: 12, className: "flex justify-center", children: _jsx("img", { src: product?.productImg, alt: product?.productName, className: "h-[600px] w-10/12 object-cover rounded-lg shadow-lg" }) }), _jsxs(Col, { xs: 24, md: 12, children: [_jsx(Title, { level: 2, children: product?.productName }), _jsx(Title, { level: 4, type: "secondary", children: product?.productBrand }), _jsxs("div", { className: "my-4", children: [_jsx(Rate, { defaultValue: product?.rate, disabled: true }), _jsx("span", { className: "ml-2 text-gray-500", children: "(1100 reviews)" })] }), _jsxs(Title, { level: 3, className: "text-blue-600", children: [formatNumber(product?.productPrice.toFixed(2)), " VND"] }), _jsx("hr", {}), _jsx(Paragraph, { className: "mt-4", children: product?.productDescription }), _jsxs(Descriptions, { layout: "vertical", column: 2, className: "flex flex-col mt-6", children: [product?.isPreOrder ? (_jsx(Descriptions.Item, { label: "PreOrder Quantity", children: _jsxs(Tag, { color: "green", children: ["Limited at: ", product?.preOrderAmount] }) })) : (_jsx(Descriptions.Item, { label: "Available Quantity", children: _jsxs(Tag, { color: "green", children: [product?.quantity, " in stock"] }) })), _jsx(Descriptions.Item, { label: "Recommended Age", children: _jsxs(Tag, { color: "blue", children: [product?.byAge, "-", (product?.byAge || 0) + 2, " years old"] }) })] }), _jsxs("div", { className: "mt-6 flex items-center", children: [product?.isPreOrder ? (_jsx(InputNumber, { min: 1, max: product?.preOrderAmount ?? 0, disabled: true, defaultValue: 1, onChange: (value) => setQuantity(value), className: "mr-4 w-1/4", size: "large" })) : (_jsx(InputNumber, { min: 1, max: product?.quantity, defaultValue: 1, onChange: (value) => setQuantity(value), className: "mr-4 w-1/4", size: "large" })), _jsx(Button, { type: "primary", icon: _jsx(ShoppingCartOutlined, {}), size: "large", className: "w-full", onClick: () => handleAddToCart(productId, quantity), children: "Add to Cart" })] }), _jsx("hr", { className: "mt-10" }), _jsx("div", { children: _jsxs(Descriptions, { column: 1, bordered: true, className: "mt-10", children: [_jsx(Descriptions.Item, { label: "Payment methods", children: "Ship COD, check goods before paying" }), _jsx(Descriptions.Item, { label: "Transport fee", children: "FREE" }), _jsx(Descriptions.Item, { label: "Commit", children: "Guaranteed genuine" }), _jsx(Descriptions.Item, { label: "Delivery time", children: "2 - 4 days" })] }) })] })] }) }), _jsx("div", { className: "product-container", children: _jsxs("div", { className: "prod-tab js-tabs", children: [_jsxs("ul", { className: "prod-tab__list", children: [_jsx("li", { className: `prod-tab__item ${currentTab === 'review' ? 'prod-tab__item--current' : ''}`, onClick: () => handleTabChange('review'), children: "Review (1100)" }), _jsx("li", { className: `prod-tab__item ${currentTab === 'similar' ? 'prod-tab__item--current' : ''}`, onClick: () => handleTabChange('similar'), children: "Similar" })] }), _jsxs("div", { className: "prod-tab__contents", children: [_jsx("div", { className: `prod-tab__content ${currentTab === 'review' ? 'prod-tab__content--current' : ''}`, children: _jsxs("div", { className: "prod-content", children: [_jsx("h2", { className: "prod-content__heading", children: "What our customers are saying" }), _jsx("div", { className: "row", children: _jsx("div", { className: "container mx-auto px-4 py-8", children: _jsx(List, { itemLayout: "vertical", size: "large", dataSource: reviews, renderItem: (item) => (_jsx(List.Item, { children: _jsxs(Card, { children: [_jsxs(Space, { align: "start", children: [_jsx(Avatar, { src: item.avatar, alt: item.author }), _jsxs(Space, { direction: "vertical", size: 0, children: [_jsx("h3", { children: item.author }), _jsx(Rate, { disabled: true, defaultValue: item.rating })] })] }), _jsx(Paragraph, { style: { marginTop: 16 }, children: item.content })] }) }, item.author)) }) }) })] }) }), _jsx("div", { className: `prod-tab__content ${currentTab === 'similar' ? 'prod-tab__content--current' : ''}`, children: _jsxs("div", { className: "prod-content", children: [_jsx("h2", { className: "prod-content__heading", children: "Similar items you might like" }), _jsx("div", { className: "row row-cols-6 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-2", children: similarProducts?.map((product) => (_jsx(ProductCard, { ...product }, product.productId))) })] }) })] })] }) })] }) }) }));
}
