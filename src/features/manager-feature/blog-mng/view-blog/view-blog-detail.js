import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import moment from 'moment';
import { useState } from 'react';
import { Typography, Button, Modal, Form, Input, Tag, Divider } from 'antd';
import { EditOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useViewBlogDetail } from './use-view-blog-detail';
import { useEditBlog } from '../edit-blog/use-edit-blog';
const { Title, Paragraph } = Typography;
export default function ViewBlogDetail() {
    const userId = localStorage.getItem('userId');
    const { blogId } = useParams();
    const { data: blog } = useViewBlogDetail(Number(blogId));
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const useEditBlogMutation = useEditBlog(Number(userId), Number(blogId));
    const showModal = () => {
        form.setFieldsValue(blog);
        setIsModalVisible(true);
    };
    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
            console.log('Updated blog:', values);
            useEditBlogMutation.mutate(values);
            setIsModalVisible(false);
        })
            .catch((info) => {
            console.log('Validate Failed:', info);
        });
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
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
    return (_jsxs("div", { className: "w-10/12 mx-auto px-4 py-8", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx(Title, { level: 1, children: blog?.title }), _jsx(Button, { type: "primary", icon: _jsx(EditOutlined, {}), onClick: showModal, size: "large", children: "Edit Article" })] }), _jsx("div", { className: "mb-6", children: _jsx("img", { src: blog?.blogImg, alt: "Blog cover", className: "w-full h-96 object-cover rounded-lg shadow-lg" }) }), _jsxs("div", { className: "bg-white p-8 rounded-lg shadow-lg", children: [_jsxs("div", { className: "flex justify-between items-center mb-4 text-gray-500", children: [_jsxs("span", { children: ["Published: ", moment(blog?.createAt).format('MMMM Do YYYY, h:mm a')] }), _jsxs("span", { children: ["Last updated: ", moment(blog?.updateAt).format('MMMM Do YYYY, h:mm a')] })] }), _jsx(Divider, {}), _jsx("article", { className: "prose lg:prose-xl", children: formatContent(blog?.content || '') }), _jsx(Divider, {}), _jsxs("div", { className: "mb-6", children: [_jsx(Title, { level: 4, className: "mb-2", children: "Tags" }), _jsx("div", { children: blog?.tags.split(',').map((tag) => (_jsx(Tag, { color: "blue", className: "mr-2 mb-2 text-base py-1 px-3", children: tag.trim() }, tag))) })] }), _jsx("div", { className: "flex justify-between items-center", children: _jsxs("div", { className: "flex items-center", children: [_jsxs(Button, { type: "text", icon: _jsx(LikeOutlined, {}), size: "large", children: [blog?.usefulVote, " Useful"] }), _jsxs(Button, { type: "text", icon: _jsx(DislikeOutlined, {}), size: "large", className: "ml-4", children: [blog?.notUsefulVote, " Not Useful"] })] }) })] }), _jsx(Modal, { title: "Edit Blog Post", visible: isModalVisible, onOk: handleOk, onCancel: handleCancel, width: 800, children: _jsxs(Form, { form: form, layout: "vertical", name: "blogForm", children: [_jsx(Form.Item, { name: "title", label: "Title", rules: [{ required: true }], children: _jsx(Input, { size: "large" }) }), _jsx(Form.Item, { name: "content", label: "Content", rules: [{ required: true }], children: _jsx(Input.TextArea, { rows: 10 }) }), _jsx(Form.Item, { name: "blogImg", label: "Image URL", rules: [{ required: true }], children: _jsx(Input, { size: "large" }) }), _jsx(Form.Item, { name: "tags", label: "Tags", children: _jsx(Input, { size: "large" }) })] }) })] }));
}
