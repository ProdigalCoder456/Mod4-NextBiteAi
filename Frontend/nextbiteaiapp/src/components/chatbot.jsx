import { useState } from "react";
import ChatInput from "./ChatInput";
import getChatbotReply from "../model/chatbotModel";
import "./chatbot.css";

const [messages, setMessages] = useState([]);

const handleSendMessage = async (message) => {
    const userMessage = { text: message, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Call the backend API that runs the Prototype_2.ipynb model
    try {
        const response = await fetch("/api/prototype2", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        });
        const data = await response.json();
        const botMessage = { text: data.reply, sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
        const botMessage = { text: "Sorry, there was an error.", sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
};

return (
    <div className="chatbot">
        <div className="chatbot-messages">
            {messages.map((msg, index) => (
                <div key={index} className={`chatbot-message ${msg.sender}`}>
                    {msg.text}
                </div>
            ))}
        </div>
        <ChatInput onSendMessage={handleSendMessage} />
    </div>
);

export default Chatbot;