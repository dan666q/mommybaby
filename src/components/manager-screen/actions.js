import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ConfigAntdTheme from '@/lib/antd/config-theme';
import { DefaultButtonStyle } from '@/lib/antd/antd-styles';
import { Button, Spin } from 'antd';
import { cn } from '@/utils';
import { LoadingOutlined } from '@ant-design/icons';
export default function Actions({ className, onOk, onCancel, okText, cancelText, isLoading = false, isDisabled }) {
    return (_jsxs("div", { className: cn('flex gap-4 mt-4 ml-auto', className), children: [_jsx(Button, { className: "w-full", type: "text", danger: true, onClick: onCancel, disabled: isLoading, children: cancelText || 'Cancel' }), _jsx(ConfigAntdTheme, { theme: DefaultButtonStyle, children: _jsx(Button, { className: "w-full", type: "primary", onClick: onOk, disabled: isLoading || isDisabled, children: isLoading ? _jsx(Spin, { indicator: _jsx(LoadingOutlined, { className: "text-primary", spin: true }) }) : okText || 'Save' }) })] }));
}
