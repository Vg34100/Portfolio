// Projects.js
import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import SearchAndFilter from "./SearchAndFilter";
import Particle from "../Particle";
import { projectsData } from "./projectsData";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState([]);

  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projectsData.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet);
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
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
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>


        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
          allTechnologies={allTechnologies}
        />
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
        <Particle />
      </Container>
    </Container>
  );
}

export default Projects;