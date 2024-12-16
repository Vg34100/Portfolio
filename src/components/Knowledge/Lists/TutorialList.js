// components/Knowledge/Lists/TutorialList.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch, BsLock, BsClock, BsBarChart } from "react-icons/bs";
import Particle from "../../Particle";
import DropIn from "../../DropIn";

function TutorialList() {
  const [searchTerm, setSearchTerm] = useState("");

  const tutorials = [
    {
      title: "Getting Started with Game Development",
      description: "Learn the fundamentals of game development with practical examples",
      path: "/knowledge/tutorials/game-dev-basics",
      difficulty: "Beginner",
      duration: "2 hours",
      progress: 0,
      isAvailable: false
    },
    {
      title: "Advanced Shader Programming",
      description: "Deep dive into creating custom shaders for games",
      path: "/knowledge/tutorials/shader-programming",
      difficulty: "Advanced",
      duration: "4 hours",
      progress: 0,
      isAvailable: false
    },
    {
      title: "Game AI Implementation",
      description: "Learn to create intelligent game agents using various AI techniques",
      path: "/knowledge/tutorials/game-ai",
      difficulty: "Intermediate",
      duration: "3 hours",
      progress: 0,
      isAvailable: false
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial =>
    tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return '#26c2de';
      case 'intermediate': return '#dea726';
      case 'advanced': return '#de2626';
      default: return '#26c2de';
    }
  };

  return (
    <Container fluid className="knowledge-section">
      <Particle />
      <Container>
        <DropIn>
          <h1 className="text-center mb-5 text-white">
            Interactive <strong className="purple">Tutorials</strong>
          </h1>

          <Row className="justify-content-center mb-4">
            <Col md={6}>
              <div className="position-relative">
                <BsSearch className="position-absolute"
                  style={{left: "8px", top:"25%", color: "#26c2de" }}
                  />
                <Form.Control
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="knowledge-search ps-4"
                />
              </div>
            </Col>
          </Row>

          <Row>
            {filteredTutorials.map((tutorial, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <DropIn>
                  <Card className="knowledge-card h-100">
                    {tutorial.isAvailable ? (
                      <Link to={tutorial.path} style={{ textDecoration: 'none' }}>
                        <Card.Body className="text-white">
                          <Card.Title className="purple">{tutorial.title}</Card.Title>
                          <Card.Text>{tutorial.description}</Card.Text>
                          <div className="mt-3 d-flex gap-3">
                            <div className="d-flex align-items-center">
                              <BsBarChart className="me-2" color={getDifficultyColor(tutorial.difficulty)} />
                              <span>{tutorial.difficulty}</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <BsClock className="me-2" color="#26c2de" />
                              <span>{tutorial.duration}</span>
                            </div>
                          </div>
                          {tutorial.progress > 0 && (
                            <div className="mt-3">
                              <ProgressBar 
                                now={tutorial.progress} 
                                label={`${tutorial.progress}%`}
                                variant="info"
                              />
                            </div>
                          )}
                        </Card.Body>
                      </Link>
                    ) : (
                      <Card.Body className="text-white position-relative">
                        <div className="coming-soon-overlay">
                          <div className="text-center">
                            <BsLock size={40} className="mb-2" />
                            <h4>Coming Soon</h4>
                          </div>
                        </div>
                        <div className="opacity-50">
                          <Card.Title>{tutorial.title}</Card.Title>
                          <Card.Text>{tutorial.description}</Card.Text>
                          <div className="mt-3 d-flex gap-3">
                            <div className="d-flex align-items-center">
                              <BsBarChart className="me-2" />
                              <span>{tutorial.difficulty}</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <BsClock className="me-2" />
                              <span>{tutorial.duration}</span>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    )}
                  </Card>
                </DropIn>
              </Col>
            ))}
          </Row>
        </DropIn>
      </Container>
    </Container>
  );
}

export default TutorialList;