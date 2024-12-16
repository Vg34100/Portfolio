// components/Knowledge/Showcases/AnimationPrinciples.js
import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../../Particle";
import DropIn from "../../DropIn";

function AnimationPrinciples() {
  const [activeSection, setActiveSection] = useState(null);

  const principles = useMemo(() => [
    {
      id: "squash-stretch",
      title: "Squash and Stretch",
      description: "Objects appear to stretch when moving quickly and squash upon impact, giving them a sense of weight and flexibility.",
      implementation: "This example demonstrates a bouncing ball using C++ to control a sphere's scale. The ball stretches vertically when falling and squashes horizontally on impact.",
      videoUrl: "/api/placeholder/640/360", // Placeholder for actual video
      codeExample: `// Example C++ code
void Ball::Update(float deltaTime) {
  // Calculate vertical stretch based on velocity
  float verticalStretch = 1.0f + (velocity.y * 0.1f);
  SetScale(FVector(1.0f/verticalStretch, 1.0f/verticalStretch, verticalStretch));
}`
    },
    {
      id: "anticipation",
      title: "Anticipation",
      description: "Movements are prepared by an opposite initial motion, making the action more realistic and giving the viewer time to process what's happening.",
      implementation: "Using a simple cube, we demonstrate anticipation by making it crouch slightly before jumping upward.",
      videoUrl: "/api/placeholder/640/360",
      codeExample: `// Anticipation example
void Character::Jump() {
  // Anticipation phase
  PlayAnimation(crouchAnim, 0.2f);
  
  // Actual jump after delay
  FTimerHandle unusedHandle;
  GetWorldTimerManager().SetTimer(
    unusedHandle, this,
    &Character::ApplyJumpForce,
    0.2f, false
  );
}`
    },
    {
      id: "staging",
      title: "Staging",
      description: "Present ideas so they are completely clear, using position, camera angles, and timing to guide the viewer's attention.",
      implementation: "This demonstration shows how camera movement and object positioning can highlight key actions.",
      videoUrl: "/api/placeholder/640/360",
      codeExample: `// Camera staging example
void StagingCamera::FocusOnAction(AActor* target) {
  FVector idealPosition = target->GetActorLocation() - 
    target->GetActorForwardVector() * 300.0f +
    FVector(0, 0, 200.0f);
    
  // Smoothly move camera to ideal position
  SetActorLocation(FMath::VInterpTo(
    GetActorLocation(),
    idealPosition,
    GetWorld()->GetDeltaSeconds(),
    2.0f
  ));
}`
    }
  ], []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    principles.forEach(principle => {
      const element = document.getElementById(principle.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [principles]);

  return (
    <Container fluid className="knowledge-section text-white">
      <Particle />
      <Container>
        <DropIn>
          <h1 className="text-center mb-5 text-white">
            Animation <strong className="purple">Principles</strong>
          </h1>
          
          <Row className="mb-4">
            <Col md={3} className="d-none d-md-block">
              <div className="sticky-top" style={{ top: "100px" }}>
                <Card className="knowledge-card">
                  <h5 className="mb-3 purple">Quick Navigation</h5>
                  {principles.map(principle => (
                    <a
                      key={principle.id}
                      href={`#${principle.id}`}
                      className={`sidebar-link ${activeSection === principle.id ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(principle.id)?.scrollIntoView({
                          behavior: 'smooth'
                        });
                      }}
                    >
                      {principle.title}
                    </a>
                  ))}
                </Card>
              </div>
            </Col>

            <Col md={9}>
              {principles.map(principle => (
                <div 
                  key={principle.id} 
                  id={principle.id}
                  className="mb-5"
                >
                  <Card className="showcase-card">
                    <Card.Body>
                      <h2 className="purple mb-4">{principle.title}</h2>
                      
                      <div className="mb-4">
                        <img 
                          src={principle.videoUrl}
                          alt={principle.title}
                          className="showcase-video"
                        />
                      </div>

                      <div className="mb-4">
                        <h4 className="purple">Description</h4>
                        <p>{principle.description}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="purple">Implementation</h4>
                        <p>{principle.implementation}</p>
                      </div>

                      <div>
                        <h4 className="purple">Code Example</h4>
                        <pre className="bg-dark p-3 rounded">
                          <code className="text-white">
                            {principle.codeExample}
                          </code>
                        </pre>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Col>
          </Row>
        </DropIn>
      </Container>
    </Container>
  );
}

export default AnimationPrinciples;