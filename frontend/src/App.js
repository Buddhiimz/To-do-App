import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoCard from "./components/TodoCard";

function App() {
  // State variables for form inputs and task list
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);
  const API = process.env.REACT_APP_API_URL || "http://localhost:5000";

  // Fetch latest tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API}/api/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Load tasks on first render
  useEffect(() => {
    fetchTasks();
  }, []);

  // Create a new task
  const createTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title required");
    await axios.post(`${API}/api/tasks`, { title, description: desc });
    setTitle("");
    setDesc("");
    fetchTasks();
  };

  // Mark a task as done
  const markDone = async (id) => {
    await axios.post(`${API}/api/tasks/${id}/done`);
    fetchTasks();
  };

  // UI structure
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        fontFamily: "Poppins, sans-serif",
        padding: "20px 20px",
      }}
    >
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Container */}
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h1
          style={{
            color: "#1e40af",
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          To-Do App
        </h1>
        <p style={{ color: "#6b7280", marginBottom: 32, fontSize: 14 }}>
          Manage your tasks efficiently
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "400px 1fr",
            gap: 32,
          }}
        >
          {/* Left Side - Add Task Form */}
          <div>
            <div
              style={{
                padding: 24,
                backgroundColor: "white",
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                position: "sticky",
                top: 20,
              }}
            >
              <h2
                style={{
                  margin: 0,
                  marginBottom: 20,
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#1e40af",
                }}
              >
                Add New Task
              </h2>

              {/* Task Title Input */}
              <input
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  width: "100%",
                  padding: 12,
                  marginBottom: 12,
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  fontSize: 14,
                  fontFamily: "Poppins, sans-serif",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />

              {/* Task Description Input */}
              <textarea
                placeholder="Description (optional)"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                style={{
                  width: "100%",
                  padding: 12,
                  marginBottom: 16,
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  fontSize: 14,
                  fontFamily: "Poppins, sans-serif",
                  minHeight: 120,
                  resize: "vertical",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />

              {/* Submit Button */}
              <button
                onClick={createTask}
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 24px",
                  cursor: "pointer",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  width: "100%",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#2563eb")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
              >
                Add Task
              </button>
            </div>
          </div>

          {/* Right Side - Task List */}
          <div
            style={{
              padding: 24,
              backgroundColor: "white",
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h2
              style={{
                margin: 0,
                marginBottom: 20,
                fontSize: 18,
                fontWeight: 600,
                color: "#1e40af",
              }}
            >
              Your Tasks ({tasks.length})
            </h2>

            {/* Empty State */}
            {tasks.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  padding: 60,
                  borderRadius: 12,
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#f9fafb",
                }}
              >
                <p style={{ color: "#9ca3af", fontSize: 14, margin: 0 }}>
                  No tasks yet. Add your first task!
                </p>
              </div>
            )}

            {/* Task List Rendering */}
            {tasks.map((t, index) => (
              <TodoCard
                key={t.id || t._id || index}
                task={t}
                onDone={() => markDone(t.id || t._id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
