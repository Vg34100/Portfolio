import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { SiUnrealengine, SiMonogames, SiCss3, SiPhp, SiJavascript, SiCplusplus, SiC, SiPython } from "react-icons/si";

function ProjectCards(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const getTechIcon = (tech) => {
    switch (tech) {
      case "unreal":
        return <SiUnrealengine />;
      case "monogame":
        return <SiMonogames />;
      case "css":
        return <SiCss3 />;
      case "php":
        return <SiPhp />;
      case "javascript":
        return <SiJavascript />;
      case "cpp":
        return <SiCplusplus />;
      case "c":
        return <SiC />;
      case "python":
        return <SiPython />;
      default:
        return null;
    }
  };

  return (
    <div className={`project-card ${isFlipped ? "flipped" : ""}`} onClick={() => setIsFlipped(!isFlipped)}>
      <Card className="project-card-view">
        {!isFlipped ? (
          <>
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
              <Card.Title className="purple" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{props.title}</Card.Title>
              <div className="card-description">
                {props.description}
              </div>
              <div className="card-tech-icons-container">
                {props.technologies && props.technologies.map((tech, index) => (
                  <span key={index} className="card-tech-icon">
                    {getTechIcon(tech)}
                  </span>
                ))}
              </div>
              <div className="button-container">
                {props.ghLink && (
                  <Button variant="primary" href={props.ghLink} target="_blank" className="m-1" >
                    <BsGithub />
                  </Button>
                )}
                {props.demoLink && (
                  <Button variant="primary" href={props.demoLink} target="_blank" className="m-1">
                    <CgWebsite />
                  </Button>
                )}
                {props.videoLink && (
                  <Button variant="primary" href={props.videoLink} target="_blank" className="m-1">
                    <BsYoutube />
                  </Button>
                )}
              </div>
            </Card.Body>
          </>
        ) : (
          <Card.Body>
            <Card.Title className="purple" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{props.title} - More Info</Card.Title>
            <div className="card-info">
              <p><strong>Skills Used:</strong> {props.skillsUsed.join(', ')}</p>
              <p><strong>Team Size:</strong> {props.teamSize}</p>
              <p><strong>Things Learned:</strong> {props.thingsLearned.join(', ')}</p>
              <p><strong>Contribution Percentage:</strong> {props.contributionPercentage}%</p>
              <p><strong>Skills Correlation:</strong></p>
              <ul>
                {props.skillsCorrelation.map((skill, index) => (
                  <li key={index}>{skill.name}: {skill.level}%</li>
                ))}
              </ul>
              <Button variant="primary" href={props.moreInfoLink} target="_blank" className="m-1">
                More Info
              </Button>
            </div>
          </Card.Body>
        )}
      </Card>
    </div>
  );
}

export default ProjectCards;
