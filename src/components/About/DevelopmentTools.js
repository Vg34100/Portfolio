import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiVisualstudio, SiIntellijidea } from "react-icons/si";

function DevelopmentTools() {
	return (
	<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		<Col xs={4} md={3} className="tech-icons">
			<SiIntellijidea />
		</Col>
		<Col xs={4} md={3} className="tech-icons">
			<SiVisualstudio />
		</Col>
		<Col xs={4} md={3} className="tech-icons">
			<SiVisualstudiocode />
		</Col>
	</Row>
	);
}

export default DevelopmentTools;
