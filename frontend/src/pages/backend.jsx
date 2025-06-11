import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/button.jsx";

import startBackend from "../assets/start_backend.png";
import postman from "../assets/postman.png";
import rapidAPI from "../assets/RapidAPI.png";
import testAPIGif from "../assets/test_api.gif";

export default function Backend() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        🔧 Backend Tutorial: Flask & RESTful API
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          📘 What is a RESTful API?
        </h2>
        <p>
          A RESTful API is a way for your frontend (Vite/React) to communicate
          with your backend (Flask) using standard HTTP methods. Each URL (or
          endpoint) represents a **resource**, and each method (GET, POST, etc.)
          defines an **action** on that resource.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          🌐 HTTP Methods You'll Use
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>GET</strong> – Read or retrieve data (e.g., list items)
          </li>
          <li>
            <strong>POST</strong> – Create a new resource (e.g., add a new item)
          </li>
          <li>
            <strong>PUT</strong> – Update an existing resource (e.g., modify an
            item)
          </li>
          <li>
            <strong>DELETE</strong> – Remove a resource
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Flask Setup</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          {`# Install Flask and CORS support
pip install flask flask-cors`}
        </pre>
        <p className="mt-2">
          You will need to enable Cross-Origin Resource Sharing (
          <code>CORS</code>), which is a way for client-side web applications
          can interact with resources from other domains.
          <br />
          Note that we will host the frontend and backend separately. It is
          common in the industry (they might even create different repositories
          for frontend and backend).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🚀 Creating a Flask App</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          {`from flask import Flask, jsonify, request
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
    data["id"] = len(items) + 1  # Simple ID assignment, please do not do this, easily to have duplicates
    items.append(data)
    return jsonify({"success": True})

@app.route("/api/items/<int:id>", methods=["PUT"])
def update_item(id):
    data = request.get_json()
    for i, item in enumerate(items):
        if item["id"] == id:
            items[i] = data
            return jsonify({"success": True})
    return jsonify({"error": "Item not found"}), 404

@app.route("/api/items/<int:id>", methods=["DELETE"])
def delete_item(id):
    for i, item in enumerate(items):
        if item["id"] == id:
            items.pop(i)
            return jsonify({"success": True})
    return jsonify({"error": "Item not found"}), 404

if __name__ == "__main__":
    app.run(port=5000)  # You can change the port number here`}
        </pre>

        <p>
          Code is in <code>backend/backend_demo.py</code>, run{" "}
          <code>python backend/backend_demo.py</code>
        </p>

        <img
          src={startBackend || "../src/assets/start_backend.png"}
          alt="Flask App"
          className="mt-4 rounded shadow"
        />

        <p>
          For people are not familiar, <code>http://127.0.0.1</code> is your{" "}
          <code>localhost</code>, which is the address of your local machine and{" "}
          <strong>ONLY</strong> accessible from your own machine. The{" "}
          <code>5000</code> is the port number, which is like a door on your
          machine that the Flask app listens to.
        </p>

        <blockquote className="text-bold text-red-500 border-white">
          DO NOT SHARE THIS URL WITH YOUR GROUPMATES, THEY WON'T BE ABLE TO SEE
          IT LOLL
        </blockquote>

        <p className="mt-2">
          This sets up four API endpoints at{" "}
          <code className="bg-gray-200 px-1">/api/items</code>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>GET</strong>: returns the list of items
          </li>
          <li>
            <strong>POST</strong>: adds a new item (expects JSON with{" "}
            <code className="bg-gray-200 px-1">name</code>)
          </li>
          <li>
            <strong>PUT</strong>: updates an item (expects URL with{" "}
            <code className="bg-gray-200 px-1">id</code> and JSON with{" "}
            <code className="bg-gray-200 px-1">name</code>)
          </li>
          <li>
            <strong>DELETE</strong>: removes an item (expects URL with
            <code className="bg-gray-200 px-1">id</code>)
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧪 Testing The API</h2>
        <p>
          You can test your API using tools like{" "}
          <code>
            <a href="https://www.postman.com/" target="_blank">
              Postman
            </a>
          </code>
          . In Visual Studio Code, you can search and download extensions like{" "}
          <code>RapidAPI Client</code>.
        </p>
        <div className="flex flex-row gap-8 justify-center">
          <img
            src={postman || "../src/assets/postman.png"}
            alt="Postman"
            className="mt-4"
          />
          <img
            src={rapidAPI || "../src/assets/RapidAPI.png"}
            alt="RapidAPI Client"
            className="mt-4"
          />
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          🚀 Demo with RapidAPI Client
        </h2>
        <p>
          I will be using the VS Code RapidAPI Client extension to demo how to
          test the APIs.
        </p>
        <img
          src={testAPIGif || "../src/assets/test_api.gif"}
          alt="RapidAPI Demo"
          className="mt-4 rounded shadow"
        />
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📚 Resources</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a href="https://flask.palletsprojects.com/en/stable/quickstart/">
              Flask Documentation
            </a>
          </li>
          <li>
            <a href="https://restfulapi.net/http-status-codes/">
              RESTful API Status Codes
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <div className="flex justify-between">
          <Button onClick={() => navigate("/frontend")}>Prev Page</Button>
          <Button onClick={() => navigate("/demo")}>Next Page</Button>
        </div>
      </section>
    </div>
  );
}
