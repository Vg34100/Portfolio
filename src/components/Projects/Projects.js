// Projects.js
import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import SearchAndFilter from "./SearchAndFilter";
import Particle from "../Particle";
import { projectsData } from "../projectsData";
import DropIn from "../DropIn";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState([]);

  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    
    if (projectsData && Array.isArray(projectsData)) {
      projectsData.forEach(project => {
        if (project.imgPath && project.technologies && Array.isArray(project.technologies)) {
          project.technologies.forEach(tech => {
            techSet.add(tech); // Only add if project has an imgPath
          });
        }
      });
    }
    
    return Array.from(techSet);
  }, []);
  

  const filteredProjects = useMemo(() => {
    return projectsData
      .filter(project => project.imgPath) // Only include projects that have imgPath
      .filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTech = selectedTech.length === 0 || 
                            project.technologies.some(tech => selectedTech.includes(tech));
        return matchesSearch && matchesTech;
      });
  }, [searchTerm, selectedTech]);
  

  return (
    <Container fluid className="project-section">
      <Container>
        <DropIn>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>

          <div>
          <SearchAndFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
            allTechnologies={allTechnologies}
          />
          </div>

        </DropIn>

        
        <Row style={{ justifyContent: "center", paddingBottom: "0px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <DropIn>
                <div>
                  <ProjectCard {...project} />
                </div>
              </DropIn>
            </Col>
          ))}
        </Row>
        <Particle />
      </Container>
    </Container>
  );
}

export default Projects;