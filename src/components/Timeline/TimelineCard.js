import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { SiUnrealengine, SiMonogames, SiCss3, SiPhp, SiJavascript, SiCplusplus, SiC, SiPython } from "react-icons/si";

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

function TimelineCard(props) {
  return (
    <Card className="timeline-card-view">
      <Card.Body>
        <Card.Title className="purple" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{props.title}</Card.Title>
        {props.imgPath && <Card.Img variant="top" src={props.imgPath} alt="card-img" />}
        <Card.Subtitle className="mb-2 text-muted">{new Date(props.date).toLocaleDateString()}</Card.Subtitle>
        <Card.Text>
          {props.description}
        </Card.Text>
        <div className="card-tech-icons-container">
          {props.technologies && props.technologies.map((tech, index) => (
            <span key={index} className="card-tech-icon">
              {getTechIcon(tech)}
            </span>
          ))}
        </div>
        <div className="button-container">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" className="m-1">
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
    </Card>
  );
}

export default TimelineCard;
