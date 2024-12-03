import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import ChatBox from './chatbox';
const SupportButton = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };
    return (_jsxs("div", { children: [_jsx("div", { className: "fixed bottom-4 right-4", children: _jsx("button", { className: "bg-blue-500 text-white p-8 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none", onClick: toggleChat, children: _jsx("span", { className: "text-xl", children: _jsx(MessageCircle, {}) }) }) }), isChatOpen && _jsx(ChatBox, { closeChat: toggleChat })] }));
};
export default SupportButton;
