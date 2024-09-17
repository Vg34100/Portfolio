import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Stacks/Toolstack";
import CreativeTools from "./Stacks/CreativeTools";
import ProgrammingLanguages from "./Stacks/ProgrammingLanguages";
import GameEngines from "./Stacks/GameEngines";
import DevelopmentTools from "./Stacks/DevelopmentTools";
import DropIn from "../DropIn";
import "./About.css"

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <DropIn>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Learn More About <strong className="purple">Me</strong>
            </h1>
            </DropIn>
            <Aboutcard />

          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <DropIn>
              <img src={laptopImg} alt="about" className="img-fluid" />
            </DropIn>
          </Col>
        </Row>
        <DropIn>
        <h1 className="project-heading-top">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <hr></hr>


        <h1 className="project-heading">
          <strong className="purple">Programming</strong> Languages
        </h1>
        <div>
          <ProgrammingLanguages />
        </div>

        <h1 className="project-heading">
          <strong className="purple">Development</strong> Tools
        </h1>
        <div>
          <DevelopmentTools />
        </div>

        <h1 className="project-heading">
          <strong className="purple">Creative</strong> Tools
        </h1>
        <div>
          <CreativeTools />
        </div>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <div>
          <Toolstack />
        </div>

        <h1 className="project-heading">
          <strong className="purple">Game</strong> Engines
        </h1>
        <div>
          <GameEngines />

        </div>

        <hr></hr>

        <Github />

        </DropIn>
      </Container>
    </Container>
  );
}

export default About;
