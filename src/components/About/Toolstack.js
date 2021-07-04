import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudio, SiVisualstudiocode } from "react-icons/si";
import { FaSourcetree, FaGithub } from "react-icons/fa";
import { DiGit } from "react-icons/di";

function Toolstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        marginBottom: '50px',
      }}
    >
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <FaSourcetree />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Toolstack;
