import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAdobepremierepro, SiAdobephotoshop, SiAdobeaftereffects } from "react-icons/si";

function CreativeTools() {
	return (
	<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		<Col xs={4} md={3} className="tech-icons">
			<SiAdobephotoshop />
		</Col>
		<Col xs={4} md={3} className="tech-icons">
			<SiAdobepremierepro />
		</Col>
		<Col xs={4} md={3} className="tech-icons">
			<SiAdobeaftereffects />
		</Col>
	</Row>
	);
}

export default CreativeTools;
