import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Popup from './popup';
import debounce from 'debounce';
import FilterAccount from '@/features/manager-feature/account-mng/filter-account';
import { Button, Input, Tag } from 'antd';
import { CloseOutlined, FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { FILTER_OPTIONS, POPUP_TITLE } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/lib/redux-toolkit/hook';
import { setFilterAccount, setSearchAccount } from '@/lib/redux-toolkit/slices/filter-account';
export default function SearchBar() {
    const dispatch = useAppDispatch();
    const searchValue = useAppSelector((state) => state.filterAccount.value);
    const filterState = useAppSelector((state) => state.filterAccount.filter);
    const handleClose = (item) => {
        dispatch(setFilterAccount({ key: 'filter', value: filterState.filter((prevStateItem) => prevStateItem !== item) }));
    };
    const handleSearch = debounce((searchValue) => {
        dispatch(setSearchAccount(searchValue));
    }, 250);
    return (_jsxs("div", { className: "flex items-center space-x-3 w-[350px] flex-col", children: [_jsxs("div", { className: "flex gap-3 w-full", children: [_jsx(Input, { prefix: _jsx(SearchOutlined, {}), defaultValue: searchValue, placeholder: "Search by...", onChange: (e) => handleSearch(e.target.value), className: "w-full" }), _jsx(Popup, { type: "info", title: POPUP_TITLE.FILTER, content: _jsx(FilterAccount, {}), width: 500, children: _jsx(Button, { type: "primary", icon: _jsx(FilterOutlined, {}), children: "Filter" }) })] }), _jsx("div", { className: "w-full", children: _jsx("div", { className: " ml-7 mt-3", children: filterState.map((item, index) => {
                        if (item === FILTER_OPTIONS.ID) {
                            return (_jsx(Tag, { className: "inline-flex mt-1 gap-2 flex-row-reverse", children: item }, index));
                        }
                        else {
                            return (_jsx(Tag, { className: "inline-flex mt-1 gap-2 flex-row-reverse", icon: _jsx(CloseOutlined, { onClick: () => handleClose(item) }), children: item }, index));
                        }
                    }) }) })] }));
}
