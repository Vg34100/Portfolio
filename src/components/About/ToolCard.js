import React from "react";
import { Col } from "react-bootstrap";
import ProgressBar from "../ProgressBar";

function ToolCard({ Icon, projects, years, progress }) {
  return (
    <Col xs={4} md={3} className="tech-icons">
      {/* <div className="tool-card-wrapper"> */}
        <Icon />
        <div className="tool-card">
          <div className="tool-dropdown">
            <div className="tech-info">
              <p>Projects: {projects}</p>
              <p>Years: {years}</p>
            </div>
            <ProgressBar progress={progress} />
          </div>
        </div>
      {/* </div> */}
    </Col>
  );
}

export default ToolCard;
