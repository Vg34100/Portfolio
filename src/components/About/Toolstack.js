import React from "react";
import { Col, Row } from "react-bootstrap";
import {  SiAdobecreativecloud } from "react-icons/si";
import { DiGit, DiGithubBadge } from "react-icons/di";
import ToolCard from "./ToolCard";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={3} className="tech-icons">
        <SiAdobecreativecloud />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
			<DiGit />
		</Col>
		<Col xs={4} md={3} className="tech-icons">
			<DiGithubBadge />
		</Col> */}
      
        <ToolCard Icon={SiAdobecreativecloud} projects={10} years={5} progress={80} />
			  <ToolCard Icon={DiGit} projects={8} years={4} progress={70} />
        <ToolCard Icon={DiGithubBadge} projects={10} years={5} progress={80} />

    </Row>
  );
}

export default Toolstack;
