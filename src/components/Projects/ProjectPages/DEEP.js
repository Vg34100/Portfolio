import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

// import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import ProgressBar from "../ProgressBar"; // Assuming ProgressBar is in Projects folder
import Particle from "../../Particle";
import DropIn from "../../DropIn";
import deepImg from "../../../Assets/Projects/deep.png";


// Import global styles
import "../../../style.css";
import "../../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function DEEP() {
    const projectData = {
      imgPath: deepImg,
      title: "DEEP",
      date: "2023-12-02",
      description: "A roguelike pixel art game with automatic floor creation and enemy combat. Developed as part of a software engineering project in a group.",
      ghLink: "https://github.com/Vg34100/DEEP",
      technologies: ["cpp", "c"],
      skillsUsed: ["Game Development", "C++", "Procedural Generation", "AI Programming"],
      teamSize: 4,
      thingsLearned: [
        "Game architecture design",
        "Procedural content generation",
        "Basic AI implementation for enemies",
        "Version control with Git"
      ],
      contributionPercentage: 25,
      skillsCorrelation: [
        { name: "C++ Programming", level: 85 },
        { name: "Game Development", level: 70 },
        { name: "Algorithm Design", level: 75 },
        { name: "Software Engineering", level: 80 }
      ],
      moreInfoLink: "/deep"
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

export default DEEP;
