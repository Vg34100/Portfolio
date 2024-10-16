// ProgressBar.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Example icon

function ProgressBar({ progress, label }) {
  const getColor = () => {
    if (progress < 25) return "#ff4d4d"; // Red
    if (progress < 50) return "#ff9933"; // Orange
    if (progress < 75) return "#ffcc00"; // Yellow
    return "#4CAF50"; // Green
  };

  return (
    <div className="progress-bar-wrapper" style={{ marginBottom: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
        <span className="progress-label">{label}</span>
        <span className="progress-percentage">{progress}%</span>
      </div>
      <div
        className="progress-bar-container"
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "8px",
          overflow: "hidden",
          height: "20px",
          position: "relative",
        }}
      >
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
            backgroundColor: getColor(),
            height: "100%",
            transition: "width 0.5s ease-in-out",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {/* Optional: Display progress percentage inside the bar */}
          {/* {progress}% */}
        </div>
        {/* Optional: Add an icon overlay */}
        <FaCheckCircle
          style={{
            position: "absolute",
            right: "5px",
            top: "50%",
            transform: "translateY(-50%)",
            color: getColor(),
            opacity: progress >= 100 ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      </div>

    </div>
  );
}

export default ProgressBar;
