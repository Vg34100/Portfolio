// components/Knowledge/Reference/CppPatterns.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { BsSearch, BsBookmark } from "react-icons/bs";
import Particle from "../../Particle";
import DropIn from "../../DropIn";

function CppPatterns() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activePattern, setActivePattern] = useState("Singleton");

  const patterns = [
    {
      title: "Singleton",
      category: "Creational Patterns",
      description: "Ensures a class has only one instance and provides a global point of access to it.",
      example: `class Singleton {
  private:
    static Singleton* instance;
    Singleton() {}
  
  public:
    static Singleton* getInstance() {
      if (instance == nullptr) {
        instance = new Singleton();
      }
      return instance;
    }
};`,
      usage: "Use when exactly one instance of a class is needed throughout the system.",
      pros: ["Ensures single instance", "Global access point", "Lazy initialization"],
      cons: ["Can make testing difficult", "Global state", "Thread safety concerns"]
    },
    {
      title: "Observer",
      category: "Behavioral Patterns",
      description: "Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.",
      example: `class Observer {
  public:
    virtual void update(const string& message) = 0;
};

class Subject {
  private:
    vector<Observer*> observers;
  
  public:
    void attach(Observer* observer) {
      observers.push_back(observer);
    }
    
    void notify(const string& message) {
      for(auto observer : observers) {
        observer->update(message);
      }
    }
};`,
      usage: "Use when changes to one object require changing others, and you don't know how many objects need to be changed.",
      pros: ["Loose coupling", "Dynamic relationships", "Broadcast communication"],
      cons: ["Memory leaks if not managed", "Unexpected updates", "Update order dependencies"]
    }
  ];

  const filteredPatterns = patterns.filter(pattern =>
    pattern.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pattern.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pattern.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentPattern = patterns.find(p => p.title === activePattern);

  return (
    <Container fluid className="knowledge-section">
      <Particle />
      <Container>
        <DropIn>
          <Row>
            <Col md={3}>
              <Card className="knowledge-card sticky-top" style={{ top: "100px" }}>
                <Card.Body className="text-white">
                  <div className="position-relative mb-3">
                    <BsSearch className="position-absolute"
                      style={{ top: "12px", left: "12px", color: "#26c2de" }}
                    />
                    <Form.Control
                      type="text"
                      placeholder="Search patterns..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="knowledge-search ps-4"
                    />
                  </div>
                  <div>
                    {filteredPatterns.map((pattern, index) => (
                      <div
                        key={index}
                        className={`sidebar-link ${activePattern === pattern.title ? 'active' : ''}`}
                        onClick={() => setActivePattern(pattern.title)}
                        style={{ cursor: 'pointer' }}
                      >
                        {pattern.title}
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={9}>
              {currentPattern && (
                <Card className="knowledge-card">
                  <Card.Body className="text-white">
                    <div className="d-flex align-items-center mb-3">
                      <BsBookmark className="me-2" color="#26c2de" />
                      <h2 className="purple mb-0">{currentPattern.title}</h2>
                    </div>
                    <div className="mb-3">
                      <span className="badge bg-info me-2">{currentPattern.category}</span>
                    </div>
                    <p className="mb-4">{currentPattern.description}</p>

                    <h4 className="purple mb-3">When to Use</h4>
                    <p className="mb-4">{currentPattern.usage}</p>

                    <Row className="mb-4">
                      <Col md={6}>
                        <h4 className="purple mb-3">Pros</h4>
                        <ul>
                          {currentPattern.pros.map((pro, index) => (
                            <li key={index}>{pro}</li>
                          ))}
                        </ul>
                      </Col>
                      <Col md={6}>
                        <h4 className="purple mb-3">Cons</h4>
                        <ul>
                          {currentPattern.cons.map((con, index) => (
                            <li key={index}>{con}</li>
                          ))}
                        </ul>
                      </Col>
                    </Row>

                    <h4 className="purple mb-3">Example Implementation</h4>
                    <pre className="bg-dark p-3 rounded">
                      <code className="text-white">
                        {currentPattern.example}
                      </code>
                    </pre>
                  </Card.Body>
                </Card>
              )}
            </Col>
          </Row>
        </DropIn>
      </Container>
    </Container>
  );
}

export default CppPatterns;