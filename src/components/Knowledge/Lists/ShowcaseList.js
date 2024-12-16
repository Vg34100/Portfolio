// components/Knowledge/Lists/ShowcaseList.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { BsSearch, BsLock, BsBoxSeam, BsDroplet, BsBrush } from "react-icons/bs";
import Particle from "../../Particle";
import DropIn from "../../DropIn";

function ShowcaseList() {
  const [searchTerm, setSearchTerm] = useState("");

  const showcases = [
    {
      title: "Animation Principles",
      description: "Interactive demonstrations of the 12 principles of animation using C++ examples.",
      path: "/knowledge/showcases/animation-principles",
      topics: ["Animation", "Graphics", "C++"],
      icon: BsBoxSeam,
      date: "2024-12-15",
      isAvailable: false
    },
    {
      title: "Particle Systems",
      description: "Visual exploration of particle system implementations and effects.",
      path: "/knowledge/showcases/particle-systems",
      topics: ["Graphics", "Effects", "C++"],
      icon: BsDroplet,
      date: "2024-12-14",
      isAvailable: false
    },
    {
      title: "Shader Effects",
      description: "Collection of custom shader implementations with visual examples.",
      path: "/knowledge/showcases/shader-effects",
      topics: ["Graphics", "Shaders", "HLSL"],
      icon: BsBrush,
      date: "2024-12-13",
      isAvailable: false
    }
  ];

  const filteredShowcases = showcases.filter(showcase =>
    showcase.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    showcase.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    showcase.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Container fluid className="knowledge-section">
      <Particle />
      <Container>
        <DropIn>
          <h1 className="text-center mb-5 text-white">
            Technical <strong className="purple">Showcases</strong>
          </h1>

          <Row className="justify-content-center mb-4">
            <Col md={6}>
              <div className="position-relative">
                <BsSearch className="position-absolute"
                  style={{left: "8px", top:"25%", color: "#26c2de" }}
                />
                <Form.Control
                  type="text"
                  placeholder="Search showcases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="knowledge-search ps-4"
                />
              </div>
            </Col>
          </Row>

          <Row>
            {filteredShowcases.map((showcase, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <DropIn>
                  <Card className="knowledge-card h-100 position-relative">
                    <div className="coming-soon-overlay">
                      <div className="text-center">
                        <BsLock size={40} className="mb-2" />
                        <h4>Coming Soon</h4>
                      </div>
                    </div>
                    <div className="opacity-50">
                      <div className="d-flex justify-content-center align-items-center py-5" 
                           style={{ background: 'rgba(38, 194, 222, 0.1)' }}>
                        <showcase.icon size={100} color="#26c2de" />
                      </div>
                      <Card.Body>
                        <Card.Title className="purple">{showcase.title}</Card.Title>
                        <Card.Text className="text-white">
                          {showcase.description}
                        </Card.Text>
                        <div className="d-flex flex-wrap gap-2 mt-3">
                          {showcase.topics.map((topic, i) => (
                            <span
                              key={i}
                              className="badge"
                              style={{
                                backgroundColor: 'rgba(38, 194, 222, 0.2)',
                                color: '#26c2de',
                                padding: '0.5em 1em',
                                borderRadius: '15px'
                              }}
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </Card.Body>
                      <Card.Footer className="text-muted">
                        {new Date(showcase.date).toLocaleDateString()}
                      </Card.Footer>
                    </div>
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

export default ShowcaseList;