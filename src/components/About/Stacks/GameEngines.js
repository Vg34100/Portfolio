import React from "react";
import { Row } from "react-bootstrap";
import { SiUnrealengine, SiMonogames } from "react-icons/si";
import ToolCard from "../ToolCard";

function GameEngines() {
	return (
	<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		<ToolCard Icon={SiUnrealengine} projects={5} years={5} progress={80} />
		<ToolCard Icon={SiMonogames} projects={1} years={1} progress={60} />
	</Row>
	);
}

export default GameEngines;