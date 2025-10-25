import React from "react";

// Component to display a single task card
export default function TodoCard({ task, onDone }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Task info */}
      <div>
        <h3 style={{ margin: 0, marginBottom: 4, color: "#1e40af", fontWeight: 600 }}>
          {task.title}
        </h3>
        <p style={{ margin: 0, color: "#6b7280", fontSize: 14 }}>
          {task.description}
        </p>
      </div>

      {/* Done button */}
      <button
        onClick={onDone}  // Trigger callback to mark task as done
        style={{
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: 8,
          padding: "8px 16px",
          cursor: "pointer",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          fontSize: 14,
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")} // Hover effect
        onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
      >
        Done
      </button>
    </div>
  );
}
