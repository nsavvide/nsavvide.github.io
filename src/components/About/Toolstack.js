import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiArchlinux,
  SiNeovim,
  SiTmux,
  SiAlacritty,
  SiFirefoxbrowser,
  SiGit,
  SiGnome,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiArchlinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNeovim />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTmux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAlacritty />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirefoxbrowser />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnome />
      </Col>
    </Row>
  );
}

export default Toolstack;
