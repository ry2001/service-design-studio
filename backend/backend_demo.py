from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend access

# In-memory data storage
items = []

@app.route("/api/items", methods=["GET"])
def get_items():
    return jsonify(items)

@app.route("/api/items", methods=["POST"])
def add_item():
    data = request.get_json()
    items.append(data["name"])
    return jsonify({"success": True})

@app.route("/api/items", methods=["DELETE"])
def delete_item():
    data = request.get_json()
    item_name = data.get("name")
    if item_name in items:
        items.remove(item_name)
        return jsonify({"success": True})
    return jsonify({"error": "Item not found"}), 404
    
if __name__ == "__main__":
    app.run(port=5000)