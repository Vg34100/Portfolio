import React from "react";
import { Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiPython, DiJava, DiHtml5, DiCss3 } from "react-icons/di";
import ToolCard from "../ToolCard";

function ProgrammingLanguages() {
	return (
	<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		<ToolCard Icon={CgCPlusPlus} projects={6} years={3} progress={90} />
		<ToolCard Icon={DiPython} projects={7} years={6} progress={100} />
		<ToolCard Icon={DiJava} projects={4} years={1} progress={60} />
		<ToolCard Icon={DiHtml5} projects={2} years={5} progress={80} />
		<ToolCard Icon={DiCss3} projects={2} years={5} progress={50} />
		<ToolCard Icon={DiJavascript1} projects={2} years={5} progress={80} />
	</Row>
	);
}

export default ProgrammingLanguages;
