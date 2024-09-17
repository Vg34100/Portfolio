import React from "react";
import {Row } from "react-bootstrap";
import {  SiAdobecreativecloud } from "react-icons/si";
import { DiGit, DiGithubBadge } from "react-icons/di";
import ToolCard from "../ToolCard";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
				<ToolCard Icon={SiAdobecreativecloud} projects={10} years={5} progress={90} />
				<ToolCard Icon={DiGit} projects={23} years={2} progress={50} />
				<ToolCard Icon={DiGithubBadge} projects={23} years={2} progress={80} />
		</Row>
	);
}

export default Toolstack;
