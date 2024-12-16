// components/Tools/AI/GeneralAI.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCodeSquare } from "react-icons/bs";
import { FaDna, FaLightbulb, FaNetworkWired } from "react-icons/fa";

import Particle from "../../Particle";
import DropIn from "../../DropIn";

function GeneralAI() {
  const tools = {
    "Neural Networks": {
      icon: <FaNetworkWired />,
      items: [
        { name: "Bidirectional Network", path: "/tools/ai/neural/bidirectional", description: "Explore bidirectional neural networks" },
        { name: "Hopfield Network", path: "/tools/ai/neural/hopfield", description: "Work with Hopfield networks" },
        { name: "Perceptron", path: "/tools/ai/neural/perceptron", description: "Basic perceptron implementation" },
        { name: "Advanced Perceptron", path: "/tools/ai/neural/perceptron-advanced", description: "Advanced perceptron features" },
        { name: "Epoch Solver", path: "/tools/ai/neural/epoch", description: "Solve epoch-based problems" }
      ]
    },
    "Genetic Algorithms": {
      icon: <FaDna />,
      items: [
        { name: "Basic Genetics", path: "/tools/ai/genetic/basic", description: "Basic genetic algorithm implementation" },
        { name: "Custom Genetics", path: "/tools/ai/genetic/custom", description: "Customizable genetic algorithms" }
      ]
    },
    "Fuzzy Logic": {
      icon: <BsCodeSquare />,
      items: [
        { name: "Fuzzy Solver", path: "/tools/ai/fuzzy/basic", description: "Basic fuzzy logic solver" },
        { name: "Alternative Fuzzy Solver", path: "/tools/ai/fuzzy/alternate", description: "Alternative approach to fuzzy logic" }
      ]
    },
    "Logic Systems": {
      icon: <FaLightbulb />,
      items: [
        { name: "Inference Engine", path: "/tools/ai/logic/inference", description: "Logic inference system" }
      ]
    }
  };

  return (
    <Container fluid className="tool-section">
      <Particle />
      <Container>
        <DropIn>
          <h1 className="text-center mb-5 text-white">
            AI & Machine Learning <strong className="purple">Tools</strong>
          </h1>
          
          {Object.entries(tools).map(([category, { icon, items }]) => (
            <div key={category} className="mb-5">
              <DropIn>
                <Card className="tool-category-card mb-4">
                  <div className="tool-category-icon">
                    {icon}
                  </div>
                  <h2 className="tool-category-title">{category}</h2>
                  <Row>
                    {items.map((tool) => (
                      <Col md={6} xl={4} key={tool.path} className="mb-3">
                        <Link to={tool.path} style={{ textDecoration: 'none' }}>
                          <Card className="tool-item-card">
                            <Card.Title className="text-white">{tool.name}</Card.Title>
                            <Card.Text className="text-white-50">
                              {tool.description}
                            </Card.Text>
                          </Card>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </Card>
              </DropIn>
            </div>
          ))}
        </DropIn>
      </Container>
    </Container>
  );
}

export default GeneralAI;