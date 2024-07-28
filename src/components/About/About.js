import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import CreativeTools from "./CreativeTools";
import ProgrammingLanguages from "./ProgrammingLanguages";
import GameEngines from "./GameEngines";
import DevelopmentTools from "./DevelopmentTools";

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
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Learn More About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading-top">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <hr></hr>

        {/* <Techstack /> */}



        <h1 className="project-heading">
          <strong className="purple">Programming</strong> Languages
        </h1>
        <ProgrammingLanguages />

        <h1 className="project-heading">
          <strong className="purple">Development</strong> Tools
        </h1>
        <DevelopmentTools />

        <h1 className="project-heading">
          <strong className="purple">Creative</strong> Tools
        </h1>
        <CreativeTools />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Game</strong> Engines
        </h1>
        <GameEngines />

        <hr></hr>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
