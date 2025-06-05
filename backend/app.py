from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend access

# NOTE: This is just a simple in-memory storage, for your project, please use a database.
tasks = [{"id": 0, "task": "A hardcoded task", "completed": False}]

def get_next_id():
    if len(tasks) == 0:
        return 1
    return max([task["id"] for task in tasks]) + 1

@app.route("/api/task", methods=["GET"])
def get_tasks():
    return jsonify(tasks)

@app.route("/api/task", methods=["POST"])
def add_task():
    data = request.get_json()

    # Validate input
    try:
        task_name = data["task"].strip()
    except KeyError:
        return jsonify({"error": "Task is required"}), 400

    # Error if the task is empty
    if task_name is None or task_name.strip() == "":
        return jsonify({"error": "Task cannot be empty"}), 400

    new_id = get_next_id()
    tasks.append({"id": new_id, "task": task_name, "completed": False})
    return jsonify({"success": True})

@app.route("/api/task/<int:id>", methods=["DELETE"])
def delete_task(id):
    task = next((t for t in tasks if t["id"] == id), None)
    if task:
        tasks.remove(task)
        return jsonify({"success": True})
    return jsonify({"error": "Task not found"}), 404

@app.route("/api/task/<int:id>", methods=["PUT"])
def update_task(id):
    data = request.get_json()

    task = next((t for t in tasks if t["id"] == id), None)
    if task:
        task["completed"] = data.get("completed")
        return jsonify({"success": True})
    return jsonify({"error": "Task not found"}), 404

if __name__ == "__main__":
    app.run(port=5000)