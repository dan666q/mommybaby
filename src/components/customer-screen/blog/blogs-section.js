import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useViewBlogList } from '@/features/manager-feature/blog-mng/view-blog/use-view-blog-list';
import { Spin } from 'antd';
import ViewMore from '../view-more';
import BlogCard from './blog-card';
const BlogsSection = () => {
    const { data, isLoading } = useViewBlogList();
    if (isLoading) {
        return _jsx(Spin, { tip: "Loading..." });
    }
    // Sort blogs by creation date (assuming a field like `createdAt` in BlogData)
    const sortedData = data?.sort((a, b) => {
        // Assuming createdAt is a Date object
        return new Date(b.createAt).getTime() - new Date(a.createAt).getTime();
    });
    // Take the latest 4 blogs
    const latestBlogs = sortedData?.slice(0, 4);
    return (_jsx("div", { children: _jsxs("section", { className: "home__container", children: [_jsxs("div", { className: "home__row", children: [_jsx("h2", { className: "home__heading", children: "Read Latest Blogs" }), _jsx(ViewMore, {})] }), _jsx("div", { className: "row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2", children: latestBlogs?.map((blog) => (_jsx(BlogCard, { blog: blog }, blog.blogId))) })] }) }));
};
export default BlogsSection;
