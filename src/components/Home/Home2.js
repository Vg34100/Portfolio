import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm passionate about technology and innovation, constantly pushing the boundaries of what's possible in Computer Science.
              <br />
              <br />I am proficient in languages like
              <i>
              <b className="purple"> Python, C++, C#, and JavaScript. </b>
              </i>
              <br />
              <br />
              My areas of interest include &nbsp;
              <i>
                <b className="purple">Game Development, Robotics, </b> and
                <b className="purple">
                  {" "}
                  Web Technologies.
                </b>
              </i>
              <br />
              <br />
              I love applying my skills to real-world projects, from
              <i>
                <b className="purple">
                  {" "}
                  3D printed fixed-wing aircraft
                </b>
              </i>
              &nbsp; to
              <i>
                <b className="purple"> innovative game prototypes</b>
              </i>
              . I'm also exploring
              <i>
                <b className="purple"> AI and Machine Learning </b>
              </i>
              to further expand my technological toolkit.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          <h1>CONNECT WITH ME</h1>
          <p>
          Feel free to <span className="purple">reach out </span>and explore collaboration opportunities
          </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Vg34100"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/VgLevelUp"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pablo-rodriguez-a25076298/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
