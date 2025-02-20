from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)  # Enable CORS for all routes

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':
        # Handle preflight request
        response = jsonify({'status': 'ok'})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'POST,OPTIONS')
        return response

    # Your existing prediction logic here
    # ...

if __name__ == '__main__':
    app.run(debug=True) 