// components/Knowledge/KnowledgeHub.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBook, BsDisplay, BsJournal, BsFileText } from "react-icons/bs";
import Particle from "../Particle";
import DropIn from "../DropIn";

function KnowledgeHub() {
  const sections = [
    {
      icon: <BsBook />,
      title: "Tutorials",
      description: "Step-by-step guides for various technologies and concepts",
      path: "/knowledge/tutorials",
      examples: ["Unreal Engine Fundamentals", "React Component Design", "Game Development Basics"]
    },
    {
      icon: <BsDisplay />,
      title: "Showcases",
      description: "Interactive demonstrations and visual explanations",
      path: "/knowledge/showcases",
      examples: ["Animation Principles", "Particle Systems", "Shader Effects"]
    },
    {
      icon: <BsJournal />,
      title: "Documentation",
      description: "Detailed notes and explanations from various courses",
      path: "/knowledge/docs",
      examples: ["Computer Graphics", "AI Fundamentals", "Game Engine Architecture"]
    },
    {
      icon: <BsFileText />,
      title: "Reference",
      description: "Quick reference guides and documentation",
      path: "/knowledge/reference",
      examples: ["C++ Best Practices", "Design Patterns", "Algorithm Complexities"]
    }
  ];

  return (
    <Container fluid className="knowledge-section">
      <Particle />
      <Container>
        <DropIn>
          <h1 className="text-center mb-5 text-white">
            Knowledge <strong className="purple">Hub</strong>
          </h1>
          
          <Row>
            {sections.map((section, index) => (
              <Col md={6} className="mb-4" key={index}>
                <DropIn>
                  <Link to={section.path} style={{ textDecoration: 'none' }}>
                    <Card className="knowledge-card">
                      <div className="text-center mb-4">
                        <span style={{ fontSize: '2.5em', color: '#26c2de' }}>
                          {section.icon}
                        </span>
                      </div>
                      <Card.Title className="text-center mb-3" style={{ color: '#26c2de', fontSize: '1.5em' }}>
                        {section.title}
                      </Card.Title>
                      <Card.Text className="text-white mb-4">
                        {section.description}
                      </Card.Text>
                      <div className="mt-auto">
                        <small className="text-muted">
                          Examples: {section.examples.join(', ')}
                        </small>
                      </div>
                    </Card>
                  </Link>
                </DropIn>
              </Col>
            ))}
          </Row>
        </DropIn>
      </Container>
    </Container>
  );
}

export default KnowledgeHub;