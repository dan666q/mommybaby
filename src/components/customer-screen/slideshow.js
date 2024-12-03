import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Carousel } from 'antd';
import slideShow1 from '@/assets/img/slideshow/31424.jpg'; // Ensure paths are correct
import slideShow2 from '@/assets/img/slideshow/srcset.jpeg'; // Example additional image
import 'src/scss/components/_slideshow.scss'; // Import the SCSS file
import { useViewPromotionList } from '@/features/manager-feature/promotion-mng/view-promotion/use-view-promotion-list';
const images = [slideShow1, slideShow2]; // Add your image sources here
const SlideShow = () => {
    const carouselRef = React.useRef(null);
    const { data: promotion } = useViewPromotionList();
    console.log(promotion);
    return (_jsx("div", { className: "home__container relative", children: _jsxs("div", { className: "slideshow", children: [_jsx(Carousel, { autoplay: true, ref: carouselRef, className: "slideshow__inner", children: promotion?.map((promote, index) => (_jsx("div", { className: "slideshow__item", children: _jsxs("picture", { children: [_jsx("source", { media: "(max-width: 767.98px)", srcSet: promote?.promotionImg }), _jsx("img", { src: promote?.promotionImg, alt: `Slide ${index}`, className: "slideshow__img" })] }) }, promote?.promotionId))) }), _jsx("div", { className: "slideshow__page", children: images.map((_, index) => (_jsx("div", {}, index))) })] }) }));
};
export default SlideShow;
