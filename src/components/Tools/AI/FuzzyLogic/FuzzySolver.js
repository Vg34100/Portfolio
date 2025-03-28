import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../../Particle";
import DropIn from "../../../DropIn";

function FuzzySolver() {
  return (
    <section>
      {/* <Container fluid className="home-section" id="home"> */}
        <Particle /> {/* Particle effect for consistency */}
        <Container className="home-content">
          <DropIn> 
            <Row className="justify-content-center">
              <Col md={10}>
                <div style={{ height: "80vh", width: "100%", position: "relative", zIndex: 1 }}>
                  <iframe
                    src="/tools/ai/fuzzy_solver.html"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                      borderRadius: "8px",
                      position: "relative",
                      zIndex: 2
                    }}
                    title="Fuzzy Solver"
                  />
                </div>
              </Col>
            </Row>
          </DropIn>
        </Container>
      {/* </Container> */}
    </section>
  );
}

export default FuzzySolver;
