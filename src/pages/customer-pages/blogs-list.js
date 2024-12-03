import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useViewBlogList } from '@/features/manager-feature/blog-mng/view-blog/use-view-blog-list';
import BlogCard from '@/components/customer-screen/blog/blog-card';
const BlogsList = () => {
    const { data, isLoading, isError } = useViewBlogList();
    if (isLoading) {
        return _jsx("div", { children: "Loading..." });
    }
    if (isError) {
        return _jsx("div", { children: "Error loading blogs." });
    }
    return (_jsx("div", { className: "container page", children: _jsxs("section", { className: "page__container", children: [_jsx("div", { className: "page__row", children: _jsx("h2", { className: "page__heading", children: "Blog" }) }), _jsx("div", { className: "row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2", children: data?.map((blog) => (_jsx(BlogCard, { blog: blog }, blog.blogId))) })] }) }));
};
export default BlogsList;
