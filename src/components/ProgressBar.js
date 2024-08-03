import React from "react";

function ProgressBar({ progress }) {
    const getColor = () => {
        if (progress < 25) return "#ff0000"; // Red
        if (progress < 50) return "#ffa500"; // Orange
        if (progress < 75) return "#ffff00"; // Yellow
        return "#008000"; // Green
    };

    return (
        <div className="progress-bar-container" style={{
            width: "90%",
            backgroundColor: "#e0e0e0",
            borderRadius: "4px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block"
        }}>
            <div 
                className="progress-bar"
                style={{
                    width: `${progress}%`,
                    backgroundColor: getColor(),
                    height: "20px",
                    borderRadius: "4px",
                    textAlign: "center",
                    lineHeight: "20px",
                    color: "white"
                }}
            >
                {/* {progress}% */}
            </div>
        </div>
    );
}

export default ProgressBar;