import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Avatar, Typography, Button, List, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useViewBlogDetail } from '@/hooks/customer-hook/blog/use-blog-detail';
import { useViewBlogList } from '@/features/manager-feature/blog-mng/view-blog/use-view-blog-list';
import { useAddVote } from '@/hooks/customer-hook/blog/use-add-vote-blog';
import { useAuth } from '@/hooks/use-auth';
const { Title, Paragraph } = Typography;
const BlogDetails = () => {
    const { blogId } = useParams();
    const id = parseInt(blogId);
    const { data: blog, isLoading, error } = useViewBlogDetail(id);
    const { data: blogListData, isLoading: loadingBlogList, error: blogListError } = useViewBlogList();
    const [suggestions, setSuggestions] = useState([]);
    const { mutate: addVote } = useAddVote();
    const { user } = useAuth();
    useEffect(() => {
        if (blogListData) {
            const shuffledBlogs = blogListData.sort(() => Math.random() - 0.5);
            setSuggestions(shuffledBlogs.slice(0, 6));
        }
    }, [blogListData]);
    if (isLoading || loadingBlogList)
        return _jsx("p", { children: "Loading..." });
    if (error || blogListError)
        return _jsx("p", { children: "Error loading blog details" });
    const tags = typeof blog?.tags === 'string' ? blog.tags.split(',') : blog?.tags || [];
    const formatContent = (content) => {
        const sections = content.split('\\n\\n');
        return sections.map((section, index) => {
            if (section.startsWith('## ')) {
                return (_jsx(Title, { level: 2, className: "mt-8 mb-4", children: section.slice(2) }, index));
            }
            else if (section.startsWith('### ')) {
                return (_jsx(Title, { level: 3, className: "mt-6 mb-3", children: section.slice(3) }, index));
            }
            else if (section.startsWith('- ')) {
                const items = section.split('\\n');
                return (_jsx("ul", { className: "list-disc pl-5 mb-4", children: items.map((item, i) => (_jsx("li", { className: "mb-2", children: item.slice(2) }, i))) }, index));
            }
            else if (section.startsWith('> ')) {
                return (_jsx("blockquote", { className: "border-l-4 border-gray-300 pl-4 italic my-4", children: section.slice(2) }, index));
            }
            else {
                return (_jsx(Paragraph, { className: "mb-4", children: section }, index));
            }
        });
    };
    const handleVote = (voteType) => {
        if (!blog || !user?.data.id)
            return;
        const vote = {
            voteType,
            blogId: blog?.blogId,
            userId: user?.data.id,
        };
        console.log('Vote data:', vote); // Log the vote data when vote button is clicked
        addVote(vote);
    };
    return (_jsxs("div", { className: "container mx-auto my-10 p-4 grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "col-span-2", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx(Title, { level: 2, className: "mb-2", children: blog?.title }), _jsx("img", { src: blog?.blogImg, alt: "blog", className: "mx-auto mb-4 w-full md:w-3/4" }), _jsx(Typography, { className: "", children: _jsx(Paragraph, { className: "mt-8", children: formatContent(blog?.content || '') }) }), _jsxs("div", { className: "flex items-center justify-center mb-4 mt-8", children: [_jsx(Avatar, { icon: _jsx(UserOutlined, {}) }), _jsx("span", { className: "ml-2", children: `By ${blog?.userId} on ${new Date(blog?.createAt).toLocaleDateString()}` })] }), _jsx("div", { className: "mt-2", children: tags.map((tag, index) => (_jsx(Tag, { className: "mb-2", children: tag }, index))) }), _jsxs("div", { className: "mt-4 flex justify-between items-center", children: [_jsx("span", { children: `Created at: ${new Date(blog?.createAt).toLocaleDateString()}` }), _jsx("span", { children: `Updated at: ${new Date(blog?.updateAt).toLocaleDateString()}` })] }), _jsxs("div", { className: "mt-4 flex justify-between items-center", children: [_jsx("span", { children: `Useful Votes: ${blog?.usefulVote}` }), _jsx("span", { children: `Not Useful Votes: ${blog?.notUsefulVote}` })] }), _jsxs("div", { className: "mt-4 flex justify-between items-center", children: [_jsx(Button, { type: "primary", onClick: () => handleVote(true), children: "Useful" }), _jsx(Button, { danger: true, onClick: () => handleVote(false), children: "Not Useful" })] })] }), _jsx("div", { className: "mt-4 flex justify-center space-x-4", children: _jsx(Button, { type: "link", children: "Share" }) })] }), _jsxs("div", { className: "col-span-1", children: [_jsx(Title, { level: 4, children: "Suggested" }), _jsx(List, { itemLayout: "vertical", dataSource: suggestions, renderItem: (item) => (_jsx(List.Item, { children: _jsx(Link, { to: `/blog/${item.blogId}`, children: item.title }) })) })] })] }));
};
export default BlogDetails;
