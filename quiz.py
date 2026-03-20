from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/questions')
def get_questions():
    with open('questions.json') as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)