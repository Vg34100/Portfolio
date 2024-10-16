import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

// import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import ProgressBar from "../ProgressBar"; // Assuming ProgressBar is in Projects folder
import Particle from "../../Particle";
import DropIn from "../../DropIn";
import arcadiaImg from "../../../Assets/Projects/blog.png";


// Import global styles
import "../../../style.css";
import "../../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Arcadia() {
    const projectData = {
        imgPath: arcadiaImg,
        title: "Arcadia",
        date: "2024-05-02",
        description: "A game browsing website similar to Steam. Developed as part of a database systems project in a group of 3.",
        ghLink: "https://github.com/Vg34100/Arcadia",
        demoLink: "https://artemis.cs.csub.edu/~group3part2/Arcadia/index.php",
        technologies: ["php", "css", "javascript"],
        skillsUsed: ["Web Development", "Database Design", "UI/UX", "PHP", "MySQL"],
        teamSize: 3,
        thingsLearned: [
          "Database normalization and optimization",
          "PHP backend development",
          "Collaborative coding practices",
          "User authentication and session management"
        ],
        contributionPercentage: 33,
        skillsCorrelation: [
          { name: "Web Development", level: 80 },
          { name: "Database Management", level: 70 },
          { name: "Teamwork", level: 90 },
          { name: "PHP", level: 75 }
        ],
        moreInfoLink: "/arcadia"
    };
    

    return (
        <section>
          <Container fluid className="home-section" id="home">
            <Particle />
            <Container className="home-content">
            <DropIn>
        <Row>
        <Col md={6}>
        <img
        src={projectData.imgPath}
        alt={projectData.title}
        className="img-fluid rounded"
        />
        </Col>
        <Col md={6}>
        <h2 className="purple">{projectData.title}</h2>
        <p>{projectData.description}</p>
        <h5>Skills Used:</h5>
        <ul>
        {projectData.skillsUsed.map((skill, index) => (
            <li key={index}>{skill}</li>
        ))}
        </ul>
        <p>
        <strong>Team Size:</strong> {projectData.teamSize}
        </p>
        <p>
        <strong>Things Learned:</strong> {projectData.thingsLearned.join(", ")}
        </p>
        <p>
        <strong>Contribution Percentage:</strong> {projectData.contributionPercentage}%
        </p>
        <div>
        <strong>Skills Correlation:</strong>
        {projectData.skillsCorrelation.map((skill, index) => (
            <ProgressBar
            key={index}
            progress={skill.level}
            label={skill.name}
            />
        ))}
        </div>
        <div className="mt-3">
        {projectData.ghLink && (
            <Button
            variant="dark"
            href={projectData.ghLink}
            target="_blank"
            className="m-1"
            >
            <BsGithub /> GitHub
            </Button>
        )}
        {projectData.demoLink && (
            <Button
            variant="primary"
            href={projectData.demoLink}
            target="_blank"
            className="m-1"
            >
            <CgWebsite /> Live Demo
            </Button>
        )}
        {projectData.videoLink && (
            <Button
            variant="danger"
            href={projectData.videoLink}
            target="_blank"
            className="m-1"
            >
            <BsYoutube /> Video
            </Button>
        )}
        {projectData.moreInfoLink && (
            <Button
            variant="info"
            href={projectData.moreInfoLink}
            target="_blank"
            className="m-1"
            >
            More Info
            </Button>
        )}
        </div>
        </Col>
        </Row>
        </DropIn>
            </Container>
    
          </Container>
        </section>
      );

    // return (
    //     <Container fluid className="home-section">
    //     <Particle />
    //     <Container>
    
    //     </Container>
    //     </Container>
    // );
}

export default Arcadia;
