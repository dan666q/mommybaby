import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from '@/lib/redux-toolkit/hook';
import { closePopup, openPopup } from '@/lib/redux-toolkit/slices/popup-slice';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
export default function Popup({ children, content, type, title, icon, width }) {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.popup[title]);
    return (_jsxs(_Fragment, { children: [_jsx("div", { onClick: () => dispatch(openPopup(title)), children: children }), _jsx(Modal, { centered: true, open: isOpen, onOk: () => dispatch(closePopup(title)), onCancel: () => dispatch(closePopup(title)), styles: { content: { padding: 0 } }, title: _jsx("div", { className: "px-3 py-2 rounded-t-md bg-[#001529]", children: _jsxs("div", { className: "flex", children: [_jsxs("div", { className: "mx-auto", children: [icon, _jsx("p", { className: "text-white", children: title })] }), type === 'info' && (_jsx(CloseCircleOutlined, { className: "text-white", onClick: () => dispatch(closePopup(title)) }))] }) }), footer: null, closeIcon: null, width: width, children: _jsx("div", { className: "p-4", children: content }) })] }));
}
