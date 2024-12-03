import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Form, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useAddBlog } from './use-add-blog';
import { useAppDispatch } from '@/lib/redux-toolkit/hook';
import { POPUP_TITLE } from '@/constants';
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice';
export default function AddBlog() {
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const addBlogMutation = useAddBlog();
    const userId = localStorage.getItem('userId');
    const handleSubmit = (values) => {
        const formData = {
            ...values,
            userId: userId,
        };
        console.log('Received values of form: ', formData);
        addBlogMutation.mutate(formData);
        form.resetFields();
        dispatch(closePopup(POPUP_TITLE.ADD_BLOG));
    };
    function handleCancel() {
        form.resetFields();
        dispatch(closePopup(POPUP_TITLE.ADD_BLOG));
    }
    return (_jsx("div", { className: "w-10/12 mx-auto px-4 py-8", children: _jsxs(Form, { form: form, layout: "vertical", name: "blogForm", onFinish: handleSubmit, children: [_jsx(Form.Item, { name: "title", label: "Title", rules: [{ required: true, message: 'Please input the title!' }], children: _jsx(Input, { size: "large" }) }), _jsx(Form.Item, { name: "content", label: "Content", rules: [{ required: true, message: 'Please input the content!' }], children: _jsx(Input.TextArea, { rows: 10 }) }), _jsx(Form.Item, { name: "blogImg", label: "Image URL", rules: [{ required: true, message: 'Please input the image URL!' }], children: _jsx(Input, { size: "large" }) }), _jsx(Form.Item, { name: "tags", label: "Tags", children: _jsx(Input, { size: "large", placeholder: "Separate tags with commas" }) }), _jsxs(Form.Item, { className: "flex justify-end gap-5", children: [_jsx(Button, { type: "text", danger: true, size: "large", className: "mr-5", onClick: handleCancel, children: "Cancel" }), _jsx(Button, { type: "primary", icon: _jsx(PlusOutlined, {}), htmlType: "submit", size: "large", children: "Add Blog Post" })] })] }) }));
}
