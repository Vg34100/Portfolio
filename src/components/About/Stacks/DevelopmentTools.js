import React from "react";
import { Row } from "react-bootstrap";
import { SiVisualstudiocode, SiVisualstudio, SiIntellijidea } from "react-icons/si";
import ToolCard from "../ToolCard";

function DevelopmentTools() {
	return (
	<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		<ToolCard Icon={SiIntellijidea} projects={4} years={1} progress={70} />
		<ToolCard Icon={SiVisualstudio} projects={15} years={6} progress={100} />
		<ToolCard Icon={SiVisualstudiocode} projects={2} years={2} progress={60} />
	</Row>
	);
}

export default DevelopmentTools;
