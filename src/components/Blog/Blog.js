import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./../Projects/ProjectCards";
import Particle from "../Particle";
import Blog1 from "../../Assets/Projects/Blog1.jpeg"
import leaf from "../../Assets/Projects/leaf.png";
import Billing from "../../Assets/Projects/Billing.png";
import ChallengeShip from "../../Assets/Projects/ChallengeShip.png";
import ai from "../../Assets/Projects/ai.png";
import SO from "../../Assets/Projects/SO.png";
import tic from "../../Assets/Projects/tic.png";
import notify from "../../Assets/Projects/notify.png"
import cah from "../../Assets/Projects/cah.png"
import foodPrint from "../../Assets/Projects/foodPrint.png"
import MLModel from "../../Assets/ML_Model.png"
function Blog() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                   Thoughts I love <strong className="purple">Sharing </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few blogs I've recently written.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Blog1}
                            title="Enhancing User Stories with AI"
                            description=""
                            isBlog={false}
                            ghLink="https://www.notion.so/moerr/Enhancing-User-Stories-with-AI-8d68a68cd15d4d758fc6ac66df0c8b33"
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Blog;
