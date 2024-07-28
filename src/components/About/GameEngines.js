import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiUnrealengine, SiMonogames } from "react-icons/si";

function GameEngines() {
	return (
	<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		<Col xs={4} md={3} className="tech-icons">
			<SiUnrealengine />
		</Col>
		<Col xs={4} md={3} className="tech-icons">
			<SiMonogames />
		</Col>
	</Row>
	);
}

export default GameEngines;
