import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Button, Input, Typography, Spin, Divider } from 'antd';
import { CloseOutlined, SendOutlined } from '@ant-design/icons';
const { Text } = Typography;
const ChatBox = ({ closeChat }) => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'support', text: 'Xin chào! Tôi có thể giúp gì cho bạn?' },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSendMessage = async () => {
        if (input.trim() === '')
            return;
        const userMessage = { id: messages.length + 1, sender: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        try {
            const response = await fetch('https://mommybaby-xi.vercel.app/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });
            const data = await response.json();
            setMessages((prev) => [...prev, { id: prev.length + 1, sender: 'support', text: data.reply }]);
        }
        catch (error) {
            console.error('Error sending message:', error);
            setMessages((prev) => [
                ...prev,
                {
                    id: prev.length + 1,
                    sender: 'support',
                    text: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.',
                },
            ]);
        }
        finally {
            setIsLoading(false);
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isLoading) {
            handleSendMessage();
        }
    };
    return (_jsxs("div", { className: "fixed bottom-36 right-10 w-1/5 bg-white p-4 border border-gray-200 rounded-lg shadow-lg z-50", children: [_jsxs("div", { className: "flex justify-between items-center mb-4", children: [_jsx(Text, { strong: true, className: "text-lg", children: "AI h\u1ED7 tr\u1EE3 kh\u00E1ch h\u00E0ng" }), _jsx(Button, { type: "text", icon: _jsx(CloseOutlined, {}), onClick: closeChat, className: "text-gray-500 hover:text-red-500" })] }), _jsx(Divider, {}), _jsxs("div", { className: "h-[350px] overflow-y-auto mb-4", children: [messages.map((msg) => (_jsx("div", { className: `mb-2 p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`, children: _jsx(Text, { children: msg.text }) }, msg.id))), isLoading && (_jsx("div", { className: "text-center", children: _jsx(Spin, { tip: "\u0110ang t\u1EA3i..." }) }))] }), _jsxs("div", { className: "flex", children: [_jsx(Input, { placeholder: "Nh\u1EADp tin nh\u1EAFn...", value: input, onChange: (e) => setInput(e.target.value), onKeyPress: handleKeyPress, disabled: isLoading, className: "flex-1 rounded-md" }), _jsx(Button, { type: "primary", icon: _jsx(SendOutlined, {}), onClick: handleSendMessage, disabled: isLoading || input.trim() === '', className: "ml-2", children: "G\u1EEDi" })] })] }));
};
export default ChatBox;
