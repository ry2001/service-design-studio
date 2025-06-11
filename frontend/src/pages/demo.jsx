import React, { useState, useEffect } from "react";

import Form from "../components/form";
import Tasks from "../components/tasks";

// This is a hardcoded URL for the backend.
// You should not be doing this for your project.
// Instead, this should be a dynamic URL that shifts based on the environment (dev mode or production mode).
const API_BASE = "http://localhost:5000";

export default function Demo() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch tasks on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/api/task/`);
      const data = await res.json();
      if (res.ok) {
        setTasks(data);
      }
    } catch (err) {
      setError(err || "Failed to load tasks.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (id) => {
    const res = await fetch(`${API_BASE}/api/task/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      fetchTasks();
    } else {
      const errorData = await res.json();
      setError(errorData.error || "Failed to delete task.");
    }
  };

  const handleCheckbox = async (task) => {
    console.log(`Toggling completion for task ${task.id}`);
    const res = await fetch(`${API_BASE}/api/task/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    });
    if (res.ok) {
      fetchTasks();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📝 Task Manager Demo</h2>
        <p>
          This demo showcases a simple task manager functionality. <br /> Things
          to implement:
        </p>
        <ol className="list-decimal list-inside">
          <li>
            View tasks
            <ul className="pl-5 py-1 list-disc list-inside">
              <li>
                List all tasks in the database{" "}
                <ul className="pl-10 py-1 list-disc list-inside">
                  <li>
                    Call a <code>GET</code> request to fetch tasks from the
                    database.
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            Add task
            <ul className="pl-5 py-1 list-disc list-inside">
              <li>Input field to enter task name</li>
              <li>
                Button to add the task{" "}
                <ul className="pl-10 py-1 list-disc list-inside">
                  <li>
                    Call a <code>POST</code> request to add the tasks in to the
                    database.
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            Delete task
            <ul className="pl-5 py-1 list-disc list-inside">
              <li>
                Button to delete the task{" "}
                <ul className="pl-10 py-1 list-disc list-inside">
                  <li>
                    Call a <code>DELETE</code> request to remove the task from
                    the database.
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            Check task as completed
            <ul className="pl-5 py-1 list-disc list-inside">
              <li>
                Checkbox to mark task as completed{" "}
                <ul className="pl-10 py-1 list-disc list-inside">
                  <li>
                    Call a <code>PUT</code> request to update the task's status
                    in the database.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-6">✅ Task Manager Demo</h2>

        {/* Form */}
        {/* This is how you pass the props to the child components */}
        <Form serverURL={API_BASE} onSubmit={fetchTasks} />

        {/* Loading/Error */}
        {loading && <p className="text-gray-600">Loading tasks...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Task List */}
        <ul className="space-y-2">
          {tasks.length === 0 && !loading && (
            <p className="text-gray-500 italic">No tasks yet.</p>
          )}
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center border rounded px-4 py-2"
            >
              <Tasks
                task={task}
                onChange={handleCheckbox}
                onClick={handleDeleteTask}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-6">🎉 Final Remarks</h2>
        <p>
          Feel free to edit and experiment with the code. As long as you don't
          push the code to the repository.
        </p>
      </section>
    </div>
  );
}
