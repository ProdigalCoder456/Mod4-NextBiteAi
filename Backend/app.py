from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Dummy AI response (replace with model call)
def get_ai_response(user_input):
    return f"Echo: {user_input}"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")
    bot_reply = get_ai_response(user_message)
    return jsonify({"response": bot_reply})

if __name__ == '__main__':
    app.run(debug=True)
