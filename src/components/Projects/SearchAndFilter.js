// SearchAndFilter.js
import React from "react";
import { Form, InputGroup, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { SiUnrealengine, SiMonogames, SiCss3, SiPhp, SiJavascript, SiCplusplus, SiC, SiPython} from "react-icons/si";

const techIcons = {
	unreal: SiUnrealengine,
	monogame: SiMonogames,
	css: SiCss3,
	php: SiPhp,
	javascript: SiJavascript,
	cpp: SiCplusplus,
	c: SiC,
	python: SiPython,
};

function SearchAndFilter({ searchTerm, setSearchTerm, selectedTech, setSelectedTech, allTechnologies }) {
	const handleTechToggle = (tech) => {
		setSelectedTech(prevSelected =>
		prevSelected.includes(tech)
		? prevSelected.filter(t => t !== tech)
		: [...prevSelected, tech]
		);
	};
	
	return (
	<Form className="mb-4">
		<InputGroup className="mb-3">
			<Form.Control
			type="text"
			placeholder="Search projects..."
			value={searchTerm}
			onChange={(e) => setSearchTerm(e.target.value)}
			className="search-input"
			/>
		</InputGroup>
		<div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
			{allTechnologies.map(tech => {
				const IconComponent = techIcons[tech.toLowerCase()] || null;
				return (
				<OverlayTrigger
				key={tech}
				placement="top"
				overlay={<Tooltip id={`tooltip-${tech}`}>{tech}</Tooltip>}
				>
				<Button
				variant={selectedTech.includes(tech) ? "primary" : "outline-primary"}
				onClick={() => handleTechToggle(tech)}
				className={`tech-button ${selectedTech.includes(tech) ? "active" : ""}`}
				>
				{IconComponent ? <IconComponent /> : tech}
			</Button>
		</OverlayTrigger>
		);
	})}
</div>
</Form>
);
}

export default SearchAndFilter;