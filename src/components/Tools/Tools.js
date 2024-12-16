// components/Tools/Tools.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsRobot, BsSearch, BsCameraVideo, BsSortNumericDown } from "react-icons/bs";
import Particle from "../Particle";
import DropIn from "../DropIn";

function Tools() {
  const toolCategories = [
    {
      icon: <BsRobot />,
      title: "AI Tools",
      description: "Explore neural networks, genetic algorithms, fuzzy logic, and more with our interactive AI tools.",
      path: "/tools/ai",
      available: true,
      toolCount: 10
    },
    {
      icon: <BsSortNumericDown />,
      title: "Algorithm Visualization",
      description: "Interactive visualizations of sorting, pathfinding, and other algorithms.",
      path: "/tools/algorithms",
      available: false,
      toolCount: 0
    },
    {
      icon: <BsSearch />,
      title: "Data Analysis",
      description: "Tools for data processing, visualization, and statistical analysis.",
      path: "/tools/data",
      available: false,
      toolCount: 0
    },
    {
      icon: <BsCameraVideo />,
      title: "Animation Tools",
      description: "Create and manipulate animations with our suite of animation tools.",
      path: "/tools/animation",
      available: false,
      toolCount: 0
    }
  ];

  return (
    <Container fluid className="tool-section">
      <Particle />
      <Container>
        <DropIn>
          <h1 className="text-center mb-5">
            Interactive <strong className="purple">Tools</strong>
          </h1>
          
          <Row>
            {toolCategories.map((category, index) => (
              <Col md={6} className="mb-4" key={index}>
                <DropIn>
                  {category.available ? (
                    <Link to={category.path} style={{ textDecoration: 'none' }}>
                      <Card className="tool-category-card">
                        <span className="tool-count-badge">{category.toolCount} tools</span>
                        <div className="tool-category-icon">
                          {category.icon}
                        </div>
                        <Card.Title className="tool-category-title">
                          {category.title}
                        </Card.Title>
                        <Card.Text className="tool-category-description">
                          {category.description}
                        </Card.Text>
                      </Card>
                    </Link>
                  ) : (
                    <Card className="tool-category-card">
                      <div className="coming-soon-overlay">Coming Soon</div>
                      <div className="tool-category-icon">
                        {category.icon}
                      </div>
                      <Card.Title className="tool-category-title">
                        {category.title}
                      </Card.Title>
                      <Card.Text className="tool-category-description">
                        {category.description}
                      </Card.Text>
                    </Card>
                  )}
                </DropIn>
              </Col>
            ))}
          </Row>
        </DropIn>
      </Container>
    </Container>
  );
}

export default Tools;