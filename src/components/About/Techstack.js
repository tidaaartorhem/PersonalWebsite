import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
DiDotnet,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiAngular,
  SiAzuredevops,
  SiVuedotjs
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
    </Row>
  );
}

export default Techstack;
