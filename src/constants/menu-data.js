import { jsx as _jsx } from "react/jsx-runtime";
import Popup from '@/components/manager-screen/popup';
import DisableAccount from '@/features/manager-feature/account-mng/delete-account/disable-account';
import DeleteBrand from '@/features/manager-feature/brand-mng/delete-brand/delete-brand';
import DeleteBlog from '@/features/manager-feature/blog-mng/delete-blog/delete-blog';
import DeletePromotion from '@/features/manager-feature/promotion-mng/delete-promotion/delete-promotion';
import DeleteProduct from '@/features/manager-feature/product-mng/delete-product/delete-product';
import { GiftOutlined, UserOutlined, CodepenOutlined, BarChartOutlined, ReadOutlined, CloseCircleOutlined, EditOutlined, BoldOutlined, ShoppingCartOutlined, } from '@ant-design/icons';
import { ROUTE_PATHS_MANAGER } from '@/router';
import { Link } from 'react-router-dom';
import { POPUP_TITLE } from '.';
// TODO: eslint-disable
// eslint-disable-next-line react-refresh/only-export-components
export const NavigatorItems = [
    {
        label: 'Dashboard',
        key: '/dashboard' || ROUTE_PATHS_MANAGER.DASHBOARD,
        icon: _jsx(BarChartOutlined, {}),
    },
    {
        label: 'Accounts',
        key: '/accounts' || ROUTE_PATHS_MANAGER.M_ACCOUNT,
        icon: _jsx(UserOutlined, {}),
    },
    {
        label: 'Brands',
        key: '/brands' || ROUTE_PATHS_MANAGER.M_BRAND,
        icon: _jsx(BoldOutlined, {}),
    },
    {
        label: 'Products',
        key: '/products' || ROUTE_PATHS_MANAGER.M_PRODUCT,
        icon: _jsx(CodepenOutlined, {}),
    },
    {
        label: 'Orders',
        key: '/orders' || ROUTE_PATHS_MANAGER.M_ORDER,
        icon: _jsx(ShoppingCartOutlined, {}),
    },
    {
        label: 'Promotion',
        key: '/promotion' || ROUTE_PATHS_MANAGER.M_PROMOTION,
        icon: _jsx(GiftOutlined, {}),
    },
    {
        label: 'Blogs',
        key: '/blogs' || ROUTE_PATHS_MANAGER.M_BLOG,
        icon: _jsx(ReadOutlined, {}),
    },
];
// eslint-disable-next-line react-refresh/only-export-components
export const NavigatorItemsStaff = [
    {
        label: 'Orders',
        key: '/orders' || ROUTE_PATHS_MANAGER.M_ORDER,
        icon: _jsx(ShoppingCartOutlined, {}),
    },
    {
        label: 'Blogs',
        key: '/blogs' || ROUTE_PATHS_MANAGER.M_BLOG,
        icon: _jsx(ReadOutlined, {}),
    },
];
export const ViewProductDropdown = (productName, productId, isDisabled) => [
    {
        label: _jsx(Link, { to: productId, children: "Edit Product" }),
        key: 'edit',
        icon: _jsx(EditOutlined, {}),
    },
    {
        label: (_jsx(Popup, { width: 430, type: "confirm", title: POPUP_TITLE.DELETE_PRODUCT, content: _jsx(DeleteProduct, { productName: productName, productId: productId }), children: isDisabled ? 'Enable Product' : 'Disable Product' })),
        key: 'delete',
        icon: _jsx(CloseCircleOutlined, {}),
    },
];
export const ViewBrandDropdown = (brandName, brandId) => [
    {
        label: _jsx(Link, { to: `${ROUTE_PATHS_MANAGER.M_BRAND}/${brandId}`, children: "Edit Brand" }),
        key: 'edit',
        icon: _jsx(EditOutlined, {}),
    },
    {
        label: (_jsx(Popup, { width: 430, type: "confirm", title: POPUP_TITLE.DELETE_BRAND, content: _jsx(DeleteBrand, { brandName: brandName, brandId: brandId }), children: "Delete Brand" })),
        key: 'delete',
        icon: _jsx(CloseCircleOutlined, {}),
    },
];
export const ViewOrderDropdown = (orderId) => [
    {
        label: _jsx(Link, { to: orderId, children: "View Order" }),
        key: 'edit',
        icon: _jsx(EditOutlined, {}),
    },
];
export const ViewAccountDropdown = (fullName, id, isDisabled) => [
    {
        label: _jsx(Link, { to: `${ROUTE_PATHS_MANAGER.M_ACCOUNT}/${id}`, children: "Edit Account" }),
        key: 'edit',
        icon: _jsx(EditOutlined, {}),
    },
    {
        label: (_jsx(Popup, { width: 430, type: "confirm", title: POPUP_TITLE.DISABLE_ACCOUNT, content: _jsx(DisableAccount, { fullName: fullName, id: id }), children: isDisabled ? 'Enable Account' : 'Disable Account' })),
        key: 'delete',
        icon: _jsx(CloseCircleOutlined, {}),
    },
];
export const ViewBlogDropdown = (title, blogId) => [
    {
        label: _jsx(Link, { to: `${ROUTE_PATHS_MANAGER.M_BLOG}/${blogId}`, children: "Edit Blog" }),
        key: 'edit',
        icon: _jsx(EditOutlined, {}),
    },
    {
        label: (_jsx(Popup, { width: 430, type: "confirm", title: POPUP_TITLE.DELETE_BLOG, content: _jsx(DeleteBlog, { title: title, blogId: blogId }), children: "Delete Blog" })),
        key: 'delete',
        icon: _jsx(CloseCircleOutlined, {}),
    },
];
export const ViewPromotionDropdown = (promotionName, promotionId) => [
    {
        label: _jsx(Link, { to: `${ROUTE_PATHS_MANAGER.M_PROMOTION}/${promotionId}`, children: "Edit Promotion" }),
        key: 'edit',
        icon: _jsx(EditOutlined, {}),
    },
    {
        label: (_jsx(Popup, { width: 430, type: "confirm", title: POPUP_TITLE.DELETE_PROMOTION, content: _jsx(DeletePromotion, { promotionId: promotionId, promotionName: promotionName }), children: "Delete Promotion" })),
        key: 'delete',
        icon: _jsx(CloseCircleOutlined, {}),
    },
];
