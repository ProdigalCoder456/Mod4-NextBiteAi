

function Chatbot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: input }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      setResponse('Error connecting to chatbot.');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>NextBite.ai Chatbot</h2>
      <input
        style={{ width: '300px', padding: '0.5rem' }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a question..."
      />
      <button
        onClick={sendMessage}
        style={{ marginLeft: '10px', padding: '0.5rem 1rem' }}
      >
        Send
      </button>
      <div style={{ marginTop: '1rem' }}>
        {loading ? 'Typing...' : <p>{response}</p>}
      </div>
    </div>
  );
}

export default Chatbot;
