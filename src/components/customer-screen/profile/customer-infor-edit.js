import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Form, Input, Button, Row, Col, Card, Radio, message, DatePicker } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useAuth } from '@/hooks/use-auth';
import useEditAccount from '@/hooks/customer-hook/profile/use-edit-account';
import moment from 'moment';
const CustomerInforEdit = () => {
    const [form] = useForm();
    const { user } = useAuth();
    const { mutate: updateAccount, isLoading: isUpdating } = useEditAccount(user?.data.id);
    useEffect(() => {
        // Populate form fields with user data when user.data changes
        if (user?.data) {
            form.setFieldsValue({
                fullName: user.data.fullName,
                gender: user.data.gender, // Assuming gender is already boolean
                address: user.data.address,
                phone: user.data.phone,
                image: user.data.image,
                dateOfBirth: user.data.dateOfBirth ? moment(user.data.dateOfBirth) : null, // Use moment to parse date if needed
            });
        }
    }, [form, user]);
    const disabledDate = (current) => {
        // Disable dates before 1900 and after the current date
        return current && (current.year() > moment().year() || current.year() < 1900);
    };
    const onFinish = async (values) => {
        try {
            const { fullName, gender, address, phone, image, password, dateOfBirth } = values;
            // Prepare data object to send to updateAccount function
            const data = {
                id: user.data.id,
                fullName,
                gender, // Assuming gender is boolean
                address,
                phone,
                image,
                password: password || user.data.password, // Only include password if it's provided
                dateOfBirth: dateOfBirth ? dateOfBirth.format('YYYY-MM-DD') : user.data.dateOfBirth, // Format date if provided, else use current dateOfBirth
                email: user.data.email, // Assuming email doesn't change here
            };
            // Call updateAccount mutation function
            await updateAccount(data);
            // Reset form fields on successful update
            form.resetFields();
            // Show success message
            message.success('Account updated successfully');
        }
        catch (error) {
            console.error('Failed to update account:', error);
            message.error('Failed to update account');
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (_jsx("div", { className: "col-9 col-xl-8 col-lg-7 col-md-12", children: _jsx("div", { className: "cart-info", children: _jsx(Card, { title: "Edit Account Information", className: "rounded-lg shadow-lg", children: _jsxs(Form, { form: form, layout: "vertical", name: "customerEditForm", onFinish: onFinish, onFinishFailed: onFinishFailed, children: [_jsxs(Row, { gutter: [16, 24], className: "text-gray-700", children: [_jsxs(Col, { span: 12, children: [_jsx(Form.Item, { label: "Full Name", name: "fullName", rules: [{ required: true, message: 'Please input the full name!' }], children: _jsx(Input, { placeholder: "Full Name" }) }), _jsx(Form.Item, { label: "Gender", name: "gender", rules: [{ required: true, message: 'Please select the gender!' }], children: _jsxs(Radio.Group, { children: [_jsx(Radio, { value: true, children: "Male" }), _jsx(Radio, { value: false, children: "Female" })] }) }), _jsx(Form.Item, { label: "Address", name: "address", rules: [{ required: true, message: 'Please input the address!' }], children: _jsx(Input, { placeholder: "Address" }) }), _jsx(Form.Item, { label: "Phone", name: "phone", rules: [{ required: true, message: 'Please input the phone number!' }], children: _jsx(Input, { placeholder: "Phone" }) }), _jsx(Form.Item, { label: "Date of Birth", name: "dateOfBirth", rules: [
                                                { required: true, message: 'Please select the date of birth!' },
                                                () => ({
                                                    validator(_, value) {
                                                        if (!value || (value.year() >= 1900 && value.year() <= moment().year())) {
                                                            return Promise.resolve();
                                                        }
                                                        return Promise.reject(new Error('Please select a valid date of birth between 1900 and current year!'));
                                                    },
                                                }),
                                            ], children: _jsx(DatePicker, { style: { width: '100%' }, disabledDate: disabledDate, format: "DD/MM/YYYY" }) })] }), _jsxs(Col, { span: 12, children: [_jsx(Form.Item, { label: "Avatar URL", name: "image", children: _jsx(Input, { placeholder: "Avatar URL" }) }), _jsx(Form.Item, { label: "New Password", name: "password", rules: [{ min: 6, message: 'Password must be at least 6 characters!' }], children: _jsx(Input.Password, { placeholder: "New Password" }) }), _jsx(Form.Item, { label: "Confirm Password", name: "confirmPassword", dependencies: ['password'], rules: [
                                                ({ getFieldValue }) => ({
                                                    validator(_, value) {
                                                        if (!value || getFieldValue('password') === value) {
                                                            return Promise.resolve();
                                                        }
                                                        return Promise.reject(new Error('The two passwords do not match!'));
                                                    },
                                                }),
                                            ], children: _jsx(Input.Password, { placeholder: "Confirm Password" }) })] })] }), _jsx(Row, { justify: "end", children: _jsx(Col, { children: _jsx(Form.Item, { children: _jsx(Button, { type: "primary", htmlType: "submit", loading: isUpdating, children: "Save Changes" }) }) }) })] }) }) }) }));
};
export default CustomerInforEdit;
