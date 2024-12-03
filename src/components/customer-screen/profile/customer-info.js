import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAuth } from '@/hooks/use-auth';
import { Card, Row, Col, Typography } from 'antd';
import { format } from 'date-fns';
const { Title, Text } = Typography;
export default function CustomerInfo() {
    const { user, loadingInitial } = useAuth();
    if (loadingInitial)
        return _jsx("p", { children: "Loading..." });
    const formattedDateOfBirth = format(new Date(user?.data.dateOfBirth), 'yyyy-MM-dd');
    // Function to convert boolean gender to string
    const getGenderLabel = (isMale) => {
        return isMale ? 'Male' : 'Female';
    };
    return (_jsx("div", { className: "col-9 col-xl-8 col-lg-7 col-md-12", children: _jsx("div", { className: "cart-info", children: _jsx(Card, { title: "Account Information", className: "rounded-lg shadow-lg", children: _jsxs(Row, { gutter: [16, 24], className: "text-gray-700", children: [_jsxs(Col, { span: 12, children: [_jsxs("div", { className: "mb-4", children: [_jsx(Title, { level: 5, children: "Username:" }), _jsx(Text, { className: "text-3xl", children: user?.data.username })] }), _jsxs("div", { className: "mb-4", children: [_jsx(Title, { level: 5, children: "Full Name:" }), _jsx(Text, { className: "text-3xl", children: user?.data.fullName })] }), _jsxs("div", { className: "mb-4", children: [_jsx(Title, { level: 5, children: "Gender:" }), _jsx(Text, { className: "text-3xl", children: getGenderLabel(user?.data.gender) })] }), _jsxs("div", { className: "mb-4", children: [_jsx(Title, { level: 5, children: "Date of Birth:" }), _jsx(Text, { className: "text-3xl", children: formattedDateOfBirth })] })] }), _jsxs(Col, { span: 12, children: [_jsxs("div", { className: "mb-4", children: [_jsx(Title, { level: 5, children: "Address:" }), _jsx(Text, { className: "text-3xl", children: user?.data.address })] }), _jsxs("div", { className: "mb-4", children: [_jsx(Title, { level: 5, children: "Phone:" }), _jsx(Text, { className: "text-3xl", children: user?.data.phone })] }), _jsxs("div", { className: "mb-4", children: [_jsx(Title, { level: 5, children: "Email:" }), _jsx(Text, { className: "text-3xl", children: user?.data.email })] })] })] }) }) }) }));
}
