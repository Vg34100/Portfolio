// components/Knowledge/Lists/ReferenceList.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch, BsLock, BsBookmark, BsClock } from "react-icons/bs";
import Particle from "../../Particle";
import DropIn from "../../DropIn";

function ReferenceList() {
  const [searchTerm, setSearchTerm] = useState("");

  const references = [
    {
      title: "C++ Design Patterns",
      description: "Quick reference guide for common design patterns in C++",
      path: "/knowledge/reference/cpp-patterns",
      category: "Programming",
      lastUpdated: "2024-12-15",
      isAvailable: false
    },
    {
      title: "Unity vs Unreal Comparison",
      description: "Comprehensive comparison of Unity and Unreal Engine features",
      path: "/knowledge/reference/engine-comparison",
      category: "Game Engines",
      lastUpdated: "2024-12-14",
      isAvailable: false
    },
    {
      title: "Algorithm Complexity Guide",
      description: "Reference for time and space complexity of common algorithms",
      path: "/knowledge/reference/algorithm-complexity",
      category: "Computer Science",
      lastUpdated: "2024-12-13",
      isAvailable: false
    }
  ];

  const filteredReferences = references.filter(ref =>
    ref.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ref.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ref.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid className="knowledge-section">
      <Particle />
      <Container>
        <DropIn>
          <h1 className="text-center mb-5 text-white">
            Quick <strong className="purple">Reference</strong> Guides
          </h1>

          <Row className="justify-content-center mb-4">
            <Col md={6}>
              <div className="position-relative">
                <BsSearch className="position-absolute"
                  style={{left: "8px", top:"25%", color: "#26c2de" }}
                  />
                <Form.Control
                  type="text"
                  placeholder="Search references..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="knowledge-search ps-4"
                />
              </div>
            </Col>
          </Row>

          <Row>
            {filteredReferences.map((ref, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <DropIn>
                  <Card className="knowledge-card h-100">
                    {ref.isAvailable ? (
                      <Link to={ref.path} style={{ textDecoration: 'none' }}>
                        <Card.Body className="text-white">
                          <div className="d-flex align-items-center mb-3">
                            <BsBookmark className="me-2" color="#26c2de" />
                            <Card.Title className="purple mb-0">{ref.title}</Card.Title>
                          </div>
                          <Card.Text>{ref.description}</Card.Text>
                          <div className="mt-3 d-flex justify-content-between">
                            <span className="badge bg-info">{ref.category}</span>
                            <div className="d-flex align-items-center">
                              <BsClock className="me-2" />
                              <small>Updated: {new Date(ref.lastUpdated).toLocaleDateString()}</small>
                            </div>
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
                            <BsBookmark className="me-2" />
                            <Card.Title className="mb-0">{ref.title}</Card.Title>
                          </div>
                          <Card.Text>{ref.description}</Card.Text>
                          <div className="mt-3 d-flex justify-content-between">
                            <span className="badge bg-secondary">{ref.category}</span>
                            <div className="d-flex align-items-center">
                              <BsClock className="me-2" />
                              <small>Updated: {new Date(ref.lastUpdated).toLocaleDateString()}</small>
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

export default ReferenceList;