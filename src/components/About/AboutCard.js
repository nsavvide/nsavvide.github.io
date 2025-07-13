import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Niels Savvides</span>
            from <span className="purple">Belgium</span>.
            <br />I hold a Master's degree{" "}
            <span className="purple">cum laude</span> in Information
            Technologies from <span className="purple">Ghent University</span>,
            and I am currently pursuing a Master's in
            <span className="purple"> Computer Science Engineering</span>.
            <br />
            <br />I have worked at{" "}
            <a
              href="https://www.alternatief.ai/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "orange",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              AlternatiefBV
            </a>
            , and completed internships at{" "}
            <a
              href="https://sirus.be/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "orange",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              SirusBV
            </a>{" "}
            and{" "}
            <a
              href="https://www.qargo.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "orange",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Qargo
            </a>
            .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Hitting the Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Entertaining my Girlfriend 😄
            </li>
          </ul>

          <p style={{ color: "rgb(227, 115, 94)" }}>
            "There is always a solution."
          </p>
          <footer className="blockquote-footer">Niels</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
