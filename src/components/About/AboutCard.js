import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const reducedSpacingStyle = {
    wordSpacing: "-1.5px", // Reduces space between words
    letterSpacing: "-0.1px", // Slightly reduces space between letters
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", ...reducedSpacingStyle }}>
            Hi Everyone, I'm <span className="purple">Pablo Rodriguez </span>
            from <span className="purple">Bakersfield, California.</span>
            <br />
            I'm currently pursuing a BS in Computer Science at <span className="purple">California State University, Bakersfield</span>.
            <br />
            <br />
            Beyond coding, here are some activities I'm passionate about:
          </p>
          <ul style={reducedSpacingStyle}>
            <li className="about-activity">
              - Developing Video Games
            </li>
            <li className="about-activity">
              - Participating in Robotics Competitions
            </li>
            <li className="about-activity">
              - Creating Automation Tools
            </li>
          </ul>

          <p style={{ ...reducedSpacingStyle }}> 
            <span className="purple">
            "Programming isn’t about what you know; it’s about what you can figure out."{" "}
            </span>
          </p>
          <footer className="blockquote-footer" style={reducedSpacingStyle}>Chris Pine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;