import { jsx as _jsx } from "react/jsx-runtime";
import { Dropdown as AntDropdown } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
export default function Dropdown({ children, items }) {
    return (_jsx(AntDropdown, { menu: { items }, trigger: ['click'], children: children ? children : _jsx(EllipsisOutlined, {}) }));
}
