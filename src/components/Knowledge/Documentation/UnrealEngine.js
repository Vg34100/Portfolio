// components/Knowledge/Documentation/UnrealEngine.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { BsChevronRight, BsChevronDown, BsSearch } from "react-icons/bs";
import Particle from "../../Particle";
import DropIn from "../../DropIn";

function UnrealEngine() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("introduction");
  const [expandedSections, setExpandedSections] = useState(["getting-started"]);

  const content = {
    "getting-started": {
      title: "Getting Started",
      sections: {
        "introduction": {
          title: "Course Introduction",
          content: `Welcome to Unreal Engine Fundamentals! This course will cover everything 
          you need to know to start developing with Unreal Engine.`
        },
        "installation": {
          title: "Installation Guide",
          content: `Step-by-step guide for installing Unreal Engine and setting up your 
          development environment.`
        },
        "first-project": {
          title: "Creating Your First Project",
          content: `Learn how to create and set up your first Unreal Engine project, 
          including basic project settings and workspace layout.`
        }
      }
    },
    "basics": {
      title: "Engine Basics",
      sections: {
        "interface": {
          title: "Interface Overview",
          content: `Understanding the Unreal Editor interface, including the viewport, 
          content browser, and various panels.`
        },
        "actors": {
          title: "Working with Actors",
          content: `Introduction to Actors, the fundamental objects that can be placed 
          in your game world.`
        }
      }
    },
    "blueprints": {
      title: "Blueprint System",
      sections: {
        "intro-bp": {
          title: "Introduction to Blueprints",
          content: `Understanding the visual scripting system in Unreal Engine.`
        },
        "variables": {
          title: "Variables and Data Types",
          content: `Working with different types of variables in Blueprint system.`
        }
      }
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const filteredContent = Object.entries(content).reduce((acc, [key, category]) => {
    const filteredSections = Object.entries(category.sections).filter(([_, section]) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (filteredSections.length > 0) {
      acc[key] = {
        ...category,
        sections: Object.fromEntries(filteredSections)
      };
    }
    return acc;
  }, {});

  return (
    <Container fluid className="knowledge-section">
      <Particle />
      <Container>
        <DropIn>
          <h1 className="text-center mb-5">
            Unreal Engine <strong className="purple">Fundamentals</strong>
          </h1>
          
          <Row>
            <Col md={3}>
              <div className="sticky-top" style={{ top: "100px" }}>
                <Card className="knowledge-card">
                  <Form.Group className="mb-3">
                    <div className="position-relative">
                      <BsSearch className="position-absolute" 
                        style={{ top: "12px", left: "12px", color: "#26c2de" }} 
                      />
                      <Form.Control
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="knowledge-search ps-4"
                      />
                    </div>
                  </Form.Group>

                  <div className="docs-navigation">
                    {Object.entries(filteredContent).map(([key, category]) => (
                      <div key={key} className="mb-3">
                        <div
                          className="d-flex align-items-center cursor-pointer text-white"
                          onClick={() => toggleSection(key)}
                          style={{ cursor: 'pointer' }}
                        >
                          {expandedSections.includes(key) ? 
                            <BsChevronDown className="me-2" /> : 
                            <BsChevronRight className="me-2" />
                          }
                          <h6 className="mb-0">{category.title}</h6>
                        </div>
                        
                        {expandedSections.includes(key) && (
                          <div className="ms-4 mt-2">
                            {Object.entries(category.sections).map(([sectionKey, section]) => (
                              <div
                                key={sectionKey}
                                className={`sidebar-link ${activeSection === sectionKey ? 'active' : ''}`}
                                onClick={() => setActiveSection(sectionKey)}
                                style={{ cursor: 'pointer' }}
                              >
                                {section.title}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </Col>

            <Col md={9}>
              <Card className="knowledge-card">
                {Object.entries(filteredContent).map(([_, category]) => 
                  Object.entries(category.sections).map(([sectionKey, section]) => 
                    activeSection === sectionKey && (
                      <div key={sectionKey}>
                        <h2 className="purple mb-4">{section.title}</h2>
                        <div className="text-white">
                          {section.content}
                        </div>
                      </div>
                    )
                  )
                )}
              </Card>
            </Col>
          </Row>
        </DropIn>
      </Container>
    </Container>
  );
}

export default UnrealEngine;