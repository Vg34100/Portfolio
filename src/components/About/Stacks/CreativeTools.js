import React from "react";
import { Row } from "react-bootstrap";
import { SiAdobepremierepro, SiAdobephotoshop, SiAdobeaftereffects } from "react-icons/si";
import ToolCard from "../ToolCard";

function CreativeTools() {
	return (
	<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		<ToolCard Icon={SiAdobephotoshop} projects={10} years={4} progress={70} />
		<ToolCard Icon={SiAdobepremierepro} projects={10} years={5} progress={90} />
		<ToolCard Icon={SiAdobeaftereffects} projects={4} years={3} progress={60} />
	</Row>
	);
}

export default CreativeTools;
