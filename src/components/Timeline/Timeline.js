import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { projectsData } from "../projectsData";
import Particle from "../Particle";
import "./Timeline.css"; // Import the CSS file for styling
import TimelineCard from "./TimelineCard";
import DropIn from "../DropIn";

function Timeline() {
  const [sortOrder, setSortOrder] = useState("newest");

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "newest" ? "oldest" : "newest");
  };

  const sortedProjectsData = [...projectsData].sort((a, b) => {
    return sortOrder === "newest"
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <DropIn>
        <div className="button-container">
    
        <Button  onClick={toggleSortOrder}  variant="primary" className="m-1">
        <h1>My Project Timelime</h1>
        </Button>
        </div>
        
        <p style={{ color: "white" }}>
        The timeline of my previous work.
        </p>
        
        
        <br></br>
        
        <br></br>
          {/* <h1 className="project-heading">
            My Project <strong className="purple">Timeline</strong>
          </h1>
            <p style={{ color: "white" }}>
              The timeline of my previous work.
            </p>
            <Button onClick={toggleSortOrder} style={{margin: "20px"}}>
              {sortOrder === "newest" ? "↑" : "↓"}
            </Button>
          <br></br>

          <br></br> */}
        </DropIn>

        <DropIn>
          <div className="timeline">
            {sortedProjectsData.map((project, index) => (
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
