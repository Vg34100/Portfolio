import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiUnrealengine, SiMonogames } from "react-icons/si";
import ToolCard from "./ToolCard";



function GameEngines() {
	return (
	<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		{/* <Col xs={4} md={3} className="tech-icons">
			<SiUnrealengine />
		</Col>
		<Col xs={4} md={3} className="tech-icons">
			<SiMonogames />
		</Col> */}
		      <ToolCard Icon={SiUnrealengine} projects={10} years={5} progress={80} />
			  <ToolCard Icon={SiMonogames} projects={8} years={4} progress={70} />
	</Row>
	);
}

export default GameEngines;
