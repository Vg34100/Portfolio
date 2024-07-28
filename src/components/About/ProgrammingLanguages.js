import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiPython, DiJava, DiHtml5, DiCss3 } from "react-icons/di";

function ProgrammingLanguages() {
	return (
	<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		<Col xs={4} md={3} className="tech-icons">
			<CgCPlusPlus />
		</Col>
		<Col xs={4} md={3} className="tech-icons">
			<DiPython />
		</Col>
		<Col xs={4} md={3} className="tech-icons">
			<DiJava />
		</Col>
		<Col xs={4} md={3} className="tech-icons">
			<DiHtml5 />
		</Col>
		<Col xs={4} md={3} className="tech-icons">
			<DiCss3 />
		</Col>
		<Col xs={4} md={3} className="tech-icons">
			<DiJavascript1 />
		</Col>
	</Row>
	);
}

export default ProgrammingLanguages;
