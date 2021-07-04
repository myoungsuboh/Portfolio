import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs } from "react-icons/di";
import {
  SiCsharp,
  SiOracle,
  SiDotNet,
  SiTypescript,
  SiJava,
  SiApachemaven,
  SiRedux
} from "react-icons/si";

function Techstack() {
  return (
    <>
      <Row
        style={{
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCsharp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDotNet />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiOracle />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiApachemaven />
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
