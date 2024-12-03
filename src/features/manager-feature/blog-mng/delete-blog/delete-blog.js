import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import ConfigAntdTheme from '@/lib/antd/config-theme';
import { POPUP_TITLE } from '@/constants';
import { DefaultButtonStyle } from '@/lib/antd/antd-styles';
import { useAppDispatch } from '@/lib/redux-toolkit/hook';
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice';
import { Button, Typography } from 'antd';
import { useDeleteBlog } from './use-delete-blog';
export default function DeleteBlog({ title, blogId }) {
    const dispatch = useAppDispatch();
    const useDeleteBlogMutation = useDeleteBlog();
    const handleDelete = () => {
        console.log(blogId);
        useDeleteBlogMutation.mutate(blogId);
        dispatch(closePopup(POPUP_TITLE.DELETE_BLOG));
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Typography.Text, { children: ["Are you sure to delete blog: ", title, "?"] }), _jsxs("div", { className: "flex items-center justify-end mt-4", children: [_jsx(Button, { danger: true, type: "text", className: "mr-2", onClick: () => dispatch(closePopup(POPUP_TITLE.DELETE_BLOG)), children: "Cancel" }), _jsx(ConfigAntdTheme, { theme: DefaultButtonStyle, children: _jsx(Button, { type: "primary", onClick: handleDelete, children: "Delete" }) })] })] }));
}
