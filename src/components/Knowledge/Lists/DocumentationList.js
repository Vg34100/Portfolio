// components/Knowledge/Lists/DocumentationList.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch, BsBook, BsLock } from "react-icons/bs";
import Particle from "../../Particle";
import DropIn from "../../DropIn";

function DocumentationList() {
  const [searchTerm, setSearchTerm] = useState("");

  const documentation = [
    {
      title: "Unreal Engine Fundamentals",
      description:
        "Comprehensive documentation of Unreal Engine basics and core concepts",
      path: "/knowledge/docs/unreal-engine-fundamentals",
      chapters: ["Getting Started", "Engine Basics", "Blueprint System"],
      isAvailable: true,
    },
    {
      title: "Foundations of UX Design",
      description:
        "In-depth documentation of Google's UX design principles and practices",
      path: "/knowledge/docs/foundations-ux-design",
      chapters: ["Basics", "Trends", "Design Sprints"],
      isAvailable: true,
    },
    {
      title: "Unreal Engine Level Design",
      description:
        "Documentation on level design principles and best practices in Unreal Engine",
      path: "/knowledge/docs/unreal-level-design",
      chapters: ["Unre", "Decision Making", "Behavior Trees"],
      isAvailable: false,
    },
  ];

  const filteredDocs = documentation.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Container fluid className="knowledge-section">
      <Particle />
      <Container>
        <DropIn>
          <h1 className="text-center mb-5 text-white">
            Technical <strong className="purple">Documentation</strong>
          </h1>

          <Row className="justify-content-center mb-4">
            <Col md={6}>
              <div className="position-relative">
                <BsSearch
                  className="position-absolute"
                  style={{ left: "8px", top: "25%", color: "#26c2de" }}
                />
                <Form.Control
                  type="text"
                  placeholder="Search documentation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="knowledge-search ps-4"
                />
              </div>
            </Col>
          </Row>

          <Row>
            {filteredDocs.map((doc, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <DropIn>
                  <Card className="knowledge-card h-100">
                    {doc.isAvailable ? (
                      <Link to={doc.path} style={{ textDecoration: "none" }}>
                        <Card.Body className="text-white">
                          <div className="d-flex align-items-center mb-3">
                            <BsBook
                              className="me-2"
                              size={24}
                              color="#26c2de"
                            />
                            <Card.Title className="purple mb-0">
                              {doc.title}
                            </Card.Title>
                          </div>
                          <Card.Text>{doc.description}</Card.Text>
                          <div className="mt-3">
                            <strong className="purple">Chapters:</strong>
                            <ul>
                              {doc.chapters.map((chapter, i) => (
                                <li key={i}>{chapter}</li>
                              ))}
                            </ul>
                          </div>
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
                          <div className="d-flex align-items-center mb-3">
                            <BsBook className="me-2" size={24} />
                            <Card.Title className="mb-0">
                              {doc.title}
                            </Card.Title>
                          </div>
                          <Card.Text>{doc.description}</Card.Text>
                          <div className="mt-3">
                            <strong>Chapters:</strong>
                            <ul>
                              {doc.chapters.map((chapter, i) => (
                                <li key={i}>{chapter}</li>
                              ))}
                            </ul>
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

export default DocumentationList;
