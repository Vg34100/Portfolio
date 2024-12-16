// components/Knowledge/Tutorials/GameDevBasics.js
import React, { useState } from "react";
import { Container, Row, Col, Card, ProgressBar, Button } from "react-bootstrap";
import { BsCheckCircle, BsClock, BsBarChart } from "react-icons/bs";
import Particle from "../../Particle";
import DropIn from "../../DropIn";

function GameDevBasics() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      title: "Introduction to Game Development",
      content: `This tutorial will guide you through the basics of game development.
      We'll cover core concepts, tools, and practical examples.`,
      completed: false
    },
    {
      title: "Setting Up Your Development Environment",
      content: `Learn how to set up your development environment with the necessary
      tools and frameworks.`,
      completed: false
    },
    {
      title: "Your First Game Loop",
      content: `Understanding the game loop and how to implement basic game logic.`,
      completed: false
    }
  ];

  return (
    <Container fluid className="knowledge-section">
      <Particle />
      <Container>
        <DropIn>
          <Row>
            <Col md={3}>
              <Card className="knowledge-card sticky-top" style={{ top: "100px" }}>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <BsBarChart className="me-2" color="#26c2de" />
                      <span className="text-white">Beginner</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <BsClock className="me-2" color="#26c2de" />
                      <span className="text-white">2 hours</span>
                    </div>
                  </div>
                  <ProgressBar 
                    now={Math.round((sections.filter(s => s.completed).length / sections.length) * 100)}
                    variant="info"
                    className="mb-3"
                  />
                  <div className="text-white">
                    {sections.map((section, index) => (
                      <div
                        key={index}
                        className={`sidebar-link ${currentSection === index ? 'active' : ''} 
                          ${section.completed ? 'text-success' : ''}`}
                        onClick={() => setCurrentSection(index)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="d-flex align-items-center">
                          {section.completed && <BsCheckCircle className="me-2" />}
                          {section.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={9}>
              <Card className="knowledge-card">
                <Card.Body className="text-white">
                  <h2 className="purple mb-4">{sections[currentSection].title}</h2>
                  <div className="mb-4">
                    {sections[currentSection].content}
                  </div>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="outline-info"
                      disabled={currentSection === 0}
                      onClick={() => setCurrentSection(prev => prev - 1)}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="info"
                      onClick={() => {
                        if (currentSection < sections.length - 1) {
                          setCurrentSection(prev => prev + 1);
                        }
                        sections[currentSection].completed = true;
                      }}
                    >
                      {currentSection === sections.length - 1 ? 'Complete' : 'Next'}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </DropIn>
      </Container>
    </Container>
  );
}

export default GameDevBasics;