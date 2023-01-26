import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Collaborative Filtering on MovieLens"
              description="A research paper I wrote on comparing the performance of the Model Based Collaborative Filtering approach to the Memory Based Collaborative Filtering Approach"
              ghLink="https://github.com/tidaaartorhem/CollaborativeFiltering"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="TicTacToe"
              description="A Simple Online Version of the classic TicTacToe Game"
              ghLink="https://github.com/tidaaartorhem/tictactoe"
               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Cards Against Humanity"
              description="A Simple online version of the classic card game cards against humanity."
              ghLink="https://github.com/tidaaartorhem/CardsAgainstHumanity"
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="ChallengeShip"
              description="Challengeship is a mobile app that allows users to set daily goals, keep track of them, and share them with friends."
              ghLink="https://github.com/tidaaartorhem/Challengeship"
              demoLink="https://devpost.com/software/challengeship"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Notify"
              description=" A Notification Service created in React that utilizes third part apis such as Twillio to remind people about driving license and license plate sticker renewals made for ServiceOntario"
              ghLink="https://github.com/tidaaartorhem/NotifySO-in-React"
              demoLink="https://notify-service-ontario.firebaseapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="SO Location Finder"
              description="A Service Ontario Location finder web app made in VueJs that uses third part apis such as GoogleMaps to search and organize information about nearby Service Ontario Locations"
              ghLink="https://github.com/tidaaartorhem/ServiceOntarioLocationpages"
              demoLink="https://so-locations.firebaseapp.com/home"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Super Market Billing System"
              description="A Simple online supermarket billing system that helps organize reciepts and payments with vendors and customers utilizing C++ classes and objects"
              ghLink="https://github.com/tidaaartorhem/Supermarket-Billing-system"
           //   demoLink="https://so-locations.firebaseapp.com/home"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
