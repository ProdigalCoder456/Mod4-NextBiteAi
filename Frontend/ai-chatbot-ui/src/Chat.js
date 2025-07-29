import React, { useState } from 'react';
import axios from 'axios';

function Chat() {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleSend = async () => {
    if (!input) return;
    const userMessage = { sender: 'user', text: input };
    const updatedChat = [...chatLog, userMessage];
    setChatLog(updatedChat);

    const response = await axios.post('http://localhost:5000/chat', { message: input });
    const botMessage = { sender: 'bot', text: response.data.response };
    setChatLog([...updatedChat, botMessage]);
    setInput('');
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">AI Chatbot</h3>
      <div className="border rounded p-3 mb-3" style={{ height: '300px', overflowY: 'scroll' }}>
        {chatLog.map((msg, index) => (
          <div key={index} className={`text-${msg.sender === 'user' ? 'primary' : 'success'}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="btn btn-primary" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
