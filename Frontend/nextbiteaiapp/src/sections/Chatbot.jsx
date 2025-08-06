import React, { useState } from 'react';
import '../Chatbot.css';
import Recipecard from '../components/Recipecard';

const Chatbot = () => {
  const [ingredients, setIngredients] = useState('');
  const [conditions, setConditions] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!ingredients.trim()) return;

    const userMessage = `Ingredients: ${ingredients}\nConditions: ${conditions}`;
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setLoading(true);

    const inputIngredients = ingredients.split(',').map(i => i.trim());
    const inputConditions = conditions.split(',').map(c => c.trim());

    try {
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients: inputIngredients, conditions: inputConditions }),
      });

      const data = await res.json();

      setMessages(prev => [...prev, { sender: 'bot', text: data.recipe }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'bot', text: '⚠️ Error connecting to backend.' }]);
    }

    setLoading(false);
    setIngredients('');
    setConditions('');
  };

  return (
    <div className="chatbot-wrapper">
      <h2 className="chat-title">🍽️ NextBite.ai Recipe Generator</h2>

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender === 'user' ? 'user-msg' : 'bot-msg'}`}
          >
            {msg.sender === 'bot' && msg.text.includes('**Title:') ? (
              <Recipecard text={msg.text} />
            ) : (
              msg.text.split('\n').map((line, i) => <div key={i}>{line}</div>)
            )}
          </div>
        ))}

        {loading && (
          <div className="chat-message bot-msg typing">
            <span>.</span><span>.</span><span>.</span>
          </div>
        )}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Ingredients (e.g. rice, beans)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <input
          type="text"
          placeholder="Conditions (e.g. vegan, gluten-free)"
          value={conditions}
          onChange={(e) => setConditions(e.target.value)}
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
