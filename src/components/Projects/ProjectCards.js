import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsYoutube } from "react-icons/bs";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
import { getTechIcon } from "../utils/getTechIcons";


function ProjectCards(props) {
  const [isFlipped, setIsFlipped] = useState(false);

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
          <Card.Body
          // style={{
          //   backfaceVisibility: "hidden",
          //   position: "absolute",
          //   top: 0,
          //   left: 0,
          //   width: "100%",
          //   height: "100%",
          //   backgroundColor: "#f8f9fa",
          //   transform: "rotateY(180deg)",
          //   overflowY: "auto",
          // }}
        >
          <Card.Title
            className="purple"
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            {props.title} - More Info
          </Card.Title>
          <div className="card-info">
            <p>
              <strong>Skills Used:</strong> {props.skillsUsed.join(", ")}
            </p>
            <p>
              <strong>Team Size:</strong> {props.teamSize}
            </p>
            <p>
              <strong>Things Learned:</strong>{" "}
              {props.thingsLearned.join(", ")}
            </p>
            <p>
              <strong>Contribution Percentage:</strong>{" "}
              {props.contributionPercentage}%
            </p>
            <div>
              <strong>Skills Correlation:</strong>
              {props.skillsCorrelation.map((skill, index) => (
                <ProgressBar
                  key={index}
                  progress={skill.level}
                  label={skill.name}
                />
              ))}
            </div>
            {/* <Link to={`${props.moreInfoLink}`}>
                <Button
                  variant="primary"
                  className="mt-3"
                  onClick={(e) => e.stopPropagation()} // Prevent card flip
                >
                  More Info
                </Button>
              </Link>
               */}
              <Link to={props.moreInfoLink} onClick={(e) => e.stopPropagation()}>
                <Button
                  variant="primary"
                  className="mt-3"
                >
                  More Info
                </Button>
              </Link>
          </div>
        </Card.Body>
        )}
      </Card>
    </div>
  );
}

export default ProjectCards;
