from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    response = f"Echo: {user_message}"  # Simple placeholder logic
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
