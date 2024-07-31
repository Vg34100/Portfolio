import React from "react";
import { Container } from "react-bootstrap";
import { projectsData } from "./timelineData";
import Particle from "../Particle";
import "./Timeline.css"; // Import the CSS file for styling
import TimelineCard from "./TimelineCard";
import DropIn from "../DropIn";

function Timeline() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <DropIn>
          <h1 className="project-heading">
            My Project <strong className="purple">Timeline</strong>
          </h1>
          <p style={{ color: "white" }}>
            The timeline of my previous work.
          </p>
          <br></br>
        </DropIn>

        <DropIn>
          <div className="timeline">
            {projectsData.sort((a, b) => new Date(a.date) - new Date(b.date)).map((project, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                <DropIn>
                  <div className="timeline-card">
                    <TimelineCard {...project} />
                  </div>
                </DropIn>
              </div>
            ))}
          </div>
        </DropIn>
      </Container>
    </Container>
  );
}

export default Timeline;
