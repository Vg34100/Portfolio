import React from "react";
import { Col, Row } from "react-bootstrap";
import {  SiAdobecreativecloud } from "react-icons/si";
import { DiGit, DiGithubBadge } from "react-icons/di";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiAdobecreativecloud />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
			<DiGit />
		</Col>
		<Col xs={4} md={3} className="tech-icons">
			<DiGithubBadge />
		</Col>
    </Row>
  );
}

export default Toolstack;
