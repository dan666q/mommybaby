import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FILTER_OPTIONS } from '@/constants';
import { Switch, Select } from 'antd';
export function SelectOptions(filterOptions) {
    return Object.entries(filterOptions).map(([key, value]) => ({
        label: key,
        value: value,
        disabled: value === FILTER_OPTIONS.ID,
    }));
}
export default function FilterAccount() {
    const handleSearch = (value) => {
        console.log(value);
    };
    const handleSwitch = (checked) => {
        console.log(checked);
    };
    return (_jsxs("div", { children: [_jsx("h4", { className: "my-2", children: "Search by" }), _jsx(Select, { mode: "multiple", allowClear: true, className: "w-full", placeholder: "Please select", defaultValue: [], value: [], onChange: handleSearch, options: SelectOptions(FILTER_OPTIONS) }), _jsxs("div", { className: "flex items-center gap-5 mt-5", children: [_jsx("h4", { className: "my-2", children: "Show dropout student" }), _jsx(Switch, { onChange: handleSwitch, checked: false })] })] }));
}
