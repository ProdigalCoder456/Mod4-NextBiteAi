import { useState } from 'react';
import '../Chatbot.css';
import RecipeCard from '../components/Recipecard';

const Chatbot = () => {
  const [ingredients, setIngredients] = useState('');
  const [conditions, setConditions] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!ingredients.trim()) return;

    // add the user's message to chat
    
    const userMessage = `Leftover Ingredients: ${ingredients}\nDietary Preferences: ${conditions}`;
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setLoading(true);

    // prepare input arrays for backend request 

    const inputIngredients = ingredients.split(',').map(i => i.trim());
    const inputConditions = conditions.split(',').map(c => c.trim());

    // send ingredients and preferences to backend API
    
    try {
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients: inputIngredients, conditions: inputConditions }),
      });

      const data = await res.json();

      // removes markdown formatting for a cleaner display

      const plainTextRecipe = data.recipe
        .replace(/\*\*(.*?)\*\*/g, '$1') 
        .replace(/`{1,3}(.*?)`{1,3}/g, '$1') 
        .replace(/#+\s?(.*)/g, '$1'); 

      // add the bot's response to chat
      setMessages(prev => [...prev, { sender: 'bot', text: plainTextRecipe }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'bot', text:  'Error connecting to backend.' }]);
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
          <div key={index} className={`chat-message ${msg.sender === 'user' ? 'user-msg' : 'bot-msg'}`}>

          {msg.sender === 'bot' ? (
            <RecipeCard recipeText={msg.text} />
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

        <div className="disclaimer-message"> Content is AI-generated and may be inaccurate. Use your best judgment.</div>

        <div className="chat-input-area">
        <input
          type="text"
          placeholder="Enter leftover ingredients..."
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add any dietary preferences"
          value={conditions}
          onChange={(e) => setConditions(e.target.value)}
        />
        <button onClick={handleSubmit}>Generate Recipe</button>


      </div>
    </div>
  );
};

export default Chatbot;
