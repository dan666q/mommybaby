import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Carousel, Spin } from 'antd';
import ViewMore from '../view-more';
import { useViewBrandList } from '@/features/manager-feature/brand-mng/view-brand/use-view-brand-list';
import BrandCard from './brand-card';
export default function BrandSection() {
    const { data, isLoading } = useViewBrandList();
    if (isLoading) {
        return _jsx(Spin, { tip: "Loading..." });
    }
    return (_jsx("div", { children: _jsxs("section", { className: "home__container", children: [_jsxs("div", { className: "home__row", children: [_jsx("h2", { className: "home__heading", children: "Browse Brands" }), _jsx(ViewMore, {})] }), _jsx("div", { className: "home__cate", children: _jsx(Carousel, { dots: true, autoplay: true, slidesToShow: 3, slidesToScroll: 3, className: "mx-auto", children: data?.map((brand) => (_jsx("div", { className: "px-2", children: _jsx(BrandCard, { brandName: brand.brandName, brandImg: brand.brandImg, madeIn: brand.madeIn, description: brand.description }) }, brand.brandId))) }) })] }) }));
}
