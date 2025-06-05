import { useState } from "react";

import Button from "../components/button";

export default function Form({ serverURL, onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  async function handleAddTask(e) {
    e.preventDefault();
    const res = await fetch(`${serverURL}/api/task`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: inputValue }),
    });
    if (res.ok) {
      setInputValue("");
      onSubmit();
    } else {
      const errorData = await res.json();
      alert(errorData.error || "Failed to add task.");
    }
  }

  return (
    <form onSubmit={handleAddTask} className="flex mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow border px-3 py-2 rounded-l mx-2"
        placeholder="Enter a new task..."
      />
      <Button children="Add Task" onClick={handleAddTask} />
    </form>
  );
}
