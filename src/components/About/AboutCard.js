import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aadit Mehrotra </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />I am currently working at a Fintech Consulting firm called Capco in downtown Toronto. I recently graduated with a Bachelor of Applied Science in System Design Engineering at University of Waterloo.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Poker
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading 
            </li>
            <li className="about-activity">
              <ImPointRight /> Soccer
            </li>
          </ul>

          <p style={{ color: "#0390fc" }}>
            "Striving to create my own verse in the song of humanity!"{" "}
          </p>
          <footer className="blockquote-footer">Unknown</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
